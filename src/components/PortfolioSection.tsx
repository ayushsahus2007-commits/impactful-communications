import {
  ArrowRight,
  Image,
  MessageCircle,
  PenLine,
  Search,
  Sparkles,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Hyper3DZone from "@/components/ui/hyper-3d-zone";

const projects = [
  {
    icon: PenLine,
    emoji: "✍️",
    title: "Written Communication",
    theme: "Theme: Communication in Digital Interactions",
    desc: "Shows how clear wording and specific deadlines prevent misunderstandings in team chats and written collaboration.",
    goal: "Goal: Improve clarity and reduce ambiguity in online team updates.",
    output: "Output: Structured samples, reflection notes, and communication framework.",
    impact: "Impact: More direct requests, fewer follow-up clarifications.",
    link: "/written-communication",
    iconWrapClass: "bg-amber-500/15 group-hover:bg-amber-500/25",
    iconClass: "text-amber-300",
    themeClass: "text-amber-300/80",
  },
  {
    icon: Image,
    emoji: "🎨",
    title: "Visual Communication",
    theme: "Theme: Communication Through Digital Media",
    desc: "Explores memes as visual storytelling, where context, layout, and imagery deliver fast and relatable meaning.",
    goal: "Goal: Convey layered meaning in seconds using layout and visual cues.",
    output: "Output: Visual artifacts, chart analysis, and audience interpretation notes.",
    impact: "Impact: Faster message recognition and better emotional engagement.",
    link: "/visual-communication",
    iconWrapClass: "bg-fuchsia-500/15 group-hover:bg-fuchsia-500/25",
    iconClass: "text-fuchsia-300",
    themeClass: "text-fuchsia-300/80",
  },
  {
    icon: MessageCircle,
    emoji: "🎧",
    title: "Audio Communication",
    theme: "Theme: Communication Through Voice and Expression",
    desc: "Highlights tone, pitch, and pauses to show how the same sentence can communicate different emotions and intent.",
    goal: "Goal: Improve voice-based expression with intentional tone and pacing.",
    output: "Output: Interactive audio demo, waveform cues, and speaking reflection.",
    impact: "Impact: Stronger emotional delivery and clearer verbal intent.",
    link: "/audio-communication",
    iconWrapClass: "bg-cyan-500/15 group-hover:bg-cyan-500/25",
    iconClass: "text-cyan-300",
    themeClass: "text-cyan-300/80",
  },
];

const processSteps = [
  {
    icon: Search,
    title: "Research",
    detail: "Observe communication patterns and identify pain points.",
  },
  {
    icon: Sparkles,
    title: "Create",
    detail: "Design medium-specific artifacts with strong storytelling.",
  },
  {
    icon: Target,
    title: "Evaluate",
    detail: "Measure clarity, emotional impact, and audience understanding.",
  },
];

const PortfolioSection = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section-container">
      <h2
        data-reveal
        className="font-display text-3xl md:text-4xl font-bold text-center mb-4"
      >
        My <span className="gradient-text">Portfolio</span>
      </h2>
      <p data-reveal className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
        This portfolio explores communication as a concept, process, and experience.
        It demonstrates how ideas are created, delivered, and interpreted.
      </p>

      <Hyper3DZone tilt={10} depth={180}>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {processSteps.map(({ icon: Icon, title, detail }) => (
            <article
              key={title}
              data-reveal
              data-depth-card
              className="cursor-target rounded-xl border border-primary/20 bg-primary/5 glass-soft px-5 py-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon size={16} className="text-primary" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/90">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
            </article>
          ))}
        </div>
      </Hyper3DZone>

      <Hyper3DZone tilt={15} depth={240}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(
            ({
              icon: Icon,
              emoji,
              title,
              theme,
              desc,
              goal,
              output,
              impact,
              link,
              iconWrapClass,
              iconClass,
              themeClass,
            }) => (
            <div
              key={title}
              onClick={() => link && navigate(link)}
              data-reveal
              data-depth-card
              className={`cursor-target glass-card liquid-button-card p-8 group hover:glow-border transition-all duration-300 hover:-translate-y-1 ${link ? "cursor-pointer" : ""}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${iconWrapClass}`}>
                  <Icon size={22} className={iconClass} />
                </div>
                <span className="text-2xl">{emoji}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{title}</h3>
              <p className={`text-xs mb-2 ${themeClass}`}>{theme}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{desc}</p>
              <p className="text-xs text-muted-foreground/90 leading-relaxed mb-2">{goal}</p>
              <p className="text-xs text-muted-foreground/90 leading-relaxed mb-2">{output}</p>
              <p className="text-xs text-primary/90 leading-relaxed">{impact}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-primary/95">
                Click Here For More
                <ArrowRight size={13} />
              </p>
            </div>
          ))}
        </div>
      </Hyper3DZone>

      <Hyper3DZone tilt={8} depth={140}>
        <div
          data-reveal
          data-depth-card
          className="cursor-target glass-card liquid-button-card mt-10 p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div>
            <h3 className="font-display text-xl font-semibold mb-1">
              Ready to explore each project in detail?
            </h3>
            <p className="text-sm text-muted-foreground">
              Open any card above to view full artifacts, insights, and reflections.
            </p>
          </div>
          <a
            href="#skills"
            className="cursor-target magnetic-target inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/25"
          >
            Continue to Skills
            <ArrowRight size={15} />
          </a>
        </div>
      </Hyper3DZone>
    </section>
  );
};

export default PortfolioSection;
