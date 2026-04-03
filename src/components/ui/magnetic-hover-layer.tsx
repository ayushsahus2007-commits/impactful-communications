import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface MagneticHoverLayerProps {
  selector?: string;
  strength?: number;
}

const MagneticHoverLayer = ({
  selector = ".magnetic-target",
  strength = 0.25,
}: MagneticHoverLayerProps) => {
  const activeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canAnimate = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canAnimate || reduceMotion) {
      return;
    }

    const resetTarget = (target: HTMLElement | null) => {
      if (!target) return;

      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.45,
        ease: "elastic.out(1, 0.5)",
        overwrite: "auto",
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      const eventTarget = event.target instanceof Element ? event.target : null;
      const magneticTarget = eventTarget?.closest(selector) as HTMLElement | null;

      if (!magneticTarget) {
        if (activeRef.current) {
          resetTarget(activeRef.current);
          activeRef.current = null;
        }
        return;
      }

      if (activeRef.current && activeRef.current !== magneticTarget) {
        resetTarget(activeRef.current);
      }

      activeRef.current = magneticTarget;

      const rect = magneticTarget.getBoundingClientRect();
      const offsetX = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const offsetY = (event.clientY - (rect.top + rect.height / 2)) * strength;

      gsap.to(magneticTarget, {
        x: offsetX,
        y: offsetY,
        duration: 0.3,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleLeaveWindow = () => {
      resetTarget(activeRef.current);
      activeRef.current = null;
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handleLeaveWindow);
    document.addEventListener("mouseleave", handleLeaveWindow, { passive: true });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handleLeaveWindow);
      document.removeEventListener("mouseleave", handleLeaveWindow);
      resetTarget(activeRef.current);
      activeRef.current = null;
    };
  }, [selector, strength]);

  return null;
};

export default MagneticHoverLayer;
