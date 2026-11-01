import type { ImageKey } from "@/lib/images";

export interface LifeStage {
  title: string;
  text: string;
}

export interface LifePath {
  id: string;
  label: string;
  blurb: string;
  stages: LifeStage[];
}

export const LIFE_PATHS: LifePath[] = [
  {
    id: "sunlike",
    label: "Sun-like star",
    blurb: "Stars up to about eight times the Sun’s mass end quietly.",
    stages: [
      { title: "Stellar nursery", text: "A cold, dense cloud of gas and dust begins to collapse under its own gravity." },
      { title: "Protostar", text: "A hot core forms and grows by drawing in material. Fusion has not yet begun." },
      { title: "Main sequence", text: "Hydrogen fusion ignites and balances gravity. The Sun will spend about 10 billion years here and is roughly halfway through." },
      { title: "Red giant", text: "When core hydrogen runs out, the outer layers swell and cool. The Sun will likely engulf Mercury and Venus." },
      { title: "Planetary nebula", text: "The star sheds its outer layers as a glowing shell. The name is historical and has nothing to do with planets." },
      { title: "White dwarf", text: "The exposed core, about Earth-sized, cools over a span far longer than the current age of the universe." },
    ],
  },
  {
    id: "massive",
    label: "Massive star",
    blurb: "Stars above roughly eight Suns live fast and end in explosion.",
    stages: [
      { title: "Stellar nursery", text: "Massive stars form in the densest parts of giant molecular clouds, often in groups." },
      { title: "Main sequence", text: "They burn fuel at a furious rate and exhaust it in just a few million to tens of millions of years." },
      { title: "Red supergiant", text: "The star swells to enormous size. Betelgeuse in Orion is a nearby example." },
      { title: "Core collapse", text: "Fusion eventually produces iron, which cannot release energy. The core collapses in a fraction of a second." },
      { title: "Supernova", text: "A rebounding shock wave blows the star apart, briefly rivalling the light of an entire galaxy." },
      { title: "Remnant", text: "A neutron star or a black hole remains, depending on the core’s mass. The ejected material enriches space with heavier elements." },
    ],
  },
];

export interface Remnant {
  id: string;
  name: string;
  tag: string;
  text: string;
  facts: string[];
  image?: ImageKey;
}

export const REMNANTS: Remnant[] = [
  {
    id: "white-dwarf",
    name: "White dwarf",
    tag: "Ends Sun-like stars",
    text: "The dense, cooling core of a star that has shed its outer layers. It holds about the Sun’s mass in a ball the size of Earth.",
    facts: [
      "A teaspoon of its material would weigh several tonnes.",
      "Sirius B, about 8.6 light-years away, is the best-known example.",
      "Above about 1.4 solar masses, a white dwarf cannot support itself.",
    ],
  },
  {
    id: "neutron-star",
    name: "Neutron star",
    tag: "Core-collapse remnant",
    text: "Between one and two Suns’ worth of mass packed into a sphere about 20 km across, made almost entirely of neutrons.",
    facts: [
      "A teaspoon would weigh billions of tonnes.",
      "Pulsars are spinning neutron stars. The fastest known turns 716 times a second.",
      "Magnetars have the strongest magnetic fields known.",
    ],
  },
  {
    id: "supernova-remnant",
    name: "Supernova remnant",
    tag: "The expanding debris",
    text: "A shell of gas and heavy elements racing outward from an exploded star, glowing for thousands of years as it ploughs into surrounding space.",
    facts: [
      "The Crab Nebula is the remnant of an explosion recorded by astronomers in China in 1054.",
      "Cassiopeia A is the youngest known remnant in the Milky Way, from an explosion roughly 350 years ago as seen from Earth.",
      "Type Ia supernovae, from white dwarfs in binary systems, helped reveal that cosmic expansion is accelerating.",
    ],
    image: "casA",
  },
];

export interface Constellation {
  id: string;
  name: string;
  best: string;
  text: string;
  highlights: string[];
}

