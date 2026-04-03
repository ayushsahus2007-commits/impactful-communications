import {
  BarChart3,
  Brain,
  Crown,
  Languages,
  Palette,
  Presentation,
  Users,
  Wifi,
} from "lucide-react";
import Hyper3DZone from "@/components/ui/hyper-3d-zone";

const skills = [
  {
    icon: Languages,
    label: "Communication (LSRW)",
    level: 90,
    context: "Clear writing, confident speaking, and attentive listening.",
  },
  {
    icon: Brain,
    label: "Critical Thinking",
    level: 86,
    context: "Breaking down problems and choosing practical solutions.",
  },
  {
    icon: Palette,
    label: "Creative Thinking",
    level: 88,
    context: "Turning concepts into engaging visual and verbal formats.",
  },
  {
    icon: Crown,
    label: "Leadership",
    level: 80,
    context: "Driving collaboration and ownership in team communication.",
  },
  {
    icon: Wifi,
    label: "Digital Communication",
    level: 92,
    context: "Communicating effectively across modern digital platforms.",
  },
];

const skillTracks = [
  {
    icon: Presentation,
    title: "Communication Mastery",
    points: "Story structure, tone control, and audience alignment.",
  },
  {
    icon: Palette,
    title: "Visual & Design Thinking",
    points: "Layout decisions, hierarchy, and fast message comprehension.",
  },
  {
    icon: BarChart3,
    title: "Analytical Reflection",
    points: "Data-backed improvement through feedback and interpretation.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    points: "Constructive dialogue, conflict handling, and shared outcomes.",
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-container">
    <h2
      data-reveal
      className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
    >
      My <span className="gradient-text">Skills</span>
    </h2>

    <p
      data-reveal
      className="text-center text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
    >
      My skill set is built through applied practice, reflection, and iteration.
      Each capability below is actively used in portfolio projects to improve how
      messages are designed, delivered, and understood.
    </p>

    <Hyper3DZone tilt={15} depth={250}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {skills.map(({ icon: Icon, label, level, context }) => (
          <div
            key={label}
            data-reveal
            data-depth-card
            className="cursor-target glass-card liquid-button-card p-6 flex flex-col items-center text-center gap-4 hover:glow-border transition-all duration-300 hover:-translate-y-1"
          >
            <Icon size={28} className="text-primary" />
            <span className="text-sm font-medium">{label}</span>
            <p className="text-xs text-muted-foreground leading-relaxed">{context}</p>
            <div className="w-full mt-1">
              <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-300"
                  style={{ width: `${level}%` }}
                />
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-primary/85">
                Proficiency {level}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </Hyper3DZone>

    <Hyper3DZone className="mt-10" tilt={12} depth={190}>
      <div className="grid md:grid-cols-2 gap-5">
        {skillTracks.map(({ icon: Icon, title, points }) => (
          <article
            key={title}
            data-reveal
            data-depth-card
            className="cursor-target glass-card liquid-button-card p-6 hover:glow-border transition-all duration-300"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon size={18} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{points}</p>
          </article>
        ))}
      </div>
    </Hyper3DZone>

    <Hyper3DZone className="mt-10" tilt={8} depth={140}>
      <div
        data-reveal
        data-depth-card
        className="rounded-xl border border-primary/20 bg-primary/5 glass-soft px-5 py-4 text-sm text-muted-foreground leading-relaxed"
      >
        These skills are continuously sharpened through portfolio tasks in written,
        visual, and audio communication, helping me convert ideas into clear and
        impactful outcomes.
      </div>
    </Hyper3DZone>
  </section>
);

export default SkillsSection;
