"use client";

import { useMemo, useState } from "react";
import { FACT_CATEGORIES, FACTS, type FactCategory } from "@/data/facts";
import { ChevronLeft, ChevronRight, Shuffle } from "@/components/ui/Icons";
import { Section } from "@/components/ui/Section";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";
import { cn } from "@/lib/cn";

type Filter = FactCategory | "All";

export function CosmicFacts() {
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState(0);

  const deck = useMemo(
    () => FACTS.filter((f) => filter === "All" || f.category === filter),
    [filter],
  );
  const fact = deck[index] ?? deck[0];

  function go(delta: number) {
    setIndex((i) => (i + delta + deck.length) % deck.length);
  }

  function shuffle() {
    if (deck.length < 2) return;
    let next = index;
    while (next === index) next = Math.floor(Math.random() * deck.length);
    setIndex(next);
  }

  return (
    <Section
      id="facts"
      number="09"
      eyebrow="Cosmic facts"
      title="Short facts that are worth remembering."
      lead="Pick a topic, then step through the facts one at a time or shuffle. Each one has a line of context so you can see where it comes from."
    >
      <Tabs
        items={[
          { id: "All", label: "All", count: FACTS.length },
          ...FACT_CATEGORIES.map((c) => ({
            id: c,
            label: c,
            count: FACTS.filter((f) => f.category === c).length,
          })),
        ]}
        value={filter}
        onChange={(id) => {
          setFilter(id as Filter);
          setIndex(0);
        }}
        label="Fact topics"
        idPrefix="fact-topic"
      />

      <div
        role="tabpanel"
        id={panelId("fact-topic")}
        aria-labelledby={tabId("fact-topic", filter)}
        className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
      >
        <div className="panel relative flex min-h-[22rem] flex-col justify-between overflow-hidden p-6 md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-[radial-gradient(circle,rgba(156,192,255,0.12),transparent_70%)]"
          />
          <div aria-live="polite" aria-atomic="true">
            <div key={fact.id} className="fade-in">
            <p className="eyebrow">{fact.category}</p>
            <p className="mt-5 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.15] text-balance">
              {fact.text}
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-mute">{fact.detail}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <p className="text-sm tabular-nums text-dim">
              {deck.indexOf(fact) + 1} / {deck.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous fact"
                className="glass glass-blur inline-flex size-11 items-center justify-center rounded-full hover:border-white/30"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={shuffle}
                className="glass glass-blur inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm hover:border-white/30"
              >
                <Shuffle className="size-4" />
                Shuffle
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next fact"
                className="inline-flex size-11 items-center justify-center rounded-full bg-ink text-void hover:bg-white"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <ul className="max-h-[22rem] divide-y divide-line overflow-y-auto rounded-2xl border border-line">
          {deck.map((f, i) => (
            <li key={f.id}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-current={f.id === fact.id ? "true" : undefined}
                className={cn(
                  "w-full px-5 py-4 text-left text-sm leading-snug transition-colors motion-reduce:transition-none",
                  f.id === fact.id ? "bg-white/[0.06] text-ink" : "text-mute hover:bg-white/[0.03] hover:text-ink",
                )}
              >
                {f.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
