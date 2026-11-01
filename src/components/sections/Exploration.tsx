import {
  APOLLO_MISSIONS,
  DISCOVERIES,
  EXPLORERS,
  MOON_POINTS,
  MOON_STATS,
  OBSERVATORIES,
  OTHER_EYES,
} from "@/data/exploration";
import { RevealLi } from "@/components/ui/Reveal";
import { Section, StatGrid } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { images } from "@/lib/images";

export function Exploration() {
  return (
    <Section
      id="exploration"
      number="07"
      eyebrow="Moon & exploration"
      title="From the Moon to the edge of the observable."
      lead="Within a single lifetime we have walked on another world, sent probes beyond the planets and built telescopes that see back to the early universe."
    >
      {/* The Moon */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        <figure className="self-start">
          <SpaceImage
            imageKey="moon"
            sizes="(min-width:1024px) 540px, 100vw"
            maxWidth={1280}
            parallax
            className="aspect-square rounded-2xl border border-line shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]"
          />
          <figcaption className="mt-3 text-xs text-dim">
            {images.moon.caption}
            {images.moon.credit ? ` · ${images.moon.credit}` : ""}
          </figcaption>
        </figure>
        <div>
          <p className="eyebrow">The Moon</p>
          <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
            Our nearest neighbour and the only world humans have visited.
          </h3>
          <StatGrid stats={MOON_STATS} className="mt-6" />
          <ul className="mt-6 space-y-3">
            {MOON_POINTS.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed text-mute">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-ember" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-2xl">The Apollo landings</h3>
        <ol className="mt-5 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {APOLLO_MISSIONS.map((m) => (
            <li key={m.name} className="bg-space p-5 transition-colors duration-500 hover:bg-navy motion-reduce:transition-none">
              <p className="text-xs uppercase tracking-[0.14em] text-ember">{m.date}</p>
              <h4 className="mt-1 font-display text-xl">{m.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mute">{m.note}</p>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-dim">
          Apollo 13 (1970) was also bound for the Moon but returned after an in-flight emergency,
          without landing.
        </p>
      </div>

      {/* Telescopes */}
      <div className="mt-28">
        <p className="eyebrow">Telescopes</p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          Instruments that look back in time.
        </h3>
        <ul className="mt-8 grid gap-6 lg:grid-cols-2">
          {OBSERVATORIES.map((o, i) => (
            <RevealLi key={o.id} index={i} className="h-full">
              <article className="panel card flex h-full flex-col overflow-hidden">
                <SpaceImage
                  imageKey={o.image}
                  sizes="(min-width:1024px) 600px, 100vw"
                  maxWidth={1280}
                  parallax
                  className="aspect-[16/10]"
                />
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h4 className="font-display text-3xl">{o.name}</h4>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ember">{o.tagline}</p>
                  <p className="mt-4 leading-[1.75] text-mute">{o.text}</p>
                  <ul className="mt-auto space-y-2 border-t border-line pt-5">
                    {o.facts.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-mute">
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
        <div className="panel mt-6 p-6">
          <h4 className="font-medium">Other eyes on the sky</h4>
          <ul className="mt-3 grid gap-x-8 gap-y-2 text-sm text-mute md:grid-cols-2">
            {OTHER_EYES.map((e) => (
              <li key={e} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-ember" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* People and spacecraft */}
      <div className="mt-24">
        <p className="eyebrow">Astronauts & spacecraft</p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          People and probes reaching outward.
        </h3>
        <ul className="mt-8 grid gap-5 lg:grid-cols-3">
          {EXPLORERS.map((e, i) => (
            <RevealLi key={e.id} index={i} className="h-full">
              <article className="panel card flex h-full flex-col overflow-hidden">
                {e.image && (
                  <SpaceImage
                    imageKey={e.image}
                    sizes="(min-width:1024px) 400px, 100vw"
                    maxWidth={960}
                    parallax
                    className="aspect-[4/3]"
                  />
                )}
                <div className="p-6">
                  <h4 className="font-display text-2xl">{e.title}</h4>
                  <p className="mt-3 text-sm leading-[1.7] text-mute">{e.text}</p>
                </div>
              </article>
            </RevealLi>
          ))}
        </ul>
      </div>

      {/* Timeline */}
      <div className="mt-24">
        <p className="eyebrow">Major discoveries</p>
        <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          Four centuries of changing our view of the cosmos.
        </h3>
        <ol className="mt-10 border-l border-line">
          {DISCOVERIES.map((d) => (
            <RevealLi key={d.year} className="relative pb-8 pl-8 last:pb-0 md:pl-10">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-ember ring-4 ring-void"
              />
              <div className="flex flex-col gap-1 md:flex-row md:gap-8">
                <p className="w-16 shrink-0 font-display text-2xl tabular-nums text-ink">{d.year}</p>
                <div>
                  <h4 className="font-medium">{d.title}</h4>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-mute">{d.text}</p>
                </div>
              </div>
            </RevealLi>
          ))}
        </ol>
      </div>
    </Section>
  );
}
