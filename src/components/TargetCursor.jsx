import { useCallback, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import "./TargetCursor.css";

const TargetCursor = ({
  targetSelector = ".cursor-target",
  spinDuration = 2,
  hideDefaultCursor = false,
  hoverDuration = 0.2,
  parallaxOn = true,
}) => {
  const cursorRef = useRef(null);
  const auraRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const pulseTweenRef = useRef(null);
  const enabledRef = useRef(false);
  const hoveringTargetRef = useRef(false);

  // Keep animation state in refs so pointer movement never causes React re-renders.
  const pointerRef = useRef({ x: 0, y: 0 });
  const positionRef = useRef({ x: 0, y: 0 });
  const auraPositionRef = useRef({ x: 0, y: 0 });

  const config = useMemo(
    () => ({
      idleSize: 18,
      hoverSize: 24,
      followLerp: 0.24,
      auraLerp: 0.13,
    }),
    [],
  );

  const canUseCustomCursor = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  const toggleDefaultCursor = useCallback((shouldHide) => {
    const className = "target-cursor-hide-default";
    document.documentElement.classList.toggle(className, shouldHide);
    document.body.classList.toggle(className, shouldHide);
  }, []);

  const setHoverState = useCallback(
    (isHoveringTarget) => {
      if (hoveringTargetRef.current === isHoveringTarget) return;
      hoveringTargetRef.current = isHoveringTarget;

      gsap.to(ringRef.current, {
        width: isHoveringTarget ? config.hoverSize : config.idleSize,
        height: isHoveringTarget ? config.hoverSize : config.idleSize,
        borderRadius: 999,
        duration: hoverDuration,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(dotRef.current, {
        scale: isHoveringTarget ? 0.86 : 1,
        duration: hoverDuration,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(auraRef.current, {
        scale: isHoveringTarget ? 1.16 : 1,
        duration: hoverDuration,
        ease: "power2.out",
        overwrite: "auto",
      });

      if (isHoveringTarget) {
        pulseTweenRef.current?.pause();
      } else {
        pulseTweenRef.current?.play();
      }
    },
    [config.hoverSize, config.idleSize, hoverDuration],
  );

  const handlePointerMove = useCallback(
    (event) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;

      if (!(event.target instanceof Element)) {
        setHoverState(false);
        return;
      }

      setHoverState(Boolean(event.target.closest(targetSelector)));
    },
    [setHoverState, targetSelector],
  );

  useEffect(() => {
    const cursor = cursorRef.current;
    const aura = auraRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!cursor || !aura || !ring || !dot || typeof window === "undefined") return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    gsap.set(aura, { xPercent: -50, yPercent: -50, autoAlpha: 0 });
    gsap.set(ring, { width: config.idleSize, height: config.idleSize, borderRadius: 999 });
    gsap.set(dot, { scale: 1 });

    pulseTweenRef.current = gsap.to(aura, {
      scale: 1.14,
      opacity: 0.45,
      duration: Math.max(0.8, spinDuration),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const media = window.matchMedia("(hover: hover) and (pointer: fine)");

    const refreshEnabledState = () => {
      const enabled = canUseCustomCursor();
      enabledRef.current = enabled;

      if (!enabled) {
        setHoverState(false);
      }

      gsap.set([cursor, aura], { autoAlpha: enabled ? 1 : 0 });
      toggleDefaultCursor(enabled && hideDefaultCursor);
    };

    refreshEnabledState();

    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");
    const setAuraX = gsap.quickSetter(aura, "x", "px");
    const setAuraY = gsap.quickSetter(aura, "y", "px");

    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    pointerRef.current.x = initialX;
    pointerRef.current.y = initialY;
    positionRef.current.x = initialX;
    positionRef.current.y = initialY;
    auraPositionRef.current.x = initialX;
    auraPositionRef.current.y = initialY;

    // GSAP ticker keeps motion smooth and lightweight.
    const ticker = () => {
      if (!enabledRef.current) return;

      const targetX = pointerRef.current.x;
      const targetY = pointerRef.current.y;

      positionRef.current.x += (targetX - positionRef.current.x) * config.followLerp;
      positionRef.current.y += (targetY - positionRef.current.y) * config.followLerp;

      const auraLead = hoveringTargetRef.current && parallaxOn ? 0.12 : 0;
      const auraTargetX = targetX + (targetX - positionRef.current.x) * auraLead;
      const auraTargetY = targetY + (targetY - positionRef.current.y) * auraLead;

      auraPositionRef.current.x += (auraTargetX - auraPositionRef.current.x) * config.auraLerp;
      auraPositionRef.current.y += (auraTargetY - auraPositionRef.current.y) * config.auraLerp;

      setX(positionRef.current.x);
      setY(positionRef.current.y);
      setAuraX(auraPositionRef.current.x);
      setAuraY(auraPositionRef.current.y);
    };

    const handlePressStart = () => {
      if (!enabledRef.current) return;

      gsap.to([cursor, aura], {
        scale: 0.88,
        duration: 0.12,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(dot, {
        scale: 0.75,
        duration: 0.12,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handlePressEnd = () => {
      if (!enabledRef.current) return;

      gsap.to([cursor, aura], {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(dot, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleWindowBlur = () => {
      gsap.to([cursor, aura], { autoAlpha: 0, duration: 0.15, overwrite: "auto" });
      setHoverState(false);
    };

    const handleWindowFocus = () => {
      if (enabledRef.current) {
        gsap.to([cursor, aura], { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
      }
    };

    const handleMouseLeaveDocument = () => {
      gsap.to([cursor, aura], { autoAlpha: 0, duration: 0.15, overwrite: "auto" });
      setHoverState(false);
    };

    const handleMouseEnterDocument = () => {
      if (enabledRef.current) {
        gsap.to([cursor, aura], { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
      }
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerdown", handlePressStart, { passive: true });
    document.addEventListener("pointerup", handlePressEnd, { passive: true });
    document.addEventListener("pointercancel", handlePressEnd, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveDocument, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnterDocument, { passive: true });

    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    media.addEventListener("change", refreshEnabledState);

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
      media.removeEventListener("change", refreshEnabledState);

      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerdown", handlePressStart);
      document.removeEventListener("pointerup", handlePressEnd);
      document.removeEventListener("pointercancel", handlePressEnd);
      document.removeEventListener("mouseleave", handleMouseLeaveDocument);
      document.removeEventListener("mouseenter", handleMouseEnterDocument);

      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);

      toggleDefaultCursor(false);
      hoveringTargetRef.current = false;

      pulseTweenRef.current?.kill();
      pulseTweenRef.current = null;

      gsap.killTweensOf(cursor);
      gsap.killTweensOf(aura);
      gsap.killTweensOf(ring);
      gsap.killTweensOf(dot);
    };
  }, [
    canUseCustomCursor,
    config.auraLerp,
    config.followLerp,
    config.idleSize,
    parallaxOn,
    setHoverState,
    handlePointerMove,
    hideDefaultCursor,
    spinDuration,
    toggleDefaultCursor,
  ]);

  return (
    <>
      <div ref={auraRef} className="target-cursor-aura" aria-hidden="true" />
      <div ref={cursorRef} className="target-cursor" aria-hidden="true">
        <div ref={ringRef} className="target-cursor__ring" />
        <span ref={dotRef} className="target-cursor__dot" />
      </div>
    </>
  );
};

export default TargetCursor;
