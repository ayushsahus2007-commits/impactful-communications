import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CinematicHeroProps {
  title: string;
  subtitle: string;
  meta: string;
  mediaSrc: string;
  bgImageSrc: string;
  scrollHint?: string;
}

const CinematicHero = ({
  title,
  subtitle,
  meta,
  mediaSrc,
  bgImageSrc,
  scrollHint = "Scroll to dive into the story",
}: CinematicHeroProps) => {
  const rootRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLImageElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const metaRef = useRef<HTMLParagraphElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
  const orbLeftRef = useRef<HTMLDivElement | null>(null);
  const orbRightRef = useRef<HTMLDivElement | null>(null);

  const titleWords = useMemo(() => title.split(" "), [title]);

  useEffect(() => {
    const section = rootRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const context = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".cinematic-hero__word");
      const introTargets = [metaRef.current, subtitleRef.current, frameRef.current];

      gsap.set(words, { autoAlpha: 0, yPercent: 120, rotateX: -45 });
      gsap.set(introTargets, { autoAlpha: 0, y: 32 });
      gsap.set([orbLeftRef.current, orbRightRef.current], { autoAlpha: 0.25 });

      const introTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTimeline
        .to(words, {
          autoAlpha: 1,
          yPercent: 0,
          rotateX: 0,
          stagger: 0.08,
          duration: 1,
        })
        .to(
          introTargets,
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.85,
          },
          "-=0.65",
        )
        .fromTo(
          hintRef.current,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.35",
        );

      // Floating ambient lights are timeline-free so they keep moving while the user reads.
      gsap.to(orbLeftRef.current, {
        yPercent: -18,
        xPercent: 12,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(orbRightRef.current, {
        yPercent: 16,
        xPercent: -10,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: pinRef.current,
          anticipatePin: 1,
        },
      });

      scrollTimeline
        .fromTo(
          backgroundRef.current,
          {
            scale: 1,
            yPercent: 0,
          },
          {
            scale: 1.14,
            yPercent: 7,
            overwrite: "auto",
            ease: "none",
          },
          0,
        )
        .fromTo(
          frameRef.current,
          {
            scale: 1,
            yPercent: 0,
            borderRadius: "1.35rem",
          },
          {
            scale: 0.88,
            yPercent: -12,
            borderRadius: "2rem",
            overwrite: "auto",
            ease: "none",
          },
          0,
        )
        .fromTo(
          mediaRef.current,
          {
            scale: 1,
            rotation: 0,
            yPercent: 0,
          },
          {
            scale: 1.28,
            rotation: -2,
            yPercent: -6,
            overwrite: "auto",
            ease: "none",
          },
          0,
        )
        .fromTo(
          overlayRef.current,
          {
            autoAlpha: 0.4,
          },
          {
            autoAlpha: 0.78,
            overwrite: "auto",
            ease: "none",
          },
          0,
        )
        .fromTo(
          words,
          {
            yPercent: 0,
            autoAlpha: 1,
          },
          {
            yPercent: (index) => (index % 2 === 0 ? -150 : 150),
            autoAlpha: 0,
            stagger: 0.03,
            overwrite: "auto",
            ease: "none",
          },
          0.08,
        )
        .fromTo(
          [subtitleRef.current, metaRef.current],
          {
            autoAlpha: 1,
            y: 0,
          },
          {
            autoAlpha: 0,
            y: 36,
            stagger: 0.06,
            overwrite: "auto",
            ease: "none",
          },
          0.16,
        )
        .fromTo(
          hintRef.current,
          {
            autoAlpha: 1,
            y: 0,
          },
          {
            autoAlpha: 0,
            y: 18,
            overwrite: "auto",
            ease: "none",
          },
          0.02,
        )
        .fromTo(
          orbLeftRef.current,
          {
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
          },
          {
            xPercent: 28,
            yPercent: -36,
            rotation: 20,
            overwrite: "auto",
            ease: "none",
          },
          0,
        )
        .fromTo(
          orbRightRef.current,
          {
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
          },
          {
            xPercent: -26,
            yPercent: 28,
            rotation: -20,
            overwrite: "auto",
            ease: "none",
          },
          0,
        );
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative h-[230vh] overflow-clip"
      aria-label="Hero section"
    >
      <div ref={pinRef} className="relative h-screen overflow-hidden">
        <div ref={backgroundRef} className="absolute inset-0">
          <img
            src={bgImageSrc}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(16,185,129,0.22),transparent_45%),radial-gradient(circle_at_82%_78%,rgba(59,130,246,0.18),transparent_42%)]" />
        </div>

        <div
          ref={orbLeftRef}
          className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl"
        />
        <div
          ref={orbRightRef}
          className="pointer-events-none absolute -right-16 bottom-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <p
            ref={metaRef}
            className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-emerald-300 md:text-sm"
          >
            {meta}
          </p>

          <h1 className="mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            {titleWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="cinematic-hero__word inline-block [text-shadow:0_10px_40px_rgba(0,0,0,0.42)]"
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-200 md:text-base"
          >
            {subtitle}
          </p>

          <div
            ref={frameRef}
            className="cursor-target magnetic-target relative w-full max-w-4xl overflow-hidden rounded-[1.35rem] border border-white/30 bg-black/25 shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
          >
            <div className="aspect-[16/9]">
              <img
                ref={mediaRef}
                src={mediaSrc}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-40"
            />
            <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md md:text-xs">
              Featured Story
            </div>
          </div>
        </div>

        <div
          ref={hintRef}
          className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-md md:bottom-10"
        >
          {scrollHint}
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
