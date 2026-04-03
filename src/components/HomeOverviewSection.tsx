import {
  ArrowRight,
  Compass,
  Image as ImageIcon,
  Mic2,
  PenLine,
  Sparkles,
  Target,
} from "lucide-react";

const communicationModes = [
  {
    icon: PenLine,
    title: "Written Mode",
    description:
      "Structured writing that focuses on clarity, sequencing, and context in digital interactions.",
  },
  {
    icon: ImageIcon,
    title: "Visual Mode",
    description:
      "Visual storytelling with design choices that help ideas land faster and stay memorable.",
  },
  {
    icon: Mic2,
    title: "Audio Mode",
    description:
      "Voice delivery through pace, tone, and emphasis to communicate emotion and intent.",
  },
];

const roadmap = [
  {
    icon: Compass,
    title: "Observe",
    detail: "Identify communication gaps and user needs before creating.",
  },
  {
    icon: Sparkles,
    title: "Design",
    detail: "Build message structure and visuals that match audience context.",
  },
  {
    icon: Target,
    title: "Deliver",
    detail: "Present with intentional tone, pace, and actionable outcomes.",
  },
];

const HomeOverviewSection = () => (
  <section className="section-container pt-10 md:pt-14">
    <div
      data-reveal
      className="cursor-target glass-card liquid-button-card p-8 md:p-10 lg:p-12"
    >
      <p className="eyebrow-text text-primary/85 mb-3">
        Home Overview
      </p>

      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        Inside This <span className="gradient-text">Communication Journey</span>
      </h2>

      <p className="text-muted-foreground leading-relaxed max-w-3xl">
        This portfolio is designed as a practical communication story. Each section
        combines evidence, reflection, and medium-specific choices so you can see
        how a single theme adapts across writing, visuals, and voice.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        {communicationModes.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            data-reveal
            className="cursor-target rounded-2xl border border-white/10 bg-black/20 glass-soft p-5 transition-all duration-300 hover:border-primary/35 hover:bg-black/30"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {roadmap.map(({ icon: Icon, title, detail }) => (
          <article
            key={title}
            data-reveal
            className="cursor-target rounded-xl border border-primary/20 bg-primary/5 glass-soft px-4 py-4"
          >
            <div className="mb-3 flex items-center gap-2">
              <Icon size={17} className="text-primary" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">
                {title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/25 glass-soft px-5 py-4">
        <p className="text-sm text-muted-foreground">
          Jump into the portfolio section to explore all three communication modes
          with examples, analysis, and reflection.
        </p>
        <a
          href="#portfolio"
          className="cursor-target magnetic-target inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/25"
        >
          Explore Portfolio
          <ArrowRight size={15} />
        </a>
      </div>
    </div>
  </section>
);

export default HomeOverviewSection;
