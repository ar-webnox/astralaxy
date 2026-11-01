import type { ImageKey } from "@/lib/images";

export type GlyphKind =
  | "spiral"
  | "barred"
  | "elliptical"
  | "lenticular"
  | "irregular"
  | "active"
  | "star"
  | "nebula"
  | "planetary"
  | "dark"
  | "remnant"
  | "blackhole"
  | "cluster"
  | "planet"
  | "image";

export type ObjectKind = "Galaxy" | "Nebula" | "Star" | "Black hole" | "Cluster";

export interface UniverseObject {
  id: string;
  name: string;
  kind: ObjectKind;
  distance: string;
  summary: string;
  glyph: GlyphKind;
  image?: ImageKey;
}

export const OBJECT_KINDS: readonly ObjectKind[] = [
  "Galaxy",
  "Nebula",
  "Star",
  "Black hole",
  "Cluster",
];

export const UNIVERSE_OBJECTS: UniverseObject[] = [
  { id: "milky-way", name: "Milky Way", kind: "Galaxy", distance: "Home", glyph: "barred", image: "milkyWay", summary: "Our barred spiral galaxy, home to the Sun and a few hundred billion other stars." },
  { id: "andromeda", name: "Andromeda (M31)", kind: "Galaxy", distance: "≈ 2.5 million ly", glyph: "spiral", image: "andromeda", summary: "The nearest large galaxy and the most distant thing most people can see without a telescope." },
  { id: "triangulum", name: "Triangulum (M33)", kind: "Galaxy", distance: "≈ 2.7 million ly", glyph: "spiral", summary: "The third-largest member of our Local Group, a smaller spiral with active star formation." },
  { id: "lmc", name: "Large Magellanic Cloud", kind: "Galaxy", distance: "≈ 160,000 ly", glyph: "irregular", summary: "An irregular satellite of the Milky Way, visible to the naked eye from the Southern Hemisphere." },
  { id: "m101", name: "Pinwheel Galaxy (M101)", kind: "Galaxy", distance: "≈ 21 million ly", glyph: "spiral", image: "pinwheel", summary: "A face-on spiral roughly 170,000 light-years across, wider than the Milky Way." },
  { id: "m104", name: "Sombrero Galaxy (M104)", kind: "Galaxy", distance: "≈ 31 million ly", glyph: "lenticular", summary: "A bright galaxy with a prominent central bulge and a dark dust lane seen almost edge-on." },
  { id: "m87", name: "Messier 87", kind: "Galaxy", distance: "≈ 55 million ly", glyph: "elliptical", image: "m87Jet", summary: "A giant elliptical galaxy with a jet of plasma and thousands of globular clusters." },

  { id: "orion-nebula", name: "Orion Nebula (M42)", kind: "Nebula", distance: "≈ 1,350 ly", glyph: "nebula", image: "orion", summary: "The closest massive stellar nursery, visible to the naked eye below Orion’s Belt." },
  { id: "pillars", name: "Pillars of Creation", kind: "Nebula", distance: "≈ 6,500 ly", glyph: "dark", image: "pillars", summary: "Towering columns of gas and dust in the Eagle Nebula where new stars are forming." },
  { id: "cosmic-cliffs", name: "Cosmic Cliffs", kind: "Nebula", distance: "≈ 7,600 ly", glyph: "nebula", image: "cosmicCliffs", summary: "The edge of a young star-forming region in Carina, imaged by the James Webb Space Telescope." },
  { id: "crab", name: "Crab Nebula (M1)", kind: "Nebula", distance: "≈ 6,500 ly", glyph: "remnant", image: "crab", summary: "The remains of a star that exploded in 1054, with a pulsar still spinning at its heart." },
  { id: "ring", name: "Ring Nebula (M57)", kind: "Nebula", distance: "≈ 2,300 ly", glyph: "planetary", summary: "A shell of gas shed by a dying Sun-like star, seen face-on as a glowing ring." },
  { id: "horsehead", name: "Horsehead Nebula", kind: "Nebula", distance: "≈ 1,400 ly", glyph: "dark", summary: "A dark cloud of dust silhouetted against glowing gas in Orion." },

  { id: "sun", name: "The Sun", kind: "Star", distance: "8.3 light-minutes", glyph: "star", image: "sun", summary: "Our own star, a middle-aged yellow dwarf about halfway through its life." },
  { id: "proxima", name: "Proxima Centauri", kind: "Star", distance: "4.24 ly", glyph: "star", summary: "The nearest known star, a small, dim red dwarf with at least one known planet." },
  { id: "sirius", name: "Sirius", kind: "Star", distance: "≈ 8.6 ly", glyph: "star", summary: "The brightest star in the night sky, orbited by a white dwarf companion." },
  { id: "betelgeuse", name: "Betelgeuse", kind: "Star", distance: "≈ 550–700 ly", glyph: "star", summary: "A red supergiant in Orion, large enough to fill the orbit of Mars if placed where the Sun is." },
  { id: "rigel", name: "Rigel", kind: "Star", distance: "≈ 860 ly", glyph: "star", summary: "A blue supergiant in Orion, tens of thousands of times more luminous than the Sun." },
  { id: "polaris", name: "Polaris", kind: "Star", distance: "≈ 430 ly", glyph: "star", summary: "The North Star, sitting almost directly above Earth’s rotation axis." },

  { id: "sgr-a", name: "Sagittarius A*", kind: "Black hole", distance: "≈ 26,000 ly", glyph: "blackhole", summary: "The supermassive black hole at the centre of the Milky Way, about 4 million times the Sun’s mass." },
  { id: "m87-star", name: "M87*", kind: "Black hole", distance: "≈ 55 million ly", glyph: "blackhole", image: "m87Shadow", summary: "The first black hole ever imaged, about 6.5 billion times the Sun’s mass." },
  { id: "cygnus-x1", name: "Cygnus X-1", kind: "Black hole", distance: "≈ 7,200 ly", glyph: "blackhole", summary: "One of the first strong black-hole candidates, pulling gas from a blue supergiant companion." },
  { id: "gaia-bh1", name: "Gaia BH1", kind: "Black hole", distance: "≈ 1,560 ly", glyph: "blackhole", summary: "The nearest black hole known, found by the way it tugs on a Sun-like companion star." },

  { id: "pleiades", name: "Pleiades (M45)", kind: "Cluster", distance: "≈ 440 ly", glyph: "cluster", summary: "A young open cluster of hot blue stars, easy to spot as a tiny smudge in the winter sky." },
  { id: "omega-cen", name: "Omega Centauri", kind: "Cluster", distance: "≈ 17,000 ly", glyph: "cluster", summary: "The largest globular cluster in the Milky Way, holding millions of ancient stars." },
  { id: "virgo", name: "Virgo Cluster", kind: "Cluster", distance: "≈ 54 million ly", glyph: "cluster", summary: "A rich cluster of well over a thousand galaxies, with M87 near its centre." },
];

