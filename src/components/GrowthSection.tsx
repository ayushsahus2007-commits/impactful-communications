import {
  Brain,
  MessageSquareText,
  Target,
  TrendingUp,
  UserRoundCheck,
} from "lucide-react";
import Hyper3DZone from "@/components/ui/hyper-3d-zone";

const growthPillars = [
  {
    icon: Brain,
    title: "Strategic Thinking",
    detail:
      "I improved how I break down communication problems and select the right format for each message.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Delivery",
    detail:
      "My writing and speaking became more concise, structured, and easier for different audiences to understand.",
  },
  {
    icon: UserRoundCheck,
    title: "Audience Awareness",
    detail:
      "I now adapt tone, pacing, and visual hierarchy based on context, platform, and audience expectations.",
  },
];

const growthOutcomes = [
  "Better clarity in written communication with fewer ambiguous statements.",
  "Stronger confidence while presenting ideas through voice and expression.",
  "More intentional visual composition for fast and meaningful understanding.",
];

const GrowthSection = () => (
  <section className="section-container">
    <div
      data-reveal
      className="cursor-target glass-card liquid-button-card p-8 md:p-12 max-w-5xl mx-auto"
    >
      <div className="text-center">
        <TrendingUp size={32} className="text-primary mx-auto mb-6" />
        <h2 data-reveal className="font-display text-2xl md:text-3xl font-bold mb-4">
          Learning & <span className="gradient-text">Growth</span>
        </h2>
        <p data-reveal className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          This portfolio captures my progress in communication through continuous
          practice, reflection, and iteration. Across written, visual, and audio
          modes, I learned how to make ideas clearer, delivery stronger, and impact
          more consistent.
        </p>
      </div>

      <Hyper3DZone className="mt-10" tilt={13} depth={210}>
        <div className="grid md:grid-cols-3 gap-5">
          {growthPillars.map(({ icon: Icon, title, detail }) => (
            <article
              key={title}
              data-reveal
              data-depth-card
              className="cursor-target rounded-xl border border-white/15 bg-black/20 glass-soft p-5 hover:border-primary/35 transition-colors"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
            </article>
          ))}
        </div>
      </Hyper3DZone>

      <Hyper3DZone className="mt-9" tilt={10} depth={165}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div
            data-reveal
            data-depth-card
            className="cursor-target rounded-xl border border-primary/20 bg-primary/5 glass-soft px-5 py-4"
          >
            <h3 className="font-display text-lg font-semibold mb-3">Key Outcomes</h3>
            <div className="space-y-3">
              {growthOutcomes.map((item) => (
                <p key={item} className="text-sm text-muted-foreground leading-relaxed">
                  • {item}
                </p>
              ))}
            </div>
          </div>

          <div
            data-reveal
            data-depth-card
            className="cursor-target rounded-xl border border-primary/20 bg-primary/5 glass-soft px-5 py-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Target size={18} className="text-primary" />
              <h3 className="font-display text-lg font-semibold">Next Learning Focus</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Going forward, I want to improve advanced storytelling, stronger
              data-supported arguments, and real-time audience adaptation during
              presentations to make communication even more effective.
            </p>
          </div>
        </div>
      </Hyper3DZone>
    </div>
  </section>
);

export default GrowthSection;
