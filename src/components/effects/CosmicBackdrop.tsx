"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Fixed deep-space backdrop.
 *
 * - Five tiled star layers (far, mid, near and two twinkle layers) sit at
 *   different depths and shift a few pixels against the scroll direction.
 * - The twinkle layers fade in and out of phase with each other (opacity only).
 * - One reusable element draws an occasional shooting star every 10–25 seconds.
 *
 * Everything animates transform or opacity. Scroll parallax is driven by motion
 * values, so React never re-renders while the page scrolls.
 */
export function CosmicBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = Boolean(reduce);
  }, [reduce]);

  const { scrollY } = useScroll();
  const far = useTransform(scrollY, (v) => (reduceRef.current ? 0 : -Math.min(v * 0.012, 200)));
  const mid = useTransform(scrollY, (v) => (reduceRef.current ? 0 : -Math.min(v * 0.03, 220)));
  const near = useTransform(scrollY, (v) => (reduceRef.current ? 0 : -Math.min(v * 0.06, 240)));

  // Pause decorative CSS animation while the tab is hidden.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sync = () => {
      root.dataset.paused = document.hidden ? "true" : "false";
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  // Occasional shooting star.
  useEffect(() => {
    const el = starRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = 0;
    let animation: Animation | undefined;

    const schedule = (first = false) => {
      const wait = first ? 5000 + Math.random() * 4000 : 10000 + Math.random() * 15000;
      timer = window.setTimeout(fire, wait);
    };

    const fire = () => {
      if (reduced.matches || document.hidden) {
        schedule();
        return;
      }
      const w = window.innerWidth;
      const h = window.innerHeight;
      const rightward = Math.random() < 0.5;
      const x0 = rightward ? w * (0.05 + Math.random() * 0.4) : w * (0.55 + Math.random() * 0.4);
      const y0 = h * (0.06 + Math.random() * 0.34);
      const slope = ((16 + Math.random() * 18) * Math.PI) / 180;
      const length = Math.min(w, h) * (0.35 + Math.random() * 0.3);
      const dx = Math.cos(slope) * length * (rightward ? 1 : -1);
      const dy = Math.sin(slope) * length;
      const theta = Math.atan2(dy, dx);

      animation = el.animate(
        [
          { transform: `translate3d(${x0}px, ${y0}px, 0) rotate(${theta}rad)`, opacity: 0 },
          { opacity: 1, offset: 0.18 },
          { opacity: 0.8, offset: 0.6 },
          { transform: `translate3d(${x0 + dx}px, ${y0 + dy}px, 0) rotate(${theta}rad)`, opacity: 0 },
        ],
        { duration: 900 + Math.random() * 500, easing: "cubic-bezier(0.3, 0.1, 0.6, 1)" },
      );
      animation.onfinish = () => schedule();
    };

    schedule(true);
    return () => {
      window.clearTimeout(timer);
      animation?.cancel();
    };
  }, []);

  // will-change: these layers move on scroll, so give each its own compositor layer
  // instead of letting the browser repaint the star tiles every frame.
  const layer = "absolute inset-x-0 -top-[260px] -bottom-[260px] will-change-transform";

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* A cool wash at the top of the sky. Static, so it costs nothing. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(18,30,62,0.45),transparent_70%)]" />
      <m.div className={`stars-far ${layer}`} style={{ y: far }} />
      <m.div className={`stars-mid ${layer}`} style={{ y: mid }} />
      <m.div className={`stars-twinkle-a twinkle-a ${layer}`} style={{ y: mid }} />
      <m.div className={`stars-twinkle-b twinkle-b ${layer}`} style={{ y: near }} />
      <m.div className={`stars-near ${layer}`} style={{ y: near }} />
      <div ref={starRef} className="shooting-star" />
    </div>
  );
}
