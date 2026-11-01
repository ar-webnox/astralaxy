"use client";
/* eslint-disable @next/next/no-img-element -- Images are served as pre-sized
   Wikimedia thumbnails with their own srcset, so next/image would only add a
   second proxy hop and require extra remote-host configuration. */

import { useEffect, useRef, useState } from "react";
import { cn, frameClasses } from "@/lib/cn";
import { images, imageSrc, imageSrcSet, type ImageKey } from "@/lib/images";
import { Glyph } from "./Glyph";
import { ParallaxFrame } from "./ParallaxFrame";

interface SpaceImageProps {
  imageKey: ImageKey;
  /** The `sizes` attribute, so the browser picks the right candidate. */
  sizes: string;
  /** Eager-load and fetch at high priority (use for the hero only). */
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Pass "" to mark the image as decorative. */
  alt?: string;
  /** Largest candidate width to offer. Defaults to 1280. */
  maxWidth?: 960 | 1280 | 1920;
  fit?: "cover" | "contain";
  /** "quiet" hides the unavailable message, for decorative backgrounds. */
  fallback?: "visible" | "quiet";
  /** Drift the picture a few percent as it scrolls past. Use on large images only. */
  parallax?: boolean;
}

type Status = "loading" | "loaded" | "error";

const WIDTH_STEPS = [500, 960, 1280, 1920] as const;

function Inner({
  imageKey,
  sizes,
  priority = false,
  className,
  imgClassName,
  alt,
  maxWidth = 1280,
  fit = "cover",
  fallback = "visible",
}: Omit<SpaceImageProps, "parallax">) {
  const meta = images[imageKey];
  const ref = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  // An image can finish loading before React hydrates, in which case onLoad
  // never fires. Check the element once on mount.
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete) {
      setStatus(el.naturalWidth > 0 ? "loaded" : "error");
    }
  }, []);

  const widths = WIDTH_STEPS.filter((w) => w <= maxWidth);
  const visible = priority || status === "loaded";

  return (
    <div className={frameClasses(className)}>
      {status !== "error" && (
        <img
          ref={ref}
          src={imageSrc(imageKey, Math.min(960, maxWidth))}
          srcSet={imageSrcSet(imageKey, widths)}
          sizes={sizes}
          alt={alt ?? meta.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cn(
            "h-full w-full motion-reduce:transition-none",
            fit === "cover" ? "object-cover" : "object-contain",
            visible ? "opacity-100" : "opacity-0",
            imgClassName,
          )}
        />
      )}
      {status === "loading" && !priority && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-white/[0.035] motion-reduce:animate-none"
        />
      )}
      {status === "error" && fallback === "visible" && (
        <div
          role="img"
          aria-label={`${meta.caption}. The image could not be loaded.`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-dim"
        >
          <Glyph kind="image" className="size-10" />
          <p className="max-w-[28ch] text-xs leading-relaxed">
            {meta.caption}
            <span className="block">Image unavailable right now</span>
          </p>
        </div>
      )}
    </div>
  );
}

/** Keyed so that swapping the image resets the loading state cleanly. */
export function SpaceImage({ parallax = false, ...props }: SpaceImageProps) {
  if (parallax) {
    const { className, ...rest } = props;
    return (
      <ParallaxFrame className={className}>
        <Inner key={props.imageKey} {...rest} className="absolute inset-0" />
      </ParallaxFrame>
    );
  }
  return <Inner key={props.imageKey} {...props} />;
}
