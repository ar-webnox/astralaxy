"use client";

import { useState } from "react";
import {
  HOLE_CLASSES,
  HOLE_EVIDENCE,
  HOLE_MYTH,
  HOLE_PARTS,
  type HolePartId,
} from "@/data/black-holes";
import { Reveal, RevealLi } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { images } from "@/lib/images";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";

/** Stylised cross-section of a black hole. The active part is brightened. */
function Anatomy({ active }: { active: HolePartId }) {
  const dim = (id: HolePartId) => (active === id ? 1 : 0.38);
  const t = "opacity 0.4s ease";

  return (
    <svg
      viewBox="0 0 600 400"
      role="img"
      aria-label="Diagram of a black hole showing the jets, accretion disk, photon ring, event horizon and singularity."
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="bh-jet" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9cc0ff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#9cc0ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#9cc0ff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="bh-disk" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.3" stopColor="#f4e0c4" stopOpacity="0.95" />
          <stop offset="0.6" stopColor="#e6b98a" stopOpacity="0.6" />
          <stop offset="1" stopColor="#b9774a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Jets */}
      <g style={{ opacity: dim("jet"), transition: t }}>
        <path d="M300 130 L286 8 L314 8 Z" fill="url(#bh-jet)" />
        <path d="M300 270 L286 392 L314 392 Z" fill="url(#bh-jet)" />
      </g>

      {/* Accretion disk, back half then front half */}
      <g style={{ opacity: dim("disk"), transition: t }}>
        <ellipse cx="300" cy="200" rx="260" ry="52" fill="url(#bh-disk)" />
        <path
          d="M300 138 A 92 92 0 0 1 392 200"
          fill="none"
          stroke="#f4e0c4"
          strokeOpacity="0.55"
          strokeWidth="9"
        />
        <path
          d="M208 200 A 92 92 0 0 1 300 138"
          fill="none"
          stroke="#f4e0c4"
          strokeOpacity="0.55"
          strokeWidth="9"
        />
      </g>

      {/* Event horizon / shadow */}
      <g style={{ opacity: dim("horizon"), transition: t }}>
        <circle cx="300" cy="200" r="62" fill="#000" />
        <circle cx="300" cy="200" r="62" fill="none" stroke="#eef2f8" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="3 5" />
      </g>

      {/* Front of the disk crossing the shadow */}
      <g style={{ opacity: dim("disk"), transition: t }}>
        <path
          d="M50 200 A 250 48 0 0 0 550 200"
          fill="none"
          stroke="#e6b98a"
          strokeOpacity="0.8"
          strokeWidth="10"
        />
        <path
          d="M110 200 A 190 36 0 0 0 490 200"
          fill="none"
          stroke="#f4e0c4"
          strokeOpacity="0.7"
          strokeWidth="5"
        />
      </g>

      {/* Photon ring */}
      <g style={{ opacity: dim("photon"), transition: t }}>
        <circle cx="300" cy="200" r="70" fill="none" stroke="#f4e0c4" strokeWidth="2" />
      </g>

      {/* Singularity */}
      <g style={{ opacity: dim("singularity"), transition: t }}>
        <circle cx="300" cy="200" r="3.5" fill="#eef2f8" />
      </g>
    </svg>
  );
}

export function BlackHoles() {
  const [partId, setPartId] = useState<HolePartId>("horizon");
  const part = HOLE_PARTS.find((p) => p.id === partId) ?? HOLE_PARTS[0];
  const shadow = images.m87Shadow;

  return (
    <Section
      id="black-holes"
      number="05"
      eyebrow="Black holes"
      title="Regions where gravity wins."
      lead="A black hole is a region of space where gravity is so strong that nothing can escape once it passes the event horizon. They are invisible by themselves, but we can see their surroundings."
    >
      <div className="panel grid overflow-hidden lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div className="flex flex-col justify-center border-b border-line bg-void/60 p-4 sm:p-8 lg:border-b-0 lg:border-r">
          <Anatomy active={partId} />
          <p className="mt-2 text-center text-xs text-dim">
            Schematic illustration, not to scale. Select a part to highlight it.
          </p>
        </div>
        <div className="p-6 md:p-10">
          <p className="eyebrow">Anatomy</p>
          <Tabs
            items={HOLE_PARTS.map((p) => ({ id: p.id, label: p.label }))}
            value={partId}
            onChange={(id) => setPartId(id as HolePartId)}
            label="Parts of a black hole"
            idPrefix="hole-part"
            className="mt-4"
          />
          <div
            key={part.id}
            role="tabpanel"
            id={panelId("hole-part")}
            aria-labelledby={tabId("hole-part", part.id)}
            tabIndex={0}
            className="fade-in mt-8"
          >
            <h3 className="font-display text-3xl leading-tight">{part.title}</h3>
            <p className="mt-4 leading-relaxed text-mute">{part.text}</p>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <Reveal>
        <p className="eyebrow">Three sizes</p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          From a few Suns to billions.
        </h3>
        </Reveal>
        <ul className="mt-8 grid gap-5 lg:grid-cols-3">
          {HOLE_CLASSES.map((c, i) => (
            <RevealLi key={c.id} index={i} className="h-full">
              <div className="panel card flex h-full flex-col p-6">
                <h4 className="font-display text-2xl">{c.name}</h4>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ember">{c.mass}</p>
                <p className="mt-4 text-sm leading-[1.7] text-mute">{c.text}</p>
                <ul className="mt-auto space-y-2 border-t border-line pt-5">
                  {c.examples.map((e) => (
                    <li key={e} className="text-sm text-ink">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealLi>
          ))}
        </ul>
      </div>

      <div className="mt-24 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        <figure>
          <SpaceImage
            imageKey="m87Shadow"
            sizes="(min-width:1024px) 520px, 100vw"
            maxWidth={960}
            parallax
            className="aspect-square rounded-2xl border border-line shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]"
          />
          <figcaption className="mt-3 text-xs text-dim">
            {shadow.caption}
            {shadow.credit ? ` · ${shadow.credit}` : ""}. The first direct image of a black hole’s
            shadow, released in 2019.
          </figcaption>
        </figure>
        <div>
          <h3 className="font-display text-3xl leading-tight md:text-4xl">How do we know?</h3>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {HOLE_EVIDENCE.map((e) => (
              <li key={e.title} className="py-5">
                <h4 className="font-medium">{e.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-mute">{e.text}</p>
              </li>
            ))}
          </ul>
          <div className="panel mt-6 p-5">
            <h4 className="font-medium text-ion">{HOLE_MYTH.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-mute">{HOLE_MYTH.text}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
