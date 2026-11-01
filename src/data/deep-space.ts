import type { ImageKey } from "@/lib/images";

export interface DetectionMethod {
  id: string;
  label: string;
  text: string;
  example: string;
}

export const DETECTION_METHODS: DetectionMethod[] = [
  { id: "transit", label: "Transit", text: "When a planet crosses in front of its star, the star dims very slightly. Repeating dips reveal the planet’s size and orbit. Kepler and TESS found thousands of planets this way.", example: "TRAPPIST-1, Kepler-90" },
  { id: "rv", label: "Radial velocity", text: "A planet’s gravity makes its star wobble. The star’s light shifts slightly in colour as it moves toward and away from us, revealing the planet’s mass.", example: "51 Pegasi b, Proxima b" },
  { id: "imaging", label: "Direct imaging", text: "Blocking out a star’s glare can reveal young, hot, widely orbiting giant planets that glow in infrared light.", example: "HR 8799 system" },
  { id: "microlensing", label: "Microlensing", text: "A planet’s gravity can briefly magnify the light of a background star. The method is sensitive to cold, distant planets that other techniques miss.", example: "OGLE-2005-BLG-390Lb" },
];

export interface World {
  id: string;
  name: string;
  distance: string;
  kind: string;
  text: string;
  caveat?: string;
  image?: ImageKey;
}

export const WORLDS: World[] = [
  {
    id: "trappist",
    name: "TRAPPIST-1",
    distance: "≈ 40 ly",
    kind: "Seven rocky, Earth-sized planets",
    text: "A system around a small, cool red dwarf, with several planets in or near the habitable zone. Early Webb results suggest the two innermost planets lack thick atmospheres.",
    image: "trappist",
  },
  {
    id: "proxima",
    name: "Proxima b",
    distance: "4.2 ly",
    kind: "Rocky planet, the nearest known",
    text: "Orbits Proxima Centauri every 11.2 days in the habitable zone. Frequent stellar flares make it uncertain whether it could keep an atmosphere.",
  },
  {
    id: "51peg",
    name: "51 Pegasi b",
    distance: "≈ 50 ly",
    kind: "Hot Jupiter",
    text: "The first planet found around a Sun-like star, in 1995. It is a gas giant that circles its star in just over four days.",
  },
  {
    id: "k218b",
    name: "K2-18 b",
    distance: "≈ 120 ly",
    kind: "Sub-Neptune in the habitable zone",
    text: "Webb detected carbon-bearing molecules such as methane and carbon dioxide in its atmosphere.",
    caveat: "Claims of a possible biosignature here are disputed and not confirmed.",
  },
  {
    id: "55cnc-e",
    name: "55 Cancri e",
    distance: "≈ 41 ly",
    kind: "Lava-world super-Earth",
    text: "Orbits its star in under 18 hours, so close that the surface is thought to be partly molten.",
  },
];

export interface LadderRung {
  label: string;
  value: string;
  /** Distance in light-years. */
  ly: number;
}

export const DISTANCE_LADDER: LadderRung[] = [
  { label: "Earth to the Moon", value: "1.3 light-seconds", ly: 4.06e-8 },
  { label: "Earth to the Sun", value: "8.3 light-minutes", ly: 1.58e-5 },
  { label: "Sun to Neptune", value: "≈ 4 light-hours", ly: 4.75e-4 },
  { label: "Sun to Proxima Centauri", value: "4.24 light-years", ly: 4.24 },
  { label: "Width of the Milky Way", value: "≈ 100,000 light-years", ly: 1e5 },
  { label: "Earth to Andromeda", value: "≈ 2.5 million light-years", ly: 2.5e6 },
  { label: "Earth to the Virgo Cluster", value: "≈ 54 million light-years", ly: 5.4e7 },
  { label: "Radius of the observable universe", value: "≈ 46.5 billion light-years", ly: 4.65e10 },
];

export const COMPOSITION = [
  { label: "Dark energy", pct: 68, text: "Drives the accelerating expansion" },
  { label: "Dark matter", pct: 27, text: "Unseen mass that shapes galaxies" },
  { label: "Ordinary matter", pct: 5, text: "Stars, planets, gas and us" },
];

export const LIFE_SEARCH = [
  {
    title: "The habitable zone",
    text: "The range of distances where liquid water could exist on a planet’s surface. It is a useful filter, not a promise of life.",
  },
  {
    title: "Biosignatures",
    text: "Telescopes search atmospheres for gases such as oxygen and methane that, together, are hard to explain without biology.",
  },
  {
    title: "Ocean worlds next door",
    text: "Europa and Enceladus hide liquid-water oceans beneath their ice. NASA’s Europa Clipper launched in October 2024 to study Europa.",
  },
  {
    title: "Technosignatures",
    text: "Radio and optical searches listen for signals from other civilisations. So far, nothing has been confirmed.",
  },
];

export const DEEP_STATS: { value: string; label: string }[] = [
  { value: "13.8 billion", label: "years since the Big Bang" },
  { value: "6,000+", label: "confirmed exoplanets" },
  { value: "≈ 93 billion", label: "light-years across, observable" },
];
