import { ArrowRight, ArrowUp } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden py-32 md:py-44"
    >
      <SpaceImage
        imageKey="deepField"
        alt=""
        fallback="quiet"
        sizes="100vw"
        maxWidth={1920}
        parallax
        className="absolute inset-0 -z-20 opacity-35"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#05070d_0%,rgba(5,7,13,0.55)_50%,#05070d_100%)]"
      />
      <Container className="relative text-center">
        <p className="eyebrow">Keep looking up</p>
        <h2
          id="cta-title"
          className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.05] tracking-tight text-balance"
        >
          There is far more universe than anyone could see in one visit.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
          Start again from the beginning, wander the gallery or go outside tonight and look at the
          sky. Everything here began as light that someone looked up and caught.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href="#universe"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-void shadow-[0_16px_48px_-12px_rgba(156,192,255,0.5)] transition-colors hover:bg-white motion-reduce:transition-none"
          >
            Explore the Universe
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 py-2.5 text-sm text-ink/80 hover:text-ink"
          >
            <ArrowUp className="size-4" />
            Back to top
          </a>
        </div>
      </Container>
    </section>
  );
}
