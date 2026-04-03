import { ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
    {/* Glow orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

    <div className="section-container relative z-10 w-full">
      <p className="text-primary font-display text-sm tracking-widest uppercase mb-4 animate-fade-up">
        Student Portfolio
      </p>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
        Communicating Ideas,
        <br />
        <span className="gradient-text">Creating Impact</span>
      </h1>
      <p className="max-w-xl text-muted-foreground text-lg mb-10 animate-fade-up-delay-2">
        A portfolio showcasing creativity, critical thinking, and effective
        communication across multiple formats.
      </p>
      <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
        <a
          href="#portfolio"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:brightness-110 transition"
        >
          View Portfolio
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-xl border border-border text-foreground font-display font-semibold text-sm hover:border-primary/50 transition"
        >
          Contact Me
        </a>
      </div>

      <a
        href="#intro"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </div>
  </section>
);

export default HeroSection;
