/**
 * Central site configuration.
 * Replace the placeholders here (or set the matching NEXT_PUBLIC_* variables
 * in .env.local, see .env.example) before launch.
 */

export const SITE = {
  /** Working name. Change it here and it updates everywhere. */
  name: "Astralaxy",
  tagline: "An atlas of the observable universe",
  description:
    "A guided atlas of the universe: the Solar System, galaxies, stars, black holes, nebulae, exoplanets and the story of how we explored them, illustrated with real imagery from NASA, ESA and ESO.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
} as const;

export interface SectionLink {
  id: string;
  label: string;
  blurb: string;
}

/** Order here is the order of the page, the navbar and the index menu. */
export const SECTIONS: readonly SectionLink[] = [
  { id: "universe", label: "Universe", blurb: "Your cosmic address and a searchable catalogue of deep-space objects" },
  { id: "solar-system", label: "Solar System", blurb: "The Sun, eight planets, their moons and rings" },
  { id: "galaxies", label: "Galaxies", blurb: "The Milky Way, Andromeda and every shape in between" },
  { id: "stars", label: "Stars", blurb: "Life cycles, constellations and the remnants stars leave behind" },
  { id: "black-holes", label: "Black Holes", blurb: "Event horizons, accretion disks and supermassive giants" },
  { id: "nebulae", label: "Nebulae", blurb: "Stellar nurseries and the glowing clouds of space" },
  { id: "exploration", label: "Exploration", blurb: "The Moon, telescopes, astronauts and landmark discoveries" },
  { id: "deep-space", label: "Deep Space", blurb: "Exoplanets, the observable universe and the search for life" },
  { id: "facts", label: "Cosmic Facts", blurb: "Short, checked facts worth remembering" },
  { id: "gallery", label: "Gallery", blurb: "A browsable collection of real space imagery" },
];

/** Links shown in the desktop navbar. The full list lives in the index menu. */
export const PRIMARY_NAV_IDS = [
  "solar-system",
  "galaxies",
  "stars",
  "black-holes",
  "nebulae",
] as const;

export interface SocialLink {
  label: string;
  /** "#" means "not configured yet". */
  href: string;
}

/**
 * Social profiles. Paste your real URLs below or set the env variables.
 * Anything left as "#" renders as an inactive placeholder.
 */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "GitHub", href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB || "https://github.com/ar-webnox" },
  { label: "LinkedIn", href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "https://linkedin.com/in/abdulrehman28" },
  { label: "Instagram", href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://instagram.com/ar.webnox" },
  { label: "YouTube", href: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "#" },
  { label: "X", href: process.env.NEXT_PUBLIC_SOCIAL_X || "#" },
];

/** Leave empty until you have a real address. */
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

export const RESOURCE_LINKS = [
  { label: "NASA Science", href: "https://science.nasa.gov" },
  { label: "ESA Webb Telescope", href: "https://esawebb.org" },
  { label: "ESA / Hubble", href: "https://esahubble.org" },
  { label: "ESO Gallery", href: "https://www.eso.org/public/images/" },
  { label: "NASA Eyes", href: "https://eyes.nasa.gov" },
  { label: "Stellarium Web", href: "https://stellarium-web.org" },
] as const;
