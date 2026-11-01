"use client";

import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, Close, External } from "@/components/ui/Icons";
import { RevealLi } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SpaceImage } from "@/components/ui/SpaceImage";
import { panelId, tabId, Tabs } from "@/components/ui/Tabs";
import { galleryKeys, imageSourceUrl, images, type ImageKey } from "@/lib/images";

const CATEGORIES = ["All", ...Array.from(new Set(galleryKeys.map((k) => images[k].category)))];

export function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [category, setCategory] = useState("All");
  const [current, setCurrent] = useState<number | null>(null);

  const keys: ImageKey[] = useMemo(
    () => galleryKeys.filter((k) => category === "All" || images[k].category === category),
    [category],
  );

  const activeKey = current !== null ? keys[current] : undefined;
  const active = activeKey ? images[activeKey] : undefined;

  function open(i: number) {
    setCurrent(i);
    dialogRef.current?.showModal();
    document.documentElement.style.overflow = "hidden";
  }

  function close() {
    dialogRef.current?.close();
  }

  function step(delta: number) {
    setCurrent((c) => (c === null ? c : (c + delta + keys.length) % keys.length));
  }

  function onKeyDown(e: KeyboardEvent<HTMLDialogElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
    }
  }

  return (
    <Section
      id="gallery"
      number="10"
      eyebrow="Gallery"
      title="The universe, as our instruments see it."
      lead="Real images from space telescopes, spacecraft and observatories. Select any picture to view it larger, then use the arrow keys to move between them."
    >
      <Tabs
        items={CATEGORIES.map((c) => ({
          id: c,
          label: c,
          count: c === "All" ? galleryKeys.length : galleryKeys.filter((k) => images[k].category === c).length,
        }))}
        value={category}
        onChange={setCategory}
        label="Filter gallery by subject"
        idPrefix="gallery"
      />

      <div
        key={category}
        role="tabpanel"
        id={panelId("gallery")}
        aria-labelledby={tabId("gallery", category)}
        className="mt-8"
      >
        {keys.length === 0 ? (
          <p className="panel px-6 py-12 text-center text-mute">No images in this category yet.</p>
        ) : (
          <ul className="grid grid-flow-dense grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {keys.map((k, i) => {
              const featured = keys.length >= 6 && i % 7 === 0;
              return (
                <RevealLi
                  key={k}
                  index={i % 3}
                  className={featured ? "lg:col-span-2 lg:row-span-2" : ""}
                >
                  <button
                    type="button"
                    onClick={() => open(i)}
                    aria-label={`View larger: ${images[k].caption}`}
                    className={`group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-line text-left transition-colors duration-500 hover:border-white/25 motion-reduce:transition-none ${featured ? "lg:aspect-auto lg:h-full lg:min-h-full" : ""}`}
                  >
                    <SpaceImage
                      imageKey={k}
                      alt=""
                      sizes={featured ? "(min-width:1024px) 800px, 50vw" : "(min-width:1024px) 400px, 50vw"}
                      maxWidth={featured ? 1280 : 960}
                      className="absolute inset-0"
                      imgClassName="transition-[transform,opacity] duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-10 text-xs text-ink sm:px-4 sm:text-sm">
                      {images[k].caption}
                    </span>
                  </button>
                </RevealLi>
              );
            })}
          </ul>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Image viewer"
        onKeyDown={onKeyDown}
        onClose={() => {
          setCurrent(null);
          document.documentElement.style.overflow = "";
        }}
        className="m-0 hidden h-dvh max-h-none w-screen max-w-none bg-void/[0.98] p-0 text-ink open:block"
      >
        {activeKey && active && (
          <div
            className="flex h-full flex-col"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <p className="text-sm tabular-nums text-dim">
                {(current ?? 0) + 1} / {keys.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="glass glass-blur inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:border-white/30"
              >
                <Close className="size-4" />
                Close
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-16"
              onClick={(e) => {
                if (e.target === e.currentTarget) close();
              }}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center glass glass-blur rounded-full hover:border-white/30 sm:left-4"
              >
                <ChevronLeft className="size-5" />
              </button>
              <SpaceImage
                imageKey={activeKey}
                sizes="100vw"
                maxWidth={1920}
                fit="contain"
                className="h-full w-full bg-transparent"
              />
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="absolute right-2 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center glass glass-blur rounded-full hover:border-white/30 sm:right-4"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2 px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-6">
              <div>
                <p className="font-display text-2xl">{active.caption}</p>
                <p className="mt-1 max-w-3xl text-sm text-mute">{active.alt}</p>
              </div>
              <div className="text-sm sm:text-right">
                {active.credit && <p className="text-mute">{active.credit}</p>}
                <a
                  href={imageSourceUrl(activeKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-ion hover:underline"
                >
                  Source and licence
                  <External className="size-3.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}
