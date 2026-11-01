export type HolePartId = "singularity" | "horizon" | "photon" | "disk" | "jet";

export interface HolePart {
  id: HolePartId;
  label: string;
  title: string;
  text: string;
}

export const HOLE_PARTS: HolePart[] = [
  {
    id: "horizon",
    label: "Event horizon",
    title: "The point of no return",
    text: "The boundary beyond which nothing, not even light, can escape to the outside. For a non-spinning black hole its radius is 2GM/c², which comes to about 3 km for one with the Sun’s mass. Crossing it is not dramatic for a small object falling in, but there is no way back.",
  },
  {
    id: "singularity",
    label: "Singularity",
    title: "Where physics runs out",
    text: "General relativity predicts that the matter inside collapses to a point of infinite density. Most physicists expect that a theory of quantum gravity will replace that picture, but we do not yet have one.",
  },
  {
    id: "photon",
    label: "Photon ring",
    title: "Light bent into a ring",
    text: "Gravity bends light so strongly near a black hole that some of it loops around before reaching us. The result is a thin, bright ring surrounding the dark shadow, which is what the Event Horizon Telescope imaged.",
  },
  {
    id: "disk",
    label: "Accretion disk",
    title: "The glowing disk of infalling gas",
    text: "Gas spiralling inward is compressed and heated by friction and magnetic forces to millions of degrees, shining brightly in X-rays. What we see around a black hole is this disk, not the hole itself.",
  },
  {
    id: "jet",
    label: "Jets",
    title: "Beams at nearly light speed",
    text: "Some black holes launch narrow jets of plasma along their rotation axis, powered by magnetic fields near the hole. The jet from M87’s black hole extends thousands of light-years.",
  },
];

export interface HoleClass {
  id: string;
  name: string;
  mass: string;
  text: string;
  examples: string[];
}

export const HOLE_CLASSES: HoleClass[] = [
  {
    id: "stellar",
    name: "Stellar-mass",
    mass: "A few to tens of Suns",
    text: "Formed when a massive star’s core collapses. Dozens are known in our galaxy, most revealed by X-rays from gas falling in or by their pull on a companion star.",
    examples: ["Cygnus X-1, about 21 solar masses", "Gaia BH1, the nearest known, about 1,560 light-years away"],
  },
  {
    id: "intermediate",
    name: "Intermediate-mass",
    mass: "≈ 100 to 100,000 Suns",
    text: "The hardest class to find and until recently the missing link. Hubble data published in 2024 point to one of several thousand solar masses in the globular cluster Omega Centauri.",
    examples: ["Candidate in Omega Centauri"],
  },
  {
    id: "supermassive",
    name: "Supermassive",
    mass: "Millions to billions of Suns",
    text: "Found at the centres of most large galaxies. How they grew so large so quickly is an active research question and Webb is finding surprisingly massive ones very early in cosmic history.",
    examples: ["Sagittarius A*, about 4 million solar masses", "M87*, about 6.5 billion solar masses"],
  },
];

export const HOLE_EVIDENCE = [
  {
    title: "Shadows",
    text: "The Event Horizon Telescope linked radio dishes across Earth to image the shadow of M87* in 2019 and of Sagittarius A* in 2022.",
  },
  {
    title: "Gravitational waves",
    text: "In 2015 LIGO detected ripples in spacetime from two black holes merging, the first direct detection of gravitational waves.",
  },
  {
    title: "Orbiting stars",
    text: "Decades of tracking stars racing around the centre of the Milky Way revealed a hidden mass of about 4 million Suns, work recognised by the 2020 Nobel Prize in Physics.",
  },
];

export const HOLE_MYTH = {
  title: "Not cosmic vacuum cleaners",
  text: "From far away, a black hole pulls on things just like any other object of the same mass. If the Sun were swapped for a black hole of equal mass, Earth would keep orbiting as before, only in the dark.",
};
