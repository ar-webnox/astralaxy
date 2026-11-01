import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { SectionRule } from "./SectionRule";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

interface SectionProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
  className?: string;
}

/** Standard section wrapper: anchor target, heading group and spacing. */
export function Section({ id, number, eyebrow, title, lead, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("relative scroll-mt-14 py-24 md:py-32", className)}
    >
      <SectionRule />
      <Container>
        <Reveal className="mb-14 max-w-3xl md:mb-20">
          <p className="eyebrow">
            <span className="tabular-nums">{number}</span>
            <span aria-hidden="true" className="mx-2.5 text-ember/50">
              /
            </span>
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-5 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.06] tracking-[-0.015em] text-balance"
          >
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-[1.75] text-mute md:text-lg">{lead}</p>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}

/** Label + value list used for planet, galaxy and moon statistics. */
export function StatGrid({
  stats,
  className,
}: {
  stats: readonly { label: string; value: string }[];
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2",
        className,
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="bg-space px-4 py-3.5">
          <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-dim">{s.label}</dt>
          <dd className="mt-1 text-sm text-ink">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
