"use client";

import { useState } from "react";
import { BEYOND_GALAXIES, FEATURED_GALAXIES, GALAXY_TYPES } from "@/data/galaxies";
import { Glyph } from "@/components/ui/Glyph";
import { Reveal, RevealLi } from "@/components/ui/Reveal";
import { Section, StatGrid } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { images } from "@/lib/images";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";

export function Galaxies() {
  const [typeId, setTypeId] = useState(GALAXY_TYPES[0].id);
  const type = GALAXY_TYPES.find((t) => t.id === typeId) ?? GALAXY_TYPES[0];

  return (
    <Section
      id="galaxies"
      number="03"
      eyebrow="Galaxies"
      title="Islands of stars, held together by gravity."
      lead="A galaxy is a vast system of stars, gas, dust and dark matter. Ours is one of hundreds of billions and they come in a handful of recognisable shapes."
    >
      <ul className="grid gap-6 lg:grid-cols-2">
        {FEATURED_GALAXIES.map((g, i) => (
          <RevealLi key={g.id} index={i} className="h-full">
            <article className="panel card flex h-full flex-col overflow-hidden">
              <figure className="relative">
                <SpaceImage
                  imageKey={g.image}
                  sizes="(min-width:1024px) 600px, 100vw"
                  maxWidth={1280}
                  parallax
                  className="aspect-[16/10]"
                />
                <span className="glass pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-ink/90">
                  {g.type}
                </span>
                <figcaption className="sr-only">{images[g.image].caption}</figcaption>
              </figure>
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <h3 className="font-display text-3xl md:text-4xl">{g.name}</h3>
                <p className="mt-4 leading-[1.75] text-mute">{g.summary}</p>
                <StatGrid stats={g.stats} className="mt-6" />
              </div>
            </article>
          </RevealLi>
        ))}
      </ul>

      <div className="mt-24">
        <Reveal>
          <p className="eyebrow">Shapes of galaxies</p>
          <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-[-0.01em] md:text-4xl">
            Astronomers sort galaxies by how they look.
          </h3>
        </Reveal>
        <Tabs
          items={GALAXY_TYPES.map((t) => ({ id: t.id, label: t.label }))}
          value={typeId}
          onChange={setTypeId}
          label="Galaxy types"
          idPrefix="galaxy-type"
          className="mt-8"
        />

        <div
          key={type.id}
          role="tabpanel"
          id={panelId("galaxy-type")}
          aria-labelledby={tabId("galaxy-type", type.id)}
          tabIndex={0}
          className="fade-in panel mt-8 grid overflow-hidden lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        >
          {type.image ? (
            <SpaceImage
              imageKey={type.image}
              sizes="(min-width:1024px) 560px, 100vw"
              maxWidth={1280}
              parallax
              className="aspect-[4/3] lg:aspect-auto lg:min-h-[22rem]"
            />
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center bg-[radial-gradient(circle_at_50%_50%,rgba(156,192,255,0.1),transparent_62%)] text-ion/70 lg:aspect-auto lg:min-h-[22rem]">
              <Glyph kind={type.glyph} className="size-32 md:size-40" />
            </div>
          )}
          <div className="p-6 md:p-10">
            <h4 className="font-display text-3xl">{type.label}</h4>
            <p className="mt-4 leading-[1.75] text-mute">{type.summary}</p>
            <ul className="mt-6 space-y-2.5">
              {type.traits.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-mute">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-ember" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-5 text-sm">
              <span className="text-dim">Example: </span>
              {type.example}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Reveal>
          <h3 className="font-display text-2xl">Beyond a single galaxy</h3>
        </Reveal>
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {BEYOND_GALAXIES.map((b, i) => (
            <RevealLi key={b.title} index={i} className="h-full">
              <div className="panel card h-full p-6">
                <h4 className="font-medium">{b.title}</h4>
                <p className="mt-2 text-sm leading-[1.7] text-mute">{b.text}</p>
              </div>
            </RevealLi>
          ))}
        </ul>
      </div>
    </Section>
  );
}
