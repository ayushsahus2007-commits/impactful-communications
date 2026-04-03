import { Image as ImageIcon, MessageSquareMore, Mic2, PenLine, Sparkles } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const HeroScrollDemo = () => {
  return (
    <div className="relative flex flex-col overflow-hidden pt-20 md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,hsl(var(--primary)/0.20),transparent_44%),radial-gradient(circle_at_80%_72%,rgba(59,130,246,0.18),transparent_42%)]" />

      <ContainerScroll
        titleComponent={
          <div className="px-2">
            <p className="eyebrow-text mb-4 flex items-center justify-center gap-2 text-primary/90">
              <Sparkles size={14} className="text-primary" />
              Featured Story
            </p>
            <h1 className="text-4xl font-semibold text-foreground md:text-6xl">
              Crafting Communication That Moves
              <br />
              <span className="gradient-text mt-1 inline-block text-4xl font-bold leading-none md:text-[6rem]">
                People
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-200/90 md:text-base">
              A bold showcase of writing, visuals, and voice where every section
              responds to your movement and tells a clear story.
            </p>
          </div>
        }
      >
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="People collaborating in a communication workshop"
            className="mx-auto h-full w-full object-cover object-center"
            draggable={false}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-slate-900/40 to-emerald-900/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,hsl(var(--primary)/0.36),transparent_38%),radial-gradient(circle_at_76%_80%,rgba(59,130,246,0.20),transparent_38%)]" />

          <div className="absolute left-5 right-5 top-5 md:left-8 md:right-8 md:top-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-black/35 glass-soft px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-primary/95 backdrop-blur-md">
              <MessageSquareMore size={14} />
              Communication In Action
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 grid gap-3 md:bottom-8 md:left-8 md:right-8 md:grid-cols-3">
            <article className="rounded-xl border border-white/20 bg-black/35 glass-soft px-3 py-2.5 text-white/95 backdrop-blur-md md:px-4 md:py-3">
              <p className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-primary/90">
                <PenLine size={13} />
                Written
              </p>
              <p className="text-xs leading-relaxed md:text-sm">
                Clear structure turns complex ideas into fast decisions.
              </p>
            </article>

            <article className="rounded-xl border border-white/20 bg-black/35 glass-soft px-3 py-2.5 text-white/95 backdrop-blur-md md:px-4 md:py-3">
              <p className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-primary/90">
                <ImageIcon size={13} />
                Visual
              </p>
              <p className="text-xs leading-relaxed md:text-sm">
                Visual hierarchy helps audiences understand in seconds.
              </p>
            </article>

            <article className="rounded-xl border border-white/20 bg-black/35 glass-soft px-3 py-2.5 text-white/95 backdrop-blur-md md:px-4 md:py-3">
              <p className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-primary/90">
                <Mic2 size={13} />
                Audio
              </p>
              <p className="text-xs leading-relaxed md:text-sm">
                Tone and pacing make spoken communication more persuasive.
              </p>
            </article>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};
