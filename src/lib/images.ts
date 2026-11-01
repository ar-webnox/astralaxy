import data from "./image-data.json";

export type ImageKey = keyof typeof data;

export interface SpaceImageMeta {
  /** Wikimedia Commons file name, exactly as it appears after "File:". */
  file: string;
  alt: string;
  /** Short credit line. Omitted where it has not been confirmed. */
  credit?: string;
  caption: string;
  category: string;
  gallery: boolean;
}

export const images: Record<ImageKey, SpaceImageMeta> = data;

/** Thumbnail widths Wikimedia serves as standard steps. */
export const IMAGE_WIDTHS = [500, 960, 1280, 1920] as const;

const COMMONS = "https://commons.wikimedia.org/wiki";

function fileSlug(file: string): string {
  return encodeURIComponent(file.replace(/ /g, "_"));
}

/** Resized image URL. Special:FilePath redirects to a cached thumbnail. */
export function imageSrc(key: ImageKey, width: number): string {
  return `${COMMONS}/Special:FilePath/${fileSlug(images[key].file)}?width=${width}`;
}

export function imageSrcSet(
  key: ImageKey,
  widths: readonly number[] = IMAGE_WIDTHS,
): string {
  return widths.map((w) => `${imageSrc(key, w)} ${w}w`).join(", ");
}

/** Wikimedia Commons description page: the authoritative credit and licence. */
export function imageSourceUrl(key: ImageKey): string {
  return `${COMMONS}/File:${fileSlug(images[key].file)}`;
}

export const galleryKeys: ImageKey[] = (Object.keys(images) as ImageKey[]).filter(
  (k) => images[k].gallery,
);
