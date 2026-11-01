"use client";

import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, type CSSProperties } from "react";
import { SpaceImage } from "@/components/ui/SpaceImage";

/** Small deterministic generator so server and client render identical dust. */
function lcg(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const DUST = (() => {
  const r = lcg(20261029);
  return Array.from({ length: 16 }, () => {
    const size = (1 + r() * 1.4).toFixed(1);
    return {
      left: `${(4 + r() * 92).toFixed(1)}%`,
      top: `${(12 + r() * 76).toFixed(1)}%`,
      size: `${size}px`,
      dur: `${(18 + r() * 16).toFixed(1)}s`,
      del: `-${(r() * 30).toFixed(1)}s`,
      dx: `${Math.round(-20 + r() * 40)}px`,
    };
  });
})();

/**
 * Layered hero scenery, back to front:
 *   1. the Milky Way photograph, drifting slowly against the scroll
 *   2. a faint real nebula photograph, masked so it dissolves into the sky
 *   3. two soft colour hazes for depth
 *   4. legibility vignettes
 *   5. a few drifting motes (hidden on small screens)
 * Each layer moves at its own small rate; only transforms change.
 */
export function HeroBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = Boolean(reduce);
  }, [reduce]);

  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, (v) => (reduceRef.current ? 0 : Math.min(v, 700) * 0.12));
  const nebulaY = useTransform(scrollY, (v) => (reduceRef.current ? 0 : Math.min(v, 700) * 0.2));
  const hazeY = useTransform(scrollY, (v) => (reduceRef.current ? 0 : Math.min(v, 700) * 0.3));

  // Stop the motes while the hero is off screen.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      root.dataset.paused = entry.isIntersecting ? "false" : "true";
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <m.div className="absolute inset-x-0 -top-[14%] h-[114%] will-change-transform" style={{ y: photoY }}>
        <SpaceImage
          imageKey="milkyWay"
          alt=""
          priority
          maxWidth={1920}
          fallback="quiet"
          sizes="100vw"
          className="h-full w-full"
          imgClassName="object-[50%_35%]"
        />
      </m.div>

      <m.div
        className="nebula-mask absolute inset-x-0 -top-[10%] h-[110%] opacity-[0.26] will-change-transform"
        style={{ y: nebulaY }}
      >
        <SpaceImage
          imageKey="orion"
          alt=""
          maxWidth={960}
          fallback="quiet"
          sizes="100vw"
          className="h-full w-full bg-transparent"
        />
      </m.div>

      <m.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_18%_82%,rgba(46,78,140,0.2),transparent_70%),radial-gradient(ellipse_45%_40%_at_88%_16%,rgba(150,92,70,0.13),transparent_70%)]"
        style={{ y: hazeY }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,7,13,0.72)_0%,rgba(5,7,13,0.22)_30%,rgba(5,7,13,0.55)_68%,#05070d_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_72%,rgba(5,7,13,0.6),transparent_62%)]" />

      <div className="hidden md:block">
        {DUST.map((d, i) => (
          <span
            key={i}
            className="dust"
            style={
              {
                left: d.left,
                top: d.top,
                width: d.size,
                height: d.size,
                "--dur": d.dur,
                "--del": d.del,
                "--dx": d.dx,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
