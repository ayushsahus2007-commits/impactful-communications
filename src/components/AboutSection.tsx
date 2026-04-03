import {
  Goal,
  Handshake,
  Layers,
  Lightbulb,
  Rocket,
  Search,
  Shuffle,
  Users,
} from "lucide-react";
import Hyper3DZone from "@/components/ui/hyper-3d-zone";

const highlights = [
  { icon: Lightbulb, text: "Clear and structured thinking" },
  { icon: Users, text: "Creative problem-solving" },
  { icon: Shuffle, text: "Adaptability across formats" },
];

const coreValues = [
  {
    icon: Goal,
    title: "Intentional Communication",
    description:
      "Every message starts with purpose, audience context, and a clear expected outcome.",
  },
  {
    icon: Handshake,
    title: "Empathy-Driven Delivery",
    description:
      "I prioritize tone and framing so communication feels collaborative, respectful, and actionable.",
  },
  {
    icon: Rocket,
    title: "Continuous Improvement",
    description:
      "I iterate based on feedback and reflection to strengthen clarity and impact over time.",
  },
];

const workflowSteps = [
  {
    icon: Search,
    title: "Understand",
    description: "Analyze context, stakeholders, and goals before drafting any output.",
  },
  {
    icon: Layers,
    title: "Structure",
    description: "Organize ideas with logical flow, concise language, and visual hierarchy.",
  },
  {
    icon: Shuffle,
    title: "Refine",
    description: "Review delivery, adjust tone, and align format for stronger audience response.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-container">
    <h2
      data-reveal
      className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
    >
      About <span className="gradient-text">Me</span>
    </h2>

    <p
      data-reveal
      className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
    >
      I see communication as both a skill and a system. My work focuses on turning
      complex ideas into clear, engaging, and outcome-oriented experiences across
      written, visual, and verbal formats.
    </p>

    <Hyper3DZone tilt={12} depth={210}>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div
          data-reveal
          data-depth-card
          className="cursor-target glass-card liquid-button-card p-8"
        >
          <h3 data-reveal className="font-display text-xl font-semibold mb-4 text-primary">
            Who I Am
          </h3>
          <p data-reveal className="text-muted-foreground leading-relaxed">
            I am a motivated learner with a strong interest in communication,
            creativity, and problem-solving. I enjoy presenting ideas in a structured
            and impactful way.
          </p>
          <p data-reveal className="text-sm text-muted-foreground/85 leading-relaxed mt-4">
            My focus is on building trust through clarity and reducing friction in how
            people understand information.
          </p>
        </div>
        <div
          data-reveal
          data-depth-card
          className="cursor-target glass-card liquid-button-card p-8"
        >
          <h3 data-reveal className="font-display text-xl font-semibold mb-4 text-primary">
            My Approach
          </h3>
          <p data-reveal className="text-muted-foreground leading-relaxed">
            I believe communication is not just about sharing information, but about
            building connections, understanding perspectives, and creating value.
          </p>
          <p data-reveal className="text-sm text-muted-foreground/85 leading-relaxed mt-4">
            I combine research, storytelling, and feedback loops to make each message
            precise, practical, and memorable.
          </p>
        </div>
      </div>
    </Hyper3DZone>

    <Hyper3DZone tilt={14} depth={240}>
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {coreValues.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            data-reveal
            data-depth-card
            className="cursor-target glass-card liquid-button-card p-6 hover:glow-border transition-all duration-300"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon size={18} />
            </div>
            <h3 className="font-display text-base font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </article>
        ))}
      </div>
    </Hyper3DZone>

    <Hyper3DZone tilt={9} depth={160}>
      <div className="flex flex-wrap justify-center gap-6">
        {highlights.map(({ icon: Icon, text }) => (
          <div
            key={text}
            data-reveal
            data-depth-card
            className="cursor-target glass-card liquid-button-card px-6 py-4 flex items-center gap-3 hover:glow-border transition-all duration-300"
          >
            <Icon size={20} className="text-primary shrink-0" />
            <span className="text-sm font-medium">{text}</span>
          </div>
        ))}
      </div>
    </Hyper3DZone>

    <Hyper3DZone tilt={11} depth={190}>
      <div className="mt-12 grid md:grid-cols-3 gap-4">
        {workflowSteps.map(({ icon: Icon, title, description }, index) => (
          <article
            key={title}
            data-reveal
            data-depth-card
            className="cursor-target rounded-xl border border-primary/20 bg-primary/5 glass-soft px-5 py-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-primary/80 mb-2">
              Step {index + 1}
            </p>
            <div className="flex items-center gap-2 mb-2">
              <Icon size={16} className="text-primary" />
              <h3 className="font-semibold text-sm">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </article>
        ))}
      </div>
    </Hyper3DZone>
  </section>
);

export default AboutSection;
