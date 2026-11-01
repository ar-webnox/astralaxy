"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL = 6;

/**
 * A soft glow and a short trail of tiny stars that follow the mouse.
 *
 * - Rendered only for fine, hovering pointers (mouse, trackpad). Touch screens
 *   and visitors who prefer reduced motion never get it.
 * - The native cursor is untouched and the layer ignores pointer events.
 * - One pointermove listener stores the target; one requestAnimationFrame loop
 *   eases everything toward it and stops itself once the motion has settled.
 *   No React state changes on pointer movement.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    const glow = glowRef.current;
    if (!root || !glow) return;
    const dots = dotRefs.current.filter((d): d is HTMLSpanElement => d !== null);

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    const trail = dots.map(() => ({ x: -100, y: -100 }));
    let raf = 0;
    let seen = false;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      place(glow, pos.x, pos.y);

      let moving = Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.3;
      let prev = pos;
      trail.forEach((p, i) => {
        p.x += (prev.x - p.x) * 0.38;
        p.y += (prev.y - p.y) * 0.38;
        place(dots[i], p.x, p.y);
        if (Math.abs(prev.x - p.x) + Math.abs(prev.y - p.y) > 0.3) moving = true;
        prev = p;
      });
      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = e.clientX;
      target.y = e.clientY;
      if (!seen) {
        // Snap on first movement so nothing streaks across from the corner.
        seen = true;
        pos.x = target.x;
        pos.y = target.y;
        trail.forEach((p) => {
          p.x = target.x;
          p.y = target.y;
        });
        root.dataset.visible = "1";
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onOver = (e: PointerEvent) => {
      const el = e.target as Element | null;
      const interactive = Boolean(
        el?.closest?.("a, button, input, textarea, select, summary, [role='tab']"),
      );
      const next = interactive ? "1" : "0";
      if (root.dataset.active !== next) root.dataset.active = next;
    };

    const onLeave = () => {
      seen = false;
      root.dataset.visible = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={rootRef} aria-hidden="true" className="cursor-fx" data-visible="0" data-active="0">
      {Array.from({ length: TRAIL }, (_, i) => (
        <span
          key={i}
          ref={(el) => {
            dotRefs.current[i] = el;
          }}
          className="cursor-dot"
          style={{
            width: `${(4 - i * 0.5).toFixed(1)}px`,
            height: `${(4 - i * 0.5).toFixed(1)}px`,
            opacity: Number((0.55 - i * 0.085).toFixed(2)),
          }}
        />
      ))}
      <div ref={glowRef}>
        <div className="cursor-glow" />
      </div>
    </div>
  );
}
