import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollDepthSectionProps {
  children: ReactNode;
  className?: string;
  tilt?: number;
  distance?: number;
}

const ScrollDepthSection = ({
  children,
  className,
  tilt = 6,
  distance = 140,
}: ScrollDepthSectionProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      const content = root.querySelector<HTMLElement>("[data-depth-content]");
      const glow = root.querySelector<HTMLElement>("[data-depth-glow]");

      if (!content) return;

      gsap.set(content, {
        transformPerspective: 1300,
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      });

      gsap.fromTo(
        content,
        {
          rotationX: 14,
          rotationY: tilt,
          y: 90,
          z: -distance,
          autoAlpha: 0.45,
          scale: 0.97,
        },
        {
          rotationX: 0,
          rotationY: 0,
          y: 0,
          z: 0,
          autoAlpha: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
            end: "top 34%",
            scrub: 1.2,
          },
        },
      );

      if (glow) {
        gsap.fromTo(
          glow,
          { autoAlpha: 0.12, scale: 0.84, y: 40 },
          {
            autoAlpha: 0.4,
            scale: 1.08,
            y: -16,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 92%",
              end: "top 26%",
              scrub: 1.1,
            },
          },
        );
      }
    }, root);

    return () => {
      context.revert();
    };
  }, [distance, tilt]);

  return (
    <div ref={rootRef} className={`relative ${className ?? ""}`}>
      <div
        data-depth-glow
        className="pointer-events-none absolute inset-x-24 top-10 h-36 rounded-full bg-primary/20 blur-[76px]"
      />
      <div data-depth-content>{children}</div>
    </div>
  );
};

export default ScrollDepthSection;
