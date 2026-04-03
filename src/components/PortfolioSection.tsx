import { PenLine, Image, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    icon: PenLine,
    emoji: "✍️",
    title: "Written Communication",
    theme: "Theme: Communication in Digital Interactions",
    desc: "Shows how clear wording and specific deadlines prevent misunderstandings in team chats and written collaboration.",
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
    link: "/audio-communication",
    iconWrapClass: "bg-cyan-500/15 group-hover:bg-cyan-500/25",
    iconClass: "text-cyan-300",
    themeClass: "text-cyan-300/80",
  },
];

const PortfolioSection = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section-container">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="gradient-text">Portfolio</span>
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
        This portfolio explores communication as a concept, process, and experience.
        It demonstrates how ideas are created, delivered, and interpreted.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ icon: Icon, emoji, title, theme, desc, link, iconWrapClass, iconClass, themeClass }) => (
          <div
            key={title}
            onClick={() => link && navigate(link)}
            className={`glass-card liquid-button-card p-8 group hover:glow-border transition-all duration-300 hover:-translate-y-1 ${link ? "cursor-pointer" : ""}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${iconWrapClass}`}>
                <Icon size={22} className={iconClass} />
              </div>
              <span className="text-2xl">{emoji}</span>
            </div>
            <h3 className="font-display text-lg font-semibold mb-3">{title}</h3>
            <p className={`text-xs mb-2 ${themeClass}`}>{theme}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