export const CONSTELLATIONS: Constellation[] = [
  {
    id: "orion",
    name: "Orion",
    best: "Northern winter, seen from both hemispheres",
    text: "One of the easiest constellations to recognise, with three stars in a line forming the Belt.",
    highlights: [
      "Betelgeuse, a red supergiant marking the shoulder",
      "Rigel, a blue supergiant marking the foot",
      "The Orion Nebula, just below the Belt",
    ],
  },
  {
    id: "ursa-major",
    name: "Ursa Major",
    best: "Northern spring, high in the sky",
    text: "The Great Bear contains the Big Dipper, which is an asterism, a recognisable pattern within a constellation.",
    highlights: [
      "Dubhe and Merak, the “pointer” stars that lead to Polaris",
      "Mizar and Alcor, a famous naked-eye pair",
      "Many distant galaxies, including M101",
    ],
  },
  {
    id: "cassiopeia",
    name: "Cassiopeia",
    best: "Autumn and visible all year from mid-northern latitudes",
    text: "Five bright stars form a distinct W or M shape that circles the North Celestial Pole.",
    highlights: [
      "Lies along a rich stretch of the Milky Way",
      "Home to the supernova remnant Cassiopeia A",
      "Useful for finding Polaris on the opposite side from the Big Dipper",
    ],
  },
  {
    id: "scorpius",
    name: "Scorpius",
    best: "Summer, best from southern latitudes",
    text: "A curved line of stars resembling a scorpion’s body and sting, one of the few constellations that looks like its namesake.",
    highlights: [
      "Antares, a red supergiant whose name means “rival of Mars”",
      "Close to the dense centre of the Milky Way",
      "Many star clusters and nebulae",
    ],
  },
  {
    id: "crux",
    name: "Crux",
    best: "Southern sky, below about 25° N",
    text: "The Southern Cross is the smallest of the 88 recognised constellations and a guide to the south.",
    highlights: [
      "Its long axis points toward the south celestial pole",
      "Appears on several national flags",
      "Next to the dark Coalsack Nebula",
    ],
  },
];

export interface SpectralClass {
  letter: string;
  colour: string;
  temp: string;
  note: string;
}

export const SPECTRAL_CLASSES: SpectralClass[] = [
  { letter: "O", colour: "#9bb0ff", temp: "30,000 K and above", note: "Rare, blue, extremely luminous" },
  { letter: "B", colour: "#aabfff", temp: "10,000–30,000 K", note: "Blue-white, such as Rigel" },
  { letter: "A", colour: "#cad7ff", temp: "7,500–10,000 K", note: "White, such as Sirius" },
  { letter: "F", colour: "#f8f7ff", temp: "6,000–7,500 K", note: "Yellow-white" },
  { letter: "G", colour: "#fff4ea", temp: "5,200–6,000 K", note: "Yellow, such as the Sun" },
  { letter: "K", colour: "#ffd2a1", temp: "3,700–5,200 K", note: "Orange" },
  { letter: "M", colour: "#ffcc6f", temp: "2,400–3,700 K", note: "Red, the most common stars" },
];

/* ------------------------------------------------------------------ */
/* Simplified constellation figures                                    */
/* ------------------------------------------------------------------ */

export interface FigureStar {
  id: string;
  /** Shown as a label when present. */
  name?: string;
  /** Position in a 0–100 square, y pointing down. Layout is stylised. */
  x: number;
  y: number;
  /** Visual size, 1 (faint) to 3 (brilliant). */
  size: 1 | 2 | 3;
}

export interface FigureLine {
  a: string;
  b: string;
  /** A guide line rather than part of the pattern. */
  guide?: boolean;
}

export interface ConstellationFigure {
  stars: FigureStar[];
  lines: FigureLine[];
  note?: string;
}

/**
 * Hand-placed, simplified outlines of the best-known pattern in each
 * constellation. Positions are approximate and distances are not to scale.
 */
