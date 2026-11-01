"use client";

import { m, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { frameClasses } from "@/lib/cn";

interface ParallaxFrameProps {
  className?: string;
  children: ReactNode;
  /** Travel in percent of the frame height, each direction. Keep it small. */
  strength?: number;
}

/**
 * Moves its content a few percent against the scroll direction as the frame
 * crosses the viewport. Only transform changes, driven by a motion value, so
 * React does not re-render while scrolling.
 */
export function ParallaxFrame({ className, children, strength = 5 }: ParallaxFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Promote to its own layer only while on or near screen, so dozens of large
  // images do not all hold GPU memory at once.
  const near = useInView(ref, { margin: "200px 0px 200px 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={frameClasses(className)}>
      <m.div
        className={near ? "absolute inset-0 will-change-transform" : "absolute inset-0"}
        style={reduce ? undefined : { y, scale: 1 + (strength * 2) / 100 + 0.02 }}
      >
        {children}
      </m.div>
    </div>
  );
}
