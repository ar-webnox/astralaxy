"use client";

import { useId, useMemo, useState } from "react";
import { COSMIC_ADDRESS, OBJECT_KINDS, UNIVERSE_OBJECTS, type ObjectKind } from "@/data/universe";
import { Glyph } from "@/components/ui/Glyph";
import { Search } from "@/components/ui/Icons";
import { RevealLi } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";
import { cn } from "@/lib/cn";

const PAGE_SIZE = 9;
type KindFilter = ObjectKind | "All";

const KIND_LABELS: Record<ObjectKind, string> = {
  Galaxy: "Galaxies",
  Nebula: "Nebulae",
  Star: "Stars",
  "Black hole": "Black holes",
  Cluster: "Clusters",
};

function CosmicAddress() {
  const [value, setValue] = useState(COSMIC_ADDRESS[0].id);
  const item = COSMIC_ADDRESS.find((a) => a.id === value) ?? COSMIC_ADDRESS[0];
  const index = COSMIC_ADDRESS.findIndex((a) => a.id === item.id);

  return (
    <div className="panel p-6 md:p-10">
      <p className="eyebrow">Your cosmic address</p>
      <h3 className="mt-3 max-w-xl font-display text-3xl leading-tight md:text-4xl">
        Zoom out from home, one step at a time.
      </h3>
      <Tabs
        items={COSMIC_ADDRESS.map((a) => ({ id: a.id, label: a.label }))}
        value={value}
        onChange={setValue}
        label="Scales of the universe"
        idPrefix="address"
        className="mt-8"
      />
      <div
        key={item.id}
        role="tabpanel"
        id={panelId("address")}
        aria-labelledby={tabId("address", item.id)}
        tabIndex={0}
        className="fade-in mt-8 grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-end"
      >
        <div>
          <p className="font-display text-5xl leading-none md:text-6xl">{item.scale}</p>
          <p className="mt-2 text-sm text-dim">{item.scaleNote}</p>
        </div>
        <p className="text-base leading-relaxed text-mute md:text-lg">{item.text}</p>
      </div>
      <div
        aria-hidden="true"
        className="mt-8 flex gap-1.5"
      >
        {COSMIC_ADDRESS.map((a, i) => (
          <span
            key={a.id}
            className={cn(
              "h-0.5 flex-1 rounded-full transition-colors motion-reduce:transition-none",
              i <= index ? "bg-ember" : "bg-white/10",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function Catalogue() {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<KindFilter>("All");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return UNIVERSE_OBJECTS.filter((o) => {
      if (kind !== "All" && o.kind !== kind) return false;
      if (!q) return true;
      return [o.name, o.kind, o.summary, o.distance].some((f) => f.toLowerCase().includes(q));
    });
  }, [query, kind]);

  const shown = results.slice(0, limit);
  const tabs = [
    { id: "All", label: "All", count: UNIVERSE_OBJECTS.length },
    ...OBJECT_KINDS.map((k) => ({
      id: k,
      label: KIND_LABELS[k],
      count: UNIVERSE_OBJECTS.filter((o) => o.kind === k).length,
    })),
  ];

  function reset() {
    setQuery("");
    setKind("All");
    setLimit(PAGE_SIZE);
  }

  return (
    <div className="mt-16 md:mt-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow">Deep-space catalogue</p>
          <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Find an object in the sky.
          </h3>
        </div>
        <div className="relative w-full md:max-w-sm">
          <label htmlFor={searchId} className="sr-only">
            Search galaxies, nebulae, stars and black holes
          </label>
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-dim" />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(PAGE_SIZE);
            }}
            placeholder="Search, e.g. Orion, spiral, supergiant"
            autoComplete="off"
            className="w-full rounded-full border border-line bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-ink placeholder:text-dim focus:border-ion/60"
          />
        </div>
      </div>

      <Tabs
        items={tabs}
        value={kind}
        onChange={(id) => {
          setKind(id as KindFilter);
          setLimit(PAGE_SIZE);
        }}
        label="Filter objects by type"
        idPrefix="catalogue"
        className="mt-6"
      />

      <p className="mt-6 text-sm text-dim" role="status" aria-live="polite">
        {results.length === 0
          ? "No objects match."
          : `Showing ${shown.length} of ${results.length} ${results.length === 1 ? "object" : "objects"}`}
      </p>

      <div
        role="tabpanel"
        id={panelId("catalogue")}
        aria-labelledby={tabId("catalogue", kind)}
        className="mt-4"
      >
        {results.length === 0 ? (
          <div className="panel flex flex-col items-center gap-4 px-6 py-14 text-center">
            <Glyph kind="star" className="size-10 text-dim" />
            <p className="max-w-sm text-mute">
              Nothing in the catalogue matches “{query}”. Try a broader word or clear the filters.
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-line px-5 py-2 text-sm hover:border-white/30 pointer-coarse:min-h-11"
            >
              Clear search and filters
            </button>
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((o, i) => (
              <RevealLi key={o.id} index={i % 3} className="h-full">
                <article className="panel card flex h-full flex-col overflow-hidden">
                  {o.image ? (
                    <div className="relative">
                      <SpaceImage
                        imageKey={o.image}
                        sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
                        maxWidth={960}
                        className="aspect-[16/9]"
                      />
                      <span className="glass pointer-events-none absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-ink/90">
                        {o.kind}
                      </span>
                    </div>
                  ) : (
                    <div className="relative flex aspect-[16/9] items-center justify-center border-b border-line bg-[radial-gradient(circle_at_50%_55%,rgba(156,192,255,0.08),transparent_65%)] text-dim">
                      <Glyph kind={o.glyph} className="size-14" />
                      <span className="glass pointer-events-none absolute left-3 top-3 rounded-full px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-ink/90">
                        {o.kind}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="font-display text-2xl leading-tight">{o.name}</h4>
                    <p className="mt-1 text-xs tracking-wide text-ember/90">{o.distance}</p>
                    <p className="mt-3 text-sm leading-[1.7] text-mute">{o.summary}</p>
                  </div>
                </article>
              </RevealLi>
            ))}
          </ul>
        )}

        {results.length > limit && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setLimit((l) => l + PAGE_SIZE)}
              className="rounded-full border border-line px-6 py-3 text-sm hover:border-white/30"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function UniverseOverview() {
  return (
    <Section
      id="universe"
      number="01"
      eyebrow="Universe overview"
      title="A cosmos of galaxies, nebulae, stars and the spaces between."
      lead="Everything we know about the universe comes from light and other signals that reached us across vast distances. Start with where we sit, then search the catalogue."
    >
      <CosmicAddress />
      <Catalogue />
    </Section>
  );
}
