import { Bot, Brain, ShieldCheck, Sparkles } from "lucide-react";
import Hyper3DZone from "@/components/ui/hyper-3d-zone";

const aiTools = [
  {
    name: "Lovable",
    use: "Used for UI concept exploration and structure inspiration during early design decisions.",
  },
  {
    name: "Trae",
    use: "Used for workflow support while testing alternative implementation approaches.",
  },
  {
    name: "Codex",
    use: "Used for coding assistance, refactoring support, and faster iteration on frontend features.",
  },
  {
    name: "21st Dev",
    use: "Used for modern component ideas and implementation references aligned with current trends.",
  },
];

const AIDisclosure = () => (
  <section className="section-container">
    <div
      data-reveal
      className="cursor-target glass-card liquid-button-card p-8 md:p-10 max-w-5xl mx-auto"
    >
      <div className="flex items-start gap-4 mb-7">
        <Bot size={24} className="text-primary shrink-0 mt-0.5" />
        <div>
          <h3 data-reveal className="font-display text-xl font-semibold mb-2">
            AI Overview & Disclosure
          </h3>
          <p data-reveal className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
            AI tools supported ideation, structure, and development speed in this
            portfolio. Final decisions, interpretation, reflection content, and
            creative direction remain my own.
          </p>
        </div>
      </div>

      <Hyper3DZone tilt={12} depth={200}>
        <div className="grid md:grid-cols-2 gap-4 mb-7">
          {aiTools.map(({ name, use }) => (
            <article
              key={name}
              data-reveal
              data-depth-card
              className="cursor-target rounded-xl border border-white/15 bg-black/20 glass-soft p-4"
            >
              <p className="font-accent text-sm uppercase tracking-[0.14em] text-primary/90 mb-2">
                {name}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{use}</p>
            </article>
          ))}
        </div>
      </Hyper3DZone>

      <Hyper3DZone tilt={10} depth={170}>
        <div className="grid md:grid-cols-3 gap-4">
          <div
            data-reveal
            data-depth-card
            className="rounded-xl border border-primary/20 bg-primary/5 glass-soft px-4 py-3"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles size={15} className="text-primary" />
              <p className="text-sm font-semibold">Where AI Helped</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Brainstorming, drafting options, and speeding up prototype iterations.
            </p>
          </div>

          <div
            data-reveal
            data-depth-card
            className="rounded-xl border border-primary/20 bg-primary/5 glass-soft px-4 py-3"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Brain size={15} className="text-primary" />
              <p className="text-sm font-semibold">Human Contribution</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Theme selection, final writing, voice intent, and reflection insights.
            </p>
          </div>

          <div
            data-reveal
            data-depth-card
            className="rounded-xl border border-primary/20 bg-primary/5 glass-soft px-4 py-3"
          >
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck size={15} className="text-primary" />
              <p className="text-sm font-semibold">Integrity Check</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              All outputs were reviewed, edited, and validated for accuracy and
              personal ownership before final submission.
            </p>
          </div>
        </div>
      </Hyper3DZone>
    </div>
  </section>
);

export default AIDisclosure;
