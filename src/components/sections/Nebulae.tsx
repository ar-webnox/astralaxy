"use client";

import { useState } from "react";
import { COLOUR_NOTE, NEBULAE, NEBULA_KINDS, type NebulaKind } from "@/data/nebulae";
import { Glyph } from "@/components/ui/Glyph";
import { RevealLi } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";

type Filter = NebulaKind | "all";

const KIND_LABEL: Record<NebulaKind, string> = {
  nursery: "Stellar nursery",
  dark: "Dark nebula",
  planetary: "Planetary nebula",
  remnant: "Supernova remnant",
};

export function Nebulae() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = NEBULAE.filter((n) => filter === "all" || n.kind === filter);
  const activeKind = NEBULA_KINDS.find((k) => k.id === filter);

  return (
    <Section
      id="nebulae"
      number="06"
      eyebrow="Nebulae"
      title="Clouds where stars begin and end."
      lead="Nebulae are clouds of gas and dust. Some are nurseries where new stars ignite, others are the glowing shrouds of stars that have died."
    >
      <Tabs
        items={[
          { id: "all", label: "All", count: NEBULAE.length },
          ...NEBULA_KINDS.map((k) => ({
            id: k.id,
            label: k.label,
            count: NEBULAE.filter((n) => n.kind === k.id).length,
          })),
        ]}
        value={filter}
        onChange={(id) => setFilter(id as Filter)}
        label="Filter nebulae by type"
        idPrefix="nebula"
      />
      <p className="mt-4 min-h-6 text-sm text-mute">
        {activeKind ? activeKind.blurb : "Browse all eight or filter by how each nebula formed."}
      </p>

      <div
        key={filter}
        role="tabpanel"
        id={panelId("nebula")}
        aria-labelledby={tabId("nebula", filter)}
        className="mt-8"
      >
        <ul className="grid gap-6 md:grid-cols-2">
          {visible.map((n, i) => (
            <RevealLi key={n.id} index={i % 2} className="h-full">
              <article className="panel card flex h-full flex-col overflow-hidden">
                <div className="relative">
                  {n.image ? (
                    <SpaceImage
                      imageKey={n.image}
                      sizes="(min-width:768px) 600px, 100vw"
                      maxWidth={1280}
                      parallax
                      className="aspect-[16/10]"
                    />
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-[radial-gradient(circle_at_50%_50%,rgba(156,192,255,0.1),transparent_62%)] text-ion/60">
                      <Glyph kind={n.glyph} className="size-24" />
                    </div>
                  )}
                  <span className="glass pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-ink/90">
                    {KIND_LABEL[n.kind]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-3xl leading-tight">{n.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ember">
                    {n.constellation}
                  </p>
                  <p className="mt-4 text-sm leading-[1.75] text-mute">{n.summary}</p>
                  <div className="mt-auto pt-6">
                  <dl className="grid grid-cols-2 gap-4 border-t border-line pt-5 text-sm">
                    <div>
                      <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-dim">Distance</dt>
                      <dd className="mt-1">{n.distance}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] uppercase tracking-[0.14em] text-dim">Size</dt>
                      <dd className="mt-1">{n.size}</dd>
                    </div>
                  </dl>
                  </div>
                </div>
              </article>
            </RevealLi>
          ))}
        </ul>
      </div>

      <aside className="panel mt-12 p-6 md:p-8">
        <h3 className="font-display text-2xl">A note on colour</h3>
        <p className="mt-3 max-w-3xl text-sm leading-[1.75] text-mute">{COLOUR_NOTE}</p>
      </aside>
    </Section>
  );
}
