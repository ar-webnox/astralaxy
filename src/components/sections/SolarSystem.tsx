"use client";

import { useState } from "react";
import { BODIES } from "@/data/solar-system";
import { Section, StatGrid } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { images } from "@/lib/images";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";
import { cn } from "@/lib/cn";

const MIN_LOG = Math.log10(0.3);
const MAX_LOG = Math.log10(35);

/** Position along the orbit strip (0–100%) on a log scale of distance. */
function orbitPosition(au: number): number {
  if (au <= 0) return 0;
  return ((Math.log10(au) - MIN_LOG) / (MAX_LOG - MIN_LOG)) * 100;
}

function OrbitStrip({ activeId, onSelect }: { activeId: string; onSelect: (id: string) => void }) {
  return (
    <div className="mt-10" aria-hidden="true">
      <div className="relative h-10">
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
        {BODIES.map((b) => {
          const active = b.id === activeId;
          const left = b.id === "sun" ? 0 : Math.min(orbitPosition(b.au), 100);
          return (
            <button
              key={b.id}
              type="button"
              tabIndex={-1}
              onClick={() => onSelect(b.id)}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 p-2"
              style={{ left: `${left}%` }}
            >
              <span
                className={cn(
                  "block rounded-full transition-all motion-reduce:transition-none",
                  active ? "size-4 ring-2 ring-ink/70 ring-offset-2 ring-offset-void" : "size-2.5 opacity-80",
                )}
                style={{ backgroundColor: b.swatch }}
              />
            </button>
          );
        })}
      </div>
      <p className="mt-1 text-[0.7rem] text-dim">
        Distance from the Sun on a logarithmic scale, from 0.3 AU to 35 AU. One AU is the
        Earth–Sun distance.
      </p>
    </div>
  );
}

export function SolarSystem() {
  const [id, setId] = useState(BODIES[0].id);
  const body = BODIES.find((b) => b.id === id) ?? BODIES[0];
  const meta = images[body.image];

  return (
    <Section
      id="solar-system"
      number="02"
      eyebrow="Solar System"
      title="One star, eight planets and a family of moons."
      lead="Select a world to see how it compares. Four planets are rocky and four are giants and every giant is circled by rings and a crowd of moons."
    >
      <Tabs
        items={BODIES.map((b) => ({ id: b.id, label: b.name.replace("The ", ""), swatch: b.swatch }))}
        value={id}
        onChange={setId}
        label="Sun and planets"
        idPrefix="body"
      />
      <OrbitStrip activeId={id} onSelect={setId} />

      <div
        key={body.id}
        role="tabpanel"
        id={panelId("body")}
        aria-labelledby={tabId("body", body.id)}
        tabIndex={0}
        className="fade-in mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16"
      >
        <figure className="relative isolate self-start">
          {/* A faint halo in the body's own colour. Static gradient, so it costs nothing. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-5 -inset-y-10 -z-10 lg:-inset-x-10"
            style={{
              background: `radial-gradient(circle at 50% 48%, ${body.swatch}33 0%, ${body.swatch}0f 38%, transparent 68%)`,
            }}
          />
          <SpaceImage
            imageKey={body.image}
            sizes="(min-width:1024px) 560px, 100vw"
            maxWidth={1280}
            parallax
            className="aspect-square rounded-2xl border border-line shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]"
          />
          <figcaption className="mt-3 flex flex-wrap justify-between gap-x-4 text-xs text-dim">
            <span>{meta.caption}</span>
            {meta.credit && <span>{meta.credit}</span>}
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow">{body.type}</p>
          <h3 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{body.name}</h3>
          <p className="mt-2 text-lg text-ion">{body.tagline}</p>
          <p className="mt-5 leading-relaxed text-mute">{body.summary}</p>

          <StatGrid stats={body.stats} className="mt-7" />

          {body.moons.length > 0 && (
            <div className="mt-8">
              <h4 className="text-sm font-medium">Notable moons</h4>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {body.moons.map((m) => (
                  <li
                    key={m.name}
                    className="rounded-xl border border-line bg-white/[0.02] p-4 transition-colors hover:border-white/20 motion-reduce:transition-none"
                  >
                    <p className="flex items-center gap-2.5 text-sm text-ink">
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full"
                        style={{ backgroundColor: body.swatch, opacity: 0.85 }}
                      />
                      {m.name}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-mute">{m.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8">
            <h4 className="text-sm font-medium">Worth knowing</h4>
            <ul className="mt-3 space-y-3">
              {body.facts.map((f) => (
                <li key={f} className="flex gap-3 text-sm leading-relaxed text-mute">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-ember" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="panel mt-16 p-6 md:p-8">
        <h3 className="font-display text-2xl">Beyond Neptune</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-mute">
          The Solar System does not end at Neptune. The Kuiper Belt, a wide band of icy bodies,
          holds dwarf planets such as Pluto, which NASA’s New Horizons spacecraft flew past in July
          2015. Farther still, the Oort Cloud is a theorised shell of icy objects thought to be the
          source of long-period comets.
        </p>
      </div>
    </Section>
  );
}
