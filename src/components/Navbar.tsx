import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const getDocumentTop = (element: HTMLElement) => {
    let top = 0;
    let current: HTMLElement | null = element;

    while (current) {
      top += current.offsetTop;
      current = current.offsetParent as HTMLElement | null;
    }

    return top;
  };

  const scrollToAnchor = useCallback((href: string) => {
    if (!href.startsWith("#")) return;

    const id = href.slice(1);

    if (id === "home") {
      window.history.replaceState(null, "", href);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    // Prefer the visible title element so navigation lands exactly on headings.
    const titleTarget =
      section.querySelector<HTMLElement>("h1, h2, h3, [data-anchor-title]") ?? section;
    const navHeight = navRef.current?.offsetHeight ?? 64;
    const titleTop = getDocumentTop(titleTarget);
    const y = titleTop - navHeight - 8;

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });
  }, []);

  const handleLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string, closeMobile = false) => {
      event.preventDefault();
      scrollToAnchor(href);
      if (closeMobile) {
        setMobileOpen(false);
      }
    },
    [scrollToAnchor],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(event) => handleLinkClick(event, "#home")}
          className="cursor-target magnetic-target font-display font-bold text-lg gradient-text"
        >
          Portfolio
        </a>

        <span className="hidden md:block absolute left-1/2 -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap">
          Ayush Sahu | Reg No: 25BCE2312
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(event) => handleLinkClick(event, l.href)}
              className="cursor-target magnetic-target font-accent text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <LiquidButton
          size="icon"
          tone="mint"
          className="cursor-target md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </LiquidButton>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-4 animate-fade-up">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(event) => handleLinkClick(event, l.href, true)}
              className="cursor-target magnetic-target block py-2 font-accent text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <p className="pt-2 text-xs text-muted-foreground">
            Ayush Sahu | Reg No: 25BCE2312
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
