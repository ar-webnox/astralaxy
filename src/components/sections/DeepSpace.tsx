"use client";

import { useState } from "react";
import {
  COMPOSITION,
  DEEP_STATS,
  DETECTION_METHODS,
  DISTANCE_LADDER,
  LIFE_SEARCH,
  WORLDS,
} from "@/data/deep-space";
import { Reveal, RevealLi } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { images } from "@/lib/images";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";

const LOG_MIN = -8;
const LOG_MAX = 11;

/** Bar width (%) for a distance in light-years on a log scale. */
function ladderWidth(ly: number): number {
  const pct = ((Math.log10(ly) - LOG_MIN) / (LOG_MAX - LOG_MIN)) * 100;
  return Math.max(2, Math.min(100, pct));
}

function Methods() {
  const [id, setId] = useState(DETECTION_METHODS[0].id);
  const m = DETECTION_METHODS.find((x) => x.id === id) ?? DETECTION_METHODS[0];

  return (
    <div className="panel p-6 md:p-10">
      <p className="eyebrow">Finding other worlds</p>
      <h3 className="mt-3 max-w-xl font-display text-3xl leading-tight md:text-4xl">
        More than 6,000 planets confirmed and counting.
      </h3>
      <p className="mt-4 max-w-2xl leading-relaxed text-mute">
        Exoplanets are too small and faint to see directly in most cases, so astronomers detect
        them by the effects they have on their stars.
      </p>
      <Tabs
        items={DETECTION_METHODS.map((x) => ({ id: x.id, label: x.label }))}
        value={id}
        onChange={setId}
        label="Detection methods"
        idPrefix="method"
        className="mt-7"
      />
      <div
        key={m.id}
        role="tabpanel"
        id={panelId("method")}
        aria-labelledby={tabId("method", m.id)}
        tabIndex={0}
        className="fade-in mt-7 grid gap-4 border-t border-line pt-7 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-10"
      >
        <p className="leading-relaxed text-mute">{m.text}</p>
        <p className="text-sm">
          <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-dim">Examples</span>
          <span className="mt-1 block">{m.example}</span>
        </p>
      </div>
    </div>
  );
}

export function DeepSpace() {
  const deepField = images.deepField;

  return (
    <Section
      id="deep-space"
      number="08"
      eyebrow="Exoplanets & deep space"
      title="Distant worlds and the largest scales we can see."
      lead="Planets orbit most of the stars we can see and the observable universe stretches to a horizon set by the age of the cosmos."
    >
      <Methods />

      <div className="mt-24">
        <Reveal>
          <h3 className="font-display text-3xl leading-tight md:text-4xl">Worlds to know</h3>
        </Reveal>
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WORLDS.map((w, i) => (
            <RevealLi
              key={w.id}
              index={i % 3}
              className={w.image ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <article className="panel card flex h-full flex-col overflow-hidden">
              {w.image && (
                <SpaceImage
                  imageKey={w.image}
                  sizes="(min-width:1024px) 800px, 100vw"
                  maxWidth={1280}
                  parallax
                  className="aspect-[16/7]"
                />
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-display text-2xl">{w.name}</h4>
                  <span className="shrink-0 text-xs text-dim">{w.distance}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ember">{w.kind}</p>
                <p className="mt-3 text-sm leading-relaxed text-mute">{w.text}</p>
                {w.caveat && <p className="mt-3 text-sm leading-relaxed text-ion">{w.caveat}</p>}
                {w.image && (
                  <p className="mt-4 text-xs text-dim">
                    Artist’s illustration. {images[w.image].credit ?? ""}
                  </p>
                )}
              </div>
              </article>
            </RevealLi>
          ))}
        </ul>
      </div>

      {/* Observable universe */}
      <div className="mt-24 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
        <figure>
          <SpaceImage
            imageKey="deepField"
            sizes="(min-width:1024px) 640px, 100vw"
            maxWidth={1280}
            parallax
            className="aspect-[4/3] rounded-2xl border border-line shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]"
          />
          <figcaption className="mt-3 text-xs text-dim">
            {deepField.caption}
            {deepField.credit ? ` · ${deepField.credit}` : ""}. Nearly every point of light is a
            galaxy and the arcs are distant galaxies stretched by the gravity of a cluster in front.
          </figcaption>
        </figure>
        <div>
          <p className="eyebrow">The observable universe</p>
          <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            A horizon, not an edge.
          </h3>
          <p className="mt-4 leading-relaxed text-mute">
            We can only see light that has had time to reach us in about 13.8 billion years. Because
            space has expanded in the meantime, the most distant sources we see are now about 46.5
            billion light-years away. The universe beyond that horizon is probably much larger.
          </p>
          <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {DEEP_STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-dim">{s.label}</dt>
                <dd className="font-display text-2xl md:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
          <h4 className="mt-8 text-sm font-medium">What the universe is made of</h4>
          <ul className="mt-3 space-y-3">
            {COMPOSITION.map((c) => (
              <li key={c.label}>
                <div className="flex items-baseline justify-between text-sm">
                  <span>{c.label}</span>
                  <span className="tabular-nums text-mute">≈ {c.pct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                  <div className="h-full rounded-full bg-ion/70" style={{ width: `${c.pct}%` }} />
                </div>
                <p className="mt-1 text-xs text-dim">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Distance ladder */}
      <div className="mt-24">
        <p className="eyebrow">Cosmic distances</p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          From the Moon to the horizon of the universe.
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
          Each bar is drawn on a logarithmic scale, so every step to the right is a far bigger
          jump than the last.
        </p>
        <ul className="mt-8 space-y-4">
          {DISTANCE_LADDER.map((r) => (
            <li key={r.label} className="grid items-center gap-2 md:grid-cols-[16rem_1fr_13rem] md:gap-6">
              <span className="text-sm">{r.label}</span>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                <div
                  className="h-full rounded-full bg-ember/80"
                  style={{ width: `${ladderWidth(r.ly)}%` }}
                />
              </div>
              <span className="text-sm tabular-nums text-mute md:text-right">{r.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Search for life */}
      <div className="mt-24">
        <p className="eyebrow">The search for life</p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          Are we alone? Nobody knows yet.
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">
          There is no confirmed evidence of life beyond Earth. Here is how scientists are looking.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {LIFE_SEARCH.map((l, i) => (
            <RevealLi key={l.title} index={i} className="h-full">
              <div className="panel card h-full p-6">
                <h4 className="font-display text-xl">{l.title}</h4>
                <p className="mt-2 text-sm leading-[1.7] text-mute">{l.text}</p>
              </div>
            </RevealLi>
          ))}
        </ul>
      </div>
    </Section>
  );
}