export interface CosmicAddress {
  id: string;
  label: string;
  scale: string;
  scaleNote: string;
  text: string;
}

export const COSMIC_ADDRESS: CosmicAddress[] = [
  { id: "earth", label: "Earth", scale: "12,742 km", scaleNote: "diameter", text: "Our planet, third from the Sun. Everything humans have ever lived through has happened on or near this one small world." },
  { id: "solar", label: "Solar System", scale: "≈ 120 AU", scaleNote: "to the edge of the Sun’s bubble", text: "The Sun, eight planets, hundreds of moons and countless small bodies. Voyager 1 crossed the edge of the heliosphere, where the solar wind gives way to interstellar space, in 2012." },
  { id: "bubble", label: "Local Bubble", scale: "≈ 1,000 ly", scaleNote: "across", text: "The Sun sits inside a cavity in the interstellar gas, carved out by past supernovae. The nearest star, Proxima Centauri, is 4.24 light-years away." },
  { id: "milky-way", label: "Milky Way", scale: "≈ 100,000 ly", scaleNote: "across", text: "A barred spiral galaxy of a few hundred billion stars. The Sun lies about 26,000 light-years from the centre and circles it once every 225–250 million years." },
  { id: "local-group", label: "Local Group", scale: "≈ 10 million ly", scaleNote: "across", text: "More than 80 galaxies bound together by gravity, dominated by the Milky Way and Andromeda, with Triangulum and many dwarf galaxies." },
  { id: "laniakea", label: "Laniakea", scale: "≈ 500 million ly", scaleNote: "across", text: "Our home supercluster of roughly 100,000 galaxies, named from the Hawaiian for “immense heaven”." },
  { id: "observable", label: "Observable universe", scale: "≈ 93 billion ly", scaleNote: "in diameter", text: "Everything whose light has had time to reach us since the Big Bang about 13.8 billion years ago. It holds hundreds of billions of galaxies and the universe beyond it is likely far larger." },
];
