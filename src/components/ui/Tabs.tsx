"use client";

import { useRef, type KeyboardEvent } from "react";
import { cn } from "@/lib/cn";

export interface TabItem {
  id: string;
  label: string;
  /** Optional small colour dot shown before the label. */
  swatch?: string;
  count?: number;
}

interface TabsProps {
  items: readonly TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** Accessible name for the tab list. */
  label: string;
  idPrefix: string;
  className?: string;
}

/** Ids may contain spaces (e.g. "Black hole"), which are invalid in aria id references. */
export const tabId = (prefix: string, id: string) =>
  `${prefix}-tab-${id.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
export const panelId = (prefix: string) => `${prefix}-panel`;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Accessible tab list with roving tabindex and arrow-key navigation.
 * Pair it with a panel carrying role="tabpanel", id={panelId(idPrefix)} and
 * aria-labelledby={tabId(idPrefix, value)}.
 */
export function Tabs({ items, value, onChange, label, idPrefix, className }: TabsProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function select(index: number, focus: boolean) {
    const item = items[index];
    if (!item) return;
    onChange(item.id);
    const el = refs.current[index];
    if (el) {
      if (focus) el.focus();
      el.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    }
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const current = items.findIndex((i) => i.id === value);
    let next = -1;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (current + 1) % items.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (current - 1 + items.length) % items.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = items.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    select(next, true);
  }

  return (
    <div
      role="tablist"
      aria-label={label}
      onKeyDown={onKeyDown}
      className={cn(
        "scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 py-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:py-0",
        className,
      )}
    >
      {items.map((item, i) => {
        const selected = item.id === value;
        return (
          <button
            key={item.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={tabId(idPrefix, item.id)}
            aria-selected={selected}
            aria-controls={panelId(idPrefix)}
            tabIndex={selected ? 0 : -1}
            onClick={() => select(i, false)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors pointer-coarse:min-h-11 motion-reduce:transition-none",
              selected
                ? "border-ink bg-ink font-medium text-void"
                : "border-line text-mute hover:border-white/25 hover:text-ink",
            )}
          >
            {item.swatch && (
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full"
                style={{ backgroundColor: item.swatch }}
              />
            )}
            {item.label}
            {typeof item.count === "number" && (
              <span className={cn("text-xs", selected ? "text-void/60" : "text-dim")}>
                {item.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
