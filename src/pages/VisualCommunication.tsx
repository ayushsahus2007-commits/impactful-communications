import { ArrowLeft, Image } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const visualImpactData = [
  { name: "Fast Emotional Recognition", value: 34 },
  { name: "Context-Based Humor", value: 28 },
  { name: "Message Recall", value: 21 },
  { name: "Conversation Trigger", value: 17 },
];

const visualColors = [
  "hsl(var(--primary))",
  "hsl(195 80% 56%)",
  "hsl(271 83% 66%)",
  "hsl(35 92% 64%)",
];

const RADIAN = Math.PI / 180;

const renderVisualLabel = (props: {
  cx?: number;
  cy?: number;
  midAngle?: number;
  outerRadius?: number;
  percent?: number;
  name?: string;
}) => {
  const {
    cx = 0,
    cy = 0,
    midAngle = 0,
    outerRadius = 0,
    percent = 0,
    name = "",
  } = props;

  const labelRadius = outerRadius + 24;
  let x = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const y = cy + labelRadius * Math.sin(-midAngle * RADIAN);
  const isRight = x >= cx;

  x += isRight ? 6 : -6;

  return (
    <text
      x={x}
      y={y}
      fill="hsl(var(--foreground))"
      fontSize={13}
      textAnchor={isRight ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${name}: ${Math.round(percent * 100)}%`}
    </text>
  );
};

const VisualCommunication = () => (
  <div
    className="min-h-screen bg-background bg-cover bg-center bg-fixed text-foreground"
    style={{
      backgroundImage:
        "linear-gradient(hsl(var(--background) / 0.55), hsl(var(--background) / 0.7)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop')",
    }}
  >
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link
        to="/#portfolio"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Image size={22} className="text-primary" />
        </div>
        <span className="text-3xl">🎨</span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-2">
        Visual <span className="gradient-text">Communication</span>
      </h1>

      <div className="space-y-8 mt-10">
        <section className="glass-card liquid-button-card p-8">
          <h2 className="font-display text-xl font-semibold mb-1">Memes as Modern Communication</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Theme: Communication Through Digital Media
          </p>
        </section>

        <section className="glass-card liquid-button-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Description – Visual Message</h2>
          <p className="text-muted-foreground leading-relaxed">
            This visual entry explores how memes function as a powerful form of communication in digital environments. Memes combine images, expressions, and minimal text to convey complex ideas, emotions, and social situations in a simple and relatable way.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            In this entry, I used memes to represent situations of miscommunication and everyday interactions. Each meme captures a specific scenario—such as misunderstanding instructions, delayed responses, or assumptions in conversations. The humor in memes makes the message engaging, while the visuals ensure that the idea is understood quickly without requiring detailed explanation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Memes rely heavily on shared context and cultural understanding. A single image, combined with a short caption, can communicate emotions like frustration, confusion, or sarcasm instantly. This makes memes an effective tool for digital communication, especially among younger audiences.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Through this approach, the entry highlights how communication has evolved in the digital age, where visuals and humor play a key role in expressing thoughts and experiences.
          </p>
        </section>

        <section className="glass-card liquid-button-card p-8 space-y-4">
          <h2 className="font-display text-xl font-semibold">Reflection</h2>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <p>
              <span className="text-foreground font-medium">Purpose:</span> to demonstrate
              how visuals and minimal text can communicate ideas quickly.
            </p>
            <p>
              <span className="text-foreground font-medium">Target audience:</span> digital
              users who consume communication through social platforms and visual feeds.
            </p>
            <p>
              <span className="text-foreground font-medium">Theme connection:</span> this
              entry explores communication as a visual process shaped by shared context and
              interpretation.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Through this entry, I learned that communication is not limited to formal methods but also exists in everyday digital interactions. Memes show how visual elements can simplify complex ideas and make communication more engaging.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I also understood the importance of audience awareness, as memes are effective only when the viewer understands the context behind them.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This experience improved my ability to think creatively and communicate ideas in a concise and impactful way. It also helped me recognize the role of digital media in shaping modern communication.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Overall, this entry reflects my understanding of visual communication as a fast, relatable, and powerful tool in today’s digital world.
          </p>
        </section>

        <section className="glass-card liquid-button-card p-8 space-y-5">
          <h2 className="font-display text-xl font-semibold">
            Visual Communication Impact Graph
          </h2>
          <p className="text-sm text-muted-foreground">
            Illustrative distribution of why visual posts and memes spread quickly in digital
            communication.
          </p>
          <div className="h-80 w-full rounded-xl bg-background/40 p-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart margin={{ top: 20, right: 60, bottom: 20, left: 60 }}>
                <Pie
                  data={visualImpactData}
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  innerRadius={50}
                  paddingAngle={4}
                  dataKey="value"
                  labelLine={false}
                  label={renderVisualLabel}
                >
                  {visualImpactData.map((entry, index) => (
                    <Cell key={entry.name} fill={visualColors[index % visualColors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value}%`, name]}
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 32, 0.94)",
                    border: "1px solid rgba(52, 211, 153, 0.4)",
                    color: "#d7f8ee",
                    borderRadius: "12px",
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.35)",
                  }}
                  itemStyle={{ color: "#d7f8ee", fontWeight: 600 }}
                  labelStyle={{ color: "#a6eed5" }}
                  wrapperStyle={{ outline: "none" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="glass-card liquid-button-card p-8 space-y-5">
          <h2 className="font-display text-xl font-semibold">Visual References</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-border/70 bg-background/35">
              <img
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1280&auto=format&fit=crop"
                alt="People reacting to visuals and memes on mobile screens."
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="p-3 text-xs text-muted-foreground">
                Visuals create instant reactions and shared meaning.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-border/70 bg-background/35">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1280&auto=format&fit=crop"
                alt="Social media style tiles representing visual storytelling."
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <figcaption className="p-3 text-xs text-muted-foreground">
                Social media platforms depend heavily on visual communication.
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default VisualCommunication;
