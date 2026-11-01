import type { ConstellationFigure, FigureStar } from "@/data/stars";

const RADIUS: Record<FigureStar["size"], number> = { 1: 0.9, 2: 1.35, 3: 1.9 };

/**
 * Simplified constellation outline. Lines draw in once when the figure mounts
 * (CSS, skipped for reduced motion) and the stars then breathe very slightly.
 * Remount it with a `key` to replay the drawing.
 */
export function ConstellationMap({
  figure,
  name,
}: {
  figure: ConstellationFigure;
  name: string;
}) {
  const byId = new Map(figure.stars.map((s) => [s.id, s]));
  const pattern = figure.lines.filter((l) => !l.guide);
  const guides = figure.lines.filter((l) => l.guide);

  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label={`Simplified outline of the constellation ${name}. Star positions are approximate.`}
      className="h-full w-full"
    >
      {guides.map((l) => {
        const a = byId.get(l.a);
        const b = byId.get(l.b);
        if (!a || !b) return null;
        return (
          <line
            key={`${l.a}-${l.b}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="#9cc0ff"
            strokeOpacity="0.5"
            strokeWidth="0.35"
            strokeDasharray="1.2 1.4"
          />
        );
      })}

      {pattern.map((l, i) => {
        const a = byId.get(l.a);
        const b = byId.get(l.b);
        if (!a || !b) return null;
        return (
          <path
            key={`${l.a}-${l.b}`}
            d={`M${a.x} ${a.y}L${b.x} ${b.y}`}
            pathLength={1}
            className="fig-line"
            style={{ ["--d" as string]: `${i * 140}ms` }}
            fill="none"
            stroke="#cbd8f2"
            strokeOpacity="0.55"
            strokeWidth="0.4"
            strokeLinecap="round"
          />
        );
      })}

      {figure.stars.map((s, i) => {
        const r = RADIUS[s.size];
        const labelLeft = s.x > 70;
        return (
          <g key={s.id}>
            <circle cx={s.x} cy={s.y} r={r * 3.2} fill="#9cc0ff" fillOpacity="0.1" />
            <circle
              cx={s.x}
              cy={s.y}
              r={r}
              fill="#f4f7ff"
              className="fig-star"
              style={{ ["--d" as string]: `${(i * 430) % 3000}ms` }}
            />
            {s.name && (
              <text
                x={labelLeft ? s.x - r - 1.6 : s.x + r + 1.6}
                y={s.y + 1}
                textAnchor={labelLeft ? "end" : "start"}
                fontSize="3.1"
                fill="#9ba9c0"
              >
                {s.name}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
