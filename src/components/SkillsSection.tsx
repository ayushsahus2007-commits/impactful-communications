import { Languages, Brain, Palette, Crown, Wifi } from "lucide-react";

const skills = [
  { icon: Languages, label: "Communication (LSRW)" },
  { icon: Brain, label: "Critical Thinking" },
  { icon: Palette, label: "Creative Thinking" },
  { icon: Crown, label: "Leadership" },
  { icon: Wifi, label: "Digital Communication" },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
      My <span className="gradient-text">Skills</span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
      {skills.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="glass-card liquid-button-card p-6 flex flex-col items-center text-center gap-4 hover:glow-border transition-all duration-300 hover:-translate-y-1"
        >
          <Icon size={28} className="text-primary" />
          <span className="text-sm font-medium">{label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
