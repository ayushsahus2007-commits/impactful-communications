import { PenLine, Image, MessageCircle } from "lucide-react";

const projects = [
  {
    icon: PenLine,
    title: "Written Communication",
    desc: "Focuses on clarity, logical structure, and effective expression of ideas. Demonstrates strong writing and analytical thinking.",
  },
  {
    icon: Image,
    title: "Visual Communication",
    desc: "Uses design, layout, and imagery to communicate messages effectively without heavy reliance on text.",
  },
  {
    icon: MessageCircle,
    title: "Interactive Communication",
    desc: "Represents communication through engagement, storytelling, or real-life scenarios.",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-container">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
      My <span className="gradient-text">Portfolio</span>
    </h2>
    <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
      This portfolio explores communication as a concept, process, and experience.
      It demonstrates how ideas are created, delivered, and interpreted.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="glass-card p-8 group hover:glow-border transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            <Icon size={22} className="text-primary" />
          </div>
          <h3 className="font-display text-lg font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
