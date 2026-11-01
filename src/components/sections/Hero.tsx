import type { CSSProperties } from "react";
import { HeroBackdrop } from "@/components/effects/HeroBackdrop";
import { ArrowDown, ArrowRight } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";
import { SITE } from "@/lib/site";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const STATS = [
  { value: "13.8 billion", label: "years of cosmic history" },
  { value: "≈ 93 billion", label: "light-years across, observable" },
  { value: "6,000+", label: "confirmed exoplanets" },
];

/** Headline words. Each rises in on its own beat; `em` words use the italic face. */
const HEADLINE: { w: string; em?: boolean }[] = [
  { w: "Journey" },
  { w: "through" },
  { w: "a" },
  { w: "universe" },
  { w: "93", em: true },
  { w: "billion", em: true },
  { w: "light-years", em: true },
  { w: "wide." },
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28"
    >
      <HeroBackdrop />

      <Container className="pb-10 md:pb-14">
        <p className="eyebrow rise" style={delay(100)}>
          {SITE.tagline}
        </p>
        <h1
          id="hero-title"
          className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,7.2vw,5.6rem)] leading-[1.02] tracking-[-0.02em] text-balance"
        >
          {HEADLINE.map((t, i) => (
            <span
              key={i}
              className={`rise inline-block ${t.em ? "italic text-ember/95" : ""}`}
              style={delay(240 + i * 70)}
            >
              {t.w}
              {i < HEADLINE.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <p
          className="rise mt-7 max-w-xl text-base leading-[1.75] text-ink/80 md:text-lg"
          style={delay(900)}
        >
          From the planets of our own Solar System to black holes, glowing nebulae and the most
          distant galaxies, explore an illustrated atlas built on real imagery from NASA, ESA and
          ESO.
        </p>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={delay(1050)}
        >
          <a
            href="#universe"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-void shadow-[0_0_0_1px_rgba(255,255,255,0.4),0_12px_40px_-12px_rgba(156,192,255,0.5)] transition-[background-color,box-shadow] duration-300 hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_16px_48px_-12px_rgba(156,192,255,0.7)] motion-reduce:transition-none"
          >
            Explore the Universe
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
          </a>
          <a
            href="#gallery"
            className="py-2.5 text-sm text-ink/80 underline decoration-white/30 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-white/70"
          >
            Browse the gallery
          </a>
        </div>

        {/* Faux glass: tint, hairline and inner highlight, no blur over the moving photo. */}
        <dl
          className="rise mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-void/45 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:grid-cols-3 md:mt-20"
          style={delay(1200)}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-2 text-xs uppercase tracking-[0.14em] text-mute">{s.label}</dt>
              <dd className="font-display text-3xl leading-none md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex items-end justify-between gap-6 text-[0.7rem] text-dim">
          <a href="#universe" className="inline-flex items-center gap-2 py-2 hover:text-mute">
            <ArrowDown className="size-3.5" />
            Scroll to begin
          </a>
          <p className="text-right">The Milky Way above the Atacama Desert · ESO / S. Brunier</p>
        </div>
      </Container>
    </section>
  );
}
