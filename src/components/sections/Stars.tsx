"use client";

import { useState } from "react";
import {
  CONSTELLATION_FIGURES,
  CONSTELLATIONS,
  LIFE_PATHS,
  REMNANTS,
  SPECTRAL_CLASSES,
} from "@/data/stars";
import { ConstellationMap } from "@/components/ui/ConstellationMap";
import { Reveal, RevealLi } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";

function Lifecycle() {
  const [pathId, setPathId] = useState(LIFE_PATHS[0].id);
  const path = LIFE_PATHS.find((p) => p.id === pathId) ?? LIFE_PATHS[0];

  return (
    <div className="panel p-6 md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow">Stellar life cycles</p>
          <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            A star’s mass decides its fate.
          </h3>
        </div>
        <Tabs
          items={LIFE_PATHS.map((p) => ({ id: p.id, label: p.label }))}
          value={pathId}
          onChange={setPathId}
          label="Choose a type of star"
          idPrefix="life"
        />
      </div>

      <div
        key={path.id}
        role="tabpanel"
        id={panelId("life")}
        aria-labelledby={tabId("life", path.id)}
        tabIndex={0}
        className="fade-in mt-8"
      >
        <p className="text-mute">{path.blurb}</p>
        <ol className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {path.stages.map((s, i) => (
            <li key={s.title} className="bg-space p-5 transition-colors duration-500 hover:bg-navy motion-reduce:transition-none">
              <span className="text-xs tabular-nums text-ember">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-2 font-display text-xl">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mute">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Constellations() {
  const [id, setId] = useState(CONSTELLATIONS[0].id);
  const c = CONSTELLATIONS.find((x) => x.id === id) ?? CONSTELLATIONS[0];
  const figure = CONSTELLATION_FIGURES[c.id];

  return (
    <div className="mt-24 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14">
      <div>
        <p className="eyebrow">Constellations</p>
        <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
          Patterns we drew on the sky.
        </h3>
        <p className="mt-4 leading-relaxed text-mute">
          The International Astronomical Union recognises 88 constellations. The stars in one
          pattern are usually at very different distances and are rarely related to each other.
        </p>
        <Tabs
          items={CONSTELLATIONS.map((x) => ({ id: x.id, label: x.name }))}
          value={id}
          onChange={setId}
          label="Constellations"
          idPrefix="constellation"
          className="mt-6"
        />
      </div>
      <div
        key={c.id}
        role="tabpanel"
        id={panelId("constellation")}
        aria-labelledby={tabId("constellation", c.id)}
        tabIndex={0}
        className="fade-in panel grid overflow-hidden md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]"
      >
        <div className="relative aspect-square border-b border-line bg-[radial-gradient(circle_at_50%_45%,rgba(156,192,255,0.08),transparent_70%)] p-4 md:border-b-0 md:border-r">
          {figure && <ConstellationMap figure={figure} name={c.name} />}
          <p className="absolute inset-x-4 bottom-3 text-[0.65rem] text-dim">
            Simplified outline, approximate positions
          </p>
        </div>
        <div className="p-6 md:p-8">
          <h4 className="font-display text-3xl">{c.name}</h4>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ember">{c.best}</p>
          <p className="mt-4 leading-[1.75] text-mute">{c.text}</p>
          {figure?.note && <p className="mt-3 text-sm leading-relaxed text-ion/90">{figure.note}</p>}
          <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
            {c.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-mute">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-ember" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Stars() {
  return (
    <Section
      id="stars"
      number="04"
      eyebrow="Stars"
      title="How stars are born, live and die."
      lead="Stars are the engines of the universe. They forge the elements, light up galaxies and, when they die, leave behind some of the strangest objects known."
    >
      <Lifecycle />

      <div className="mt-24">
        <p className="eyebrow">What stars leave behind</p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          White dwarfs, neutron stars and supernova remnants.
        </h3>
        <ul className="mt-8 grid gap-5 lg:grid-cols-3">
          {REMNANTS.map((r, i) => (
            <RevealLi key={r.id} index={i} className="h-full">
              <article className="panel card flex h-full flex-col overflow-hidden">
                {r.image && (
                  <SpaceImage
                    imageKey={r.image}
                    sizes="(min-width:1024px) 400px, 100vw"
                    maxWidth={960}
                    parallax
                    className="aspect-[16/10]"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow eyebrow-plain">{r.tag}</p>
                  <h4 className="mt-2 font-display text-2xl">{r.name}</h4>
                  <p className="mt-3 text-sm leading-[1.7] text-mute">{r.text}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                    {r.facts.map((f) => (
                      <li key={f} className="flex gap-3 text-sm leading-relaxed text-mute">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-ember" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealLi>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-dim">
          When the remnant is massive enough, it collapses further into a black hole. See the next
          section.
        </p>
      </div>

      <Constellations />

      <div className="mt-24">
        <Reveal>
        <h3 className="font-display text-2xl">Stars by colour and temperature</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">
          Astronomers classify stars from hottest to coolest with the letters O, B, A, F, G, K and
          M. Colour is a direct sign of surface temperature.
        </p>
        </Reveal>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {SPECTRAL_CLASSES.map((s, i) => (
            <RevealLi key={s.letter} index={i % 4}>
              <div className="panel card h-full p-4">
                <span
                  aria-hidden="true"
                  className="block size-5 rounded-full"
                  style={{ backgroundColor: s.colour, boxShadow: `0 0 18px ${s.colour}55` }}
                />
                <p className="mt-3 font-display text-2xl">{s.letter}</p>
                <p className="mt-1 text-xs text-ink">{s.temp}</p>
                <p className="mt-1 text-xs text-dim">{s.note}</p>
              </div>
            </RevealLi>
          ))}
        </ul>
      </div>
    </Section>
  );
}
