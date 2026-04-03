import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

const SectionReveal = ({ children, className }: SectionRevealProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      gsap.set(root, {
        autoAlpha: 0,
      });

      gsap.to(root, {
        autoAlpha: 1,
        duration: 0.55,
        ease: "power3.out",
        overwrite: "auto",
        scrollTrigger: {
          trigger: root,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }, root);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
};

export default SectionReveal;