export const CONSTELLATION_FIGURES: Record<string, ConstellationFigure> = {
  orion: {
    stars: [
      { id: "meissa", x: 50, y: 7, size: 1 },
      { id: "betelgeuse", name: "Betelgeuse", x: 36, y: 17, size: 3 },
      { id: "bellatrix", name: "Bellatrix", x: 66, y: 19, size: 2 },
      { id: "alnitak", name: "Alnitak", x: 40, y: 50, size: 2 },
      { id: "alnilam", name: "Alnilam", x: 49, y: 48, size: 2 },
      { id: "mintaka", name: "Mintaka", x: 58, y: 46, size: 2 },
      { id: "saiph", name: "Saiph", x: 34, y: 82, size: 2 },
      { id: "rigel", name: "Rigel", x: 68, y: 80, size: 3 },
    ],
    lines: [
      { a: "betelgeuse", b: "meissa" },
      { a: "meissa", b: "bellatrix" },
      { a: "betelgeuse", b: "alnitak" },
      { a: "bellatrix", b: "mintaka" },
      { a: "alnitak", b: "alnilam" },
      { a: "alnilam", b: "mintaka" },
      { a: "alnitak", b: "saiph" },
      { a: "mintaka", b: "rigel" },
    ],
    note: "The three-star Belt sits between the red shoulder and the blue foot.",
  },
  "ursa-major": {
    stars: [
      { id: "dubhe", name: "Dubhe", x: 74, y: 36, size: 2 },
      { id: "merak", name: "Merak", x: 72, y: 60, size: 2 },
      { id: "phecda", x: 46, y: 64, size: 2 },
      { id: "megrez", x: 46, y: 42, size: 1 },
      { id: "alioth", x: 31, y: 36, size: 2 },
      { id: "mizar", name: "Mizar", x: 18, y: 27, size: 2 },
      { id: "alkaid", x: 6, y: 33, size: 2 },
      { id: "polaris", name: "Polaris", x: 77, y: 9, size: 2 },
    ],
    lines: [
      { a: "dubhe", b: "merak" },
      { a: "merak", b: "phecda" },
      { a: "phecda", b: "megrez" },
      { a: "megrez", b: "dubhe" },
      { a: "megrez", b: "alioth" },
      { a: "alioth", b: "mizar" },
      { a: "mizar", b: "alkaid" },
      { a: "dubhe", b: "polaris", guide: true },
    ],
    note: "Follow the pointer stars Merak and Dubhe upward to find Polaris, which is much farther away than the drawing suggests.",
  },
  cassiopeia: {
    stars: [
      { id: "caph", name: "Caph", x: 8, y: 30, size: 2 },
      { id: "schedar", name: "Schedar", x: 28, y: 60, size: 2 },
      { id: "navi", name: "Navi", x: 50, y: 38, size: 2 },
      { id: "ruchbah", name: "Ruchbah", x: 72, y: 62, size: 2 },
      { id: "segin", name: "Segin", x: 92, y: 34, size: 1 },
    ],
    lines: [
      { a: "caph", b: "schedar" },
      { a: "schedar", b: "navi" },
      { a: "navi", b: "ruchbah" },
      { a: "ruchbah", b: "segin" },
    ],
    note: "Five bright stars make a W or an M, depending on the season and the hour.",
  },
  scorpius: {
    stars: [
      { id: "acrab", name: "Acrab", x: 80, y: 8, size: 1 },
      { id: "dschubba", name: "Dschubba", x: 72, y: 19, size: 2 },
      { id: "antares", name: "Antares", x: 62, y: 36, size: 3 },
      { id: "epsilon", x: 52, y: 58, size: 1 },
      { id: "mu", x: 46, y: 68, size: 1 },
      { id: "zeta", x: 38, y: 76, size: 1 },
      { id: "eta", x: 28, y: 80, size: 1 },
      { id: "sargas", name: "Sargas", x: 20, y: 72, size: 2 },
      { id: "iota", x: 14, y: 60, size: 1 },
      { id: "shaula", name: "Shaula", x: 10, y: 48, size: 2 },
      { id: "lesath", x: 15, y: 43, size: 1 },
    ],
    lines: [
      { a: "acrab", b: "dschubba" },
      { a: "dschubba", b: "antares" },
      { a: "antares", b: "epsilon" },
      { a: "epsilon", b: "mu" },
      { a: "mu", b: "zeta" },
      { a: "zeta", b: "eta" },
      { a: "eta", b: "sargas" },
      { a: "sargas", b: "iota" },
      { a: "iota", b: "shaula" },
      { a: "shaula", b: "lesath" },
    ],
    note: "The curved tail ends in a pair of stars that mark the scorpion’s sting.",
  },
  crux: {
    stars: [
      { id: "gacrux", name: "Gacrux", x: 50, y: 10, size: 2 },
      { id: "acrux", name: "Acrux", x: 48, y: 88, size: 3 },
      { id: "mimosa", name: "Mimosa", x: 24, y: 46, size: 3 },
      { id: "delta", name: "Delta Crucis", x: 72, y: 36, size: 1 },
    ],
    lines: [
      { a: "gacrux", b: "acrux" },
      { a: "mimosa", b: "delta" },
    ],
    note: "Extend the long axis of the cross about four and a half times to find the south celestial pole.",
  },
};
