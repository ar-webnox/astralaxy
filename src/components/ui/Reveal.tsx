"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -8% 0px" } as const;

/**
 * Fades content up once as it enters the viewport.
 * Reduced-motion users get no transform: MotionProvider sets
 * reducedMotion="user", which disables movement for them.
 */
export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

/**
 * List-item version for staggered card grids. Pass the item's index within its
 * row so cards in the same row cascade left to right.
 */
export function RevealLi({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  return (
    <m.li
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.75, delay: Math.min(index, 4) * 0.08, ease: EASE }}
    >
      {children}
    </m.li>
  );
}
