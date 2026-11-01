import type { ImageKey } from "@/lib/images";
import type { GlyphKind } from "./universe";
import type { Stat } from "./solar-system";

export interface FeaturedGalaxy {
  id: string;
  name: string;
  type: string;
  image: ImageKey;
  summary: string;
  stats: Stat[];
}

export const FEATURED_GALAXIES: FeaturedGalaxy[] = [
  {
    id: "milky-way",
    name: "The Milky Way",
    type: "Barred spiral galaxy",
    image: "milkyWay",
    summary:
      "Our home galaxy is a flat disk of stars, gas and dust with a central bar and spiral arms. From inside it, we see the disk edge-on as the pale band that crosses a dark night sky.",
    stats: [
      { label: "Diameter", value: "≈ 100,000 light-years" },
      { label: "Stars", value: "Roughly 100–400 billion" },
      { label: "Sun’s distance from centre", value: "≈ 26,000 light-years" },
      { label: "Central black hole", value: "Sagittarius A*, ≈ 4 million Suns" },
    ],
  },
  {
    id: "andromeda",
    name: "Andromeda (M31)",
    type: "Spiral galaxy",
    image: "andromeda",
    summary:
      "The largest galaxy in the Local Group and the nearest big neighbour. It is approaching the Milky Way at about 110 km/s, though recent studies suggest a collision within the next 10 billion years is roughly a coin flip.",
    stats: [
      { label: "Distance", value: "≈ 2.5 million light-years" },
      { label: "Stars", value: "About a trillion" },
      { label: "Naked-eye visibility", value: "A faint smudge from a dark site" },
      { label: "Motion", value: "Approaching at ≈ 110 km/s" },
    ],
  },
];

export interface GalaxyType {
  id: string;
  label: string;
  glyph: GlyphKind;
  summary: string;
  traits: string[];
  example: string;
  image?: ImageKey;
}

export const GALAXY_TYPES: GalaxyType[] = [
  {
    id: "spiral",
    label: "Spiral",
    glyph: "spiral",
    summary:
      "Flat, rotating disks with a central bulge and winding arms rich in gas, dust and young blue stars. The arms are patterns that stars move through, not fixed structures.",
    traits: ["Active star formation in the arms", "A mix of young and old stars", "Typically a spherical halo of ancient stars"],
    example: "Pinwheel Galaxy (M101), about 21 million light-years away",
    image: "pinwheel",
  },
  {
    id: "barred",
    label: "Barred spiral",
    glyph: "barred",
    summary:
      "Spirals whose arms spring from a straight bar of stars across the centre. Roughly two thirds of spirals have one and bars help funnel gas toward the core.",
    traits: ["A central bar of stars", "Gas channelled inward along the bar", "Includes our own galaxy"],
    example: "The Milky Way",
  },
  {
    id: "elliptical",
    label: "Elliptical",
    glyph: "elliptical",
    summary:
      "Smooth, rounded collections of mostly old, red stars with little gas and little new star formation. They range from small dwarfs to giants of a trillion stars and are thought to grow through mergers.",
    traits: ["Little gas or dust", "Mostly older stars", "Often found at the centres of clusters"],
    example: "Messier 87, about 55 million light-years away",
    image: "m87Jet",
  },
  {
    id: "lenticular",
    label: "Lenticular",
    glyph: "lenticular",
    summary:
      "A middle ground between spirals and ellipticals: a disk and bulge, but no clear spiral arms and little ongoing star formation.",
    traits: ["A disk without distinct arms", "Mostly older stars", "Common in galaxy clusters"],
    example: "The Spindle Galaxy (NGC 5866), about 44 million light-years away",
  },
  {
    id: "irregular",
    label: "Irregular",
    glyph: "irregular",
    summary:
      "Galaxies with no regular shape, often rich in gas and busy making stars. Many are small and have been distorted by the gravity of a larger neighbour.",
    traits: ["No defined structure", "Often gas-rich", "Frequently bursting with star formation"],
    example: "The Large Magellanic Cloud, about 160,000 light-years away",
  },
  {
    id: "active",
    label: "Active & merging",
    glyph: "active",
    summary:
      "Some galaxy centres shine far brighter than their stars can explain, powered by gas falling onto a supermassive black hole (quasars and Seyferts are examples). Galaxies also collide and merge over billions of years.",
    traits: ["Bright, compact nuclei", "Jets of plasma in some cases", "Collisions that trigger bursts of star formation"],
    example: "The Antennae Galaxies, a pair caught mid-collision",
  },
];

export const BEYOND_GALAXIES = [
  {
    title: "The Local Group",
    text: "More than 80 galaxies within about 10 million light-years, led by the Milky Way and Andromeda.",
  },
  {
    title: "Clusters and superclusters",
    text: "Gravity gathers galaxies into clusters of hundreds or thousands. Our home supercluster, Laniakea, spans roughly 500 million light-years.",
  },
  {
    title: "The cosmic web",
    text: "On the largest scales, galaxies trace long filaments around enormous, nearly empty voids.",
  },
];
