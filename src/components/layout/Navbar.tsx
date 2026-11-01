"use client";

import { m, useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { PRIMARY_NAV_IDS, SECTIONS, SITE } from "@/lib/site";
import { Close, Menu } from "@/components/ui/Icons";

export function Navbar() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (targets.length === 0 || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const openMenu = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    }
  }, []);

  const closeMenu = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleClosed = useCallback(() => {
    document.documentElement.style.overflow = "";
  }, []);

  const primary = SECTIONS.filter((s) =>
    (PRIMARY_NAV_IDS as readonly string[]).includes(s.id),
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-500 motion-reduce:transition-none",
          scrolled
            ? "border-b border-line bg-void/85 shadow-[0_1px_0_rgba(255,255,255,0.03)] md:supports-[backdrop-filter]:bg-void/55 md:supports-[backdrop-filter]:backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-14 w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8"
        >
          <a href="#top" className="group flex min-h-11 items-center gap-2.5" aria-label={`${SITE.name}, back to top`}>
            <span
              aria-hidden="true"
              className="relative block size-4 rounded-full border border-ink/80 transition-transform duration-500 after:absolute after:left-1/2 after:top-1/2 after:size-1 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-ember group-hover:scale-110 motion-reduce:transition-none"
            />
            <span className="font-display text-xl leading-none tracking-wide">{SITE.name}</span>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {primary.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "location" : undefined}
                  className={cn(
                    "nav-link block rounded-full px-3.5 py-2 text-sm transition-colors duration-300 motion-reduce:transition-none",
                    active === s.id ? "text-ink" : "text-mute hover:text-ink",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={openMenu}
            aria-haspopup="dialog"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-ink transition-colors hover:border-white/30 pointer-coarse:min-h-11 motion-reduce:transition-none"
          >
            <Menu className="size-4" />
            <span>Index</span>
          </button>
        </nav>

        {/* Reading progress: a single hairline scaled with a motion value. */}
        <m.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gradient-to-r from-ember/0 via-ember/80 to-ember"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      <dialog
        ref={dialogRef}
        onClose={handleClosed}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
        aria-label="Site index"
        className="dialog-in m-0 hidden h-dvh max-h-none w-screen max-w-none overflow-y-auto bg-void/[0.97] p-0 text-ink open:block"
      >
        <div className="mx-auto flex min-h-full w-full max-w-[1240px] flex-col px-5 pb-10 sm:px-8">
          <div className="flex h-14 items-center justify-between">
            <span className="eyebrow">Index</span>
            <button
              type="button"
              onClick={closeMenu}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:border-white/30 pointer-coarse:min-h-11"
            >
              <Close className="size-4" />
              Close
            </button>
          </div>

          <ol className="mt-6 grid gap-x-12 md:grid-cols-2">
            {SECTIONS.map((s, i) => (
              <li
                key={s.id}
                className="rise border-t border-line"
                style={{ "--d": `${80 + i * 45}ms` } as CSSProperties}
              >
                <a
                  href={`#${s.id}`}
                  onClick={closeMenu}
                  className="group flex items-baseline gap-5 py-5"
                >
                  <span className="w-6 shrink-0 text-xs tabular-nums text-dim transition-colors group-hover:text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none">
                    <span className="block font-display text-3xl leading-tight transition-colors group-hover:text-ion motion-reduce:transition-none">
                      {s.label}
                    </span>
                    <span className="mt-1 block max-w-[44ch] text-sm text-mute">{s.blurb}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </dialog>
    </>
  );
}
