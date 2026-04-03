import { Lightbulb, Users, Shuffle } from "lucide-react";

const highlights = [
  { icon: Lightbulb, text: "Clear and structured thinking" },
  { icon: Users, text: "Creative problem-solving" },
  { icon: Shuffle, text: "Adaptability across formats" },
];

const AboutSection = () => (
  <section id="about" className="section-container">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
      About <span className="gradient-text">Me</span>
    </h2>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="glass-card p-8">
        <h3 className="font-display text-xl font-semibold mb-4 text-primary">Who I Am</h3>
        <p className="text-muted-foreground leading-relaxed">
          I am a motivated learner with a strong interest in communication,
          creativity, and problem-solving. I enjoy presenting ideas in a structured
          and impactful way.
        </p>
      </div>
      <div className="glass-card p-8">
        <h3 className="font-display text-xl font-semibold mb-4 text-primary">My Approach</h3>
        <p className="text-muted-foreground leading-relaxed">
          I believe communication is not just about sharing information, but about
          building connections, understanding perspectives, and creating value.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      {highlights.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="glass-card px-6 py-4 flex items-center gap-3 hover:glow-border transition-all duration-300"
        >
          <Icon size={20} className="text-primary shrink-0" />
          <span className="text-sm font-medium">{text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AboutSection;
