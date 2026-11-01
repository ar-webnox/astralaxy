import type { ImageKey } from "@/lib/images";
import type { GlyphKind } from "./universe";

export type NebulaKind = "nursery" | "dark" | "planetary" | "remnant";

export const NEBULA_KINDS: { id: NebulaKind; label: string; blurb: string }[] = [
  { id: "nursery", label: "Stellar nurseries", blurb: "Clouds where new stars are forming, lit by the young stars inside them." },
  { id: "dark", label: "Dark nebulae", blurb: "Dense dust clouds that block the light behind them." },
  { id: "planetary", label: "Planetary nebulae", blurb: "Shells of gas thrown off by dying Sun-like stars." },
  { id: "remnant", label: "Supernova remnants", blurb: "The expanding debris from exploded massive stars." },
];

export interface Nebula {
  id: string;
  name: string;
  kind: NebulaKind;
  constellation: string;
  distance: string;
  size: string;
  summary: string;
  glyph: GlyphKind;
  image?: ImageKey;
}

export const NEBULAE: Nebula[] = [
  {
    id: "orion",
    name: "Orion Nebula (M42)",
    kind: "nursery",
    constellation: "Orion",
    distance: "≈ 1,350 ly",
    size: "≈ 24 ly",
    summary: "The nearest massive star-forming region to Earth and visible to the naked eye. Its core, the Trapezium, is a cluster of hot young stars whose radiation makes the surrounding gas glow.",
    glyph: "nebula",
    image: "orion",
  },
  {
    id: "pillars",
    name: "Pillars of Creation",
    kind: "nursery",
    constellation: "Serpens (Eagle Nebula)",
    distance: "≈ 6,500 ly",
    size: "Columns several ly tall",
    summary: "Columns of cool hydrogen and dust, shaped by radiation from nearby massive stars. Stars are forming at the tips of the denser columns while the surrounding gas is slowly worn away.",
    glyph: "dark",
    image: "pillars",
  },
  {
    id: "cosmic-cliffs",
    name: "Cosmic Cliffs",
    kind: "nursery",
    constellation: "Carina (NGC 3324)",
    distance: "≈ 7,600 ly",
    size: "Cliffs ≈ 7 ly high",
    summary: "The edge of a giant cavity carved by the intense radiation and winds of young, hot stars. Webb’s infrared view cuts through dust to reveal stars hidden inside.",
    glyph: "nebula",
    image: "cosmicCliffs",
  },
  {
    id: "horsehead",
    name: "Horsehead Nebula",
    kind: "dark",
    constellation: "Orion",
    distance: "≈ 1,400 ly",
    size: "≈ 3.5 ly",
    summary: "A dense pillar of dust silhouetted against the glowing hydrogen of the larger cloud behind it and one of the most recognisable shapes in astronomy.",
    glyph: "dark",
  },
  {
    id: "ring",
    name: "Ring Nebula (M57)",
    kind: "planetary",
    constellation: "Lyra",
    distance: "≈ 2,300 ly",
    size: "≈ 1 ly",
    summary: "A shell of gas shed by a dying star, seen almost end-on so it appears as a ring. The hot white dwarf left behind lights it from within.",
    glyph: "planetary",
  },
  {
    id: "helix",
    name: "Helix Nebula",
    kind: "planetary",
    constellation: "Aquarius",
    distance: "≈ 650 ly",
    size: "≈ 2.5 ly",
    summary: "One of the closest planetary nebulae to Earth, with thousands of dense knots of gas streaming outward from the central white dwarf.",
    glyph: "planetary",
  },
  {
    id: "crab",
    name: "Crab Nebula (M1)",
    kind: "remnant",
    constellation: "Taurus",
    distance: "≈ 6,500 ly",
    size: "≈ 11 ly",
    summary: "The remnant of a supernova recorded in 1054. A pulsar at its centre spins about 30 times a second and powers the nebula’s blue glow with energetic particles.",
    glyph: "remnant",
    image: "crab",
  },
  {
    id: "cas-a",
    name: "Cassiopeia A",
    kind: "remnant",
    constellation: "Cassiopeia",
    distance: "≈ 11,000 ly",
    size: "≈ 10 ly",
    summary: "The youngest known supernova remnant in our galaxy. Webb’s infrared image reveals a lumpy shell of glowing dust and gas still racing outward.",
    glyph: "remnant",
    image: "casA",
  },
];

export const COLOUR_NOTE =
  "In natural-colour views, red usually marks glowing hydrogen and teal marks oxygen. Many published images, especially infrared ones from Webb, assign visible colours to wavelengths our eyes cannot see, so the colours are representative rather than literal.";
