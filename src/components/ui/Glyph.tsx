import type { ReactNode } from "react";
import type { GlyphKind } from "@/data/universe";

const SPIRAL_ARM = "M32 32a4 4 0 0 1 8 0a8 8 0 0 1 -16 0a12 12 0 0 1 24 0a16 16 0 0 1 -32 0";

const SHAPES: Record<GlyphKind, ReactNode> = {
  spiral: (
    <>
      <path d={SPIRAL_ARM} />
      <path d={SPIRAL_ARM} transform="rotate(180 32 32)" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
    </>
  ),
  barred: (
    <>
      <path d={SPIRAL_ARM} transform="rotate(-20 32 32)" opacity=".8" />
      <path d={SPIRAL_ARM} transform="rotate(160 32 32)" opacity=".8" />
      <path d="M21 36l22-8" strokeWidth="3.2" />
    </>
  ),
  elliptical: (
    <>
      <ellipse cx="32" cy="32" rx="23" ry="15" />
      <ellipse cx="32" cy="32" rx="14" ry="9" opacity=".7" />
      <ellipse cx="32" cy="32" rx="6" ry="4" opacity=".5" />
    </>
  ),
  lenticular: (
    <>
      <ellipse cx="32" cy="32" rx="27" ry="8" />
      <ellipse cx="32" cy="32" rx="12" ry="6" opacity=".7" />
    </>
  ),
  irregular: (
    <path d="M13 35c2-9 9-14 16-12s9-6 16-2 7 12 3 17-6 11-14 9-8 4-14 0-9-6-7-12z" />
  ),
  active: (
    <>
      <circle cx="32" cy="32" r="3.5" fill="currentColor" stroke="none" />
      <path d="M32 6v19M32 39v19" />
      <ellipse cx="32" cy="32" rx="21" ry="5" opacity=".7" />
    </>
  ),
  star: (
    <>
      <path d="M32 6v52M6 32h52" />
      <path d="M18 18l28 28M46 18L18 46" opacity=".4" />
      <circle cx="32" cy="32" r="5" fill="currentColor" stroke="none" />
    </>
  ),
  nebula: (
    <>
      <circle cx="26" cy="29" r="13" />
      <circle cx="39" cy="27" r="11" opacity=".8" />
      <circle cx="33" cy="40" r="12" opacity=".6" />
    </>
  ),
  planetary: (
    <>
      <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
      <circle cx="32" cy="32" r="13" />
      <circle cx="32" cy="32" r="22" strokeDasharray="2 4" opacity=".7" />
    </>
  ),
  dark: <path d="M10 54V33c0-6 4-8 6-14s6-4 8 2 4 6 8 0 8-4 8 6 3 9 6 9 4 4 4 10v9z" fill="currentColor" fillOpacity=".14" />,
  remnant: (
    <>
      <circle cx="32" cy="32" r="20" strokeDasharray="1 3.5" />
      <circle cx="32" cy="32" r="11" opacity=".7" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
    </>
  ),
  blackhole: (
    <>
      <circle cx="32" cy="32" r="9" fill="currentColor" stroke="none" />
      <ellipse cx="32" cy="32" rx="26" ry="7" />
      <circle cx="32" cy="32" r="14" opacity=".5" />
    </>
  ),
  cluster: (
    <>
      {[
        [32, 32],
        [24, 26],
        [40, 25],
        [27, 40],
        [38, 39],
        [18, 34],
        [46, 33],
        [32, 20],
        [31, 46],
        [22, 18],
        [44, 45],
        [48, 22],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" fill="currentColor" stroke="none" />
      ))}
    </>
  ),
  planet: (
    <>
      <circle cx="32" cy="32" r="14" />
      <ellipse cx="32" cy="32" rx="26" ry="7" transform="rotate(-20 32 32)" opacity=".7" />
    </>
  ),
  image: (
    <>
      <rect x="9" y="12" width="46" height="40" rx="3" />
      <path d="M9 44l13-13 10 10 8-7 15 14" opacity=".7" />
      <circle cx="42" cy="23" r="3" />
    </>
  ),
};

export function Glyph({ kind, className }: { kind: GlyphKind; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {SHAPES[kind]}
    </svg>
  );
}
