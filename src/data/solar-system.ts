import type { ImageKey } from "@/lib/images";

export interface Stat {
  label: string;
  value: string;
}

export interface Moon {
  name: string;
  note: string;
}

export interface Body {
  id: string;
  name: string;
  type: string;
  /** Distance from the Sun in astronomical units (0 for the Sun). */
  au: number;
  swatch: string;
  tagline: string;
  summary: string;
  image: ImageKey;
  stats: Stat[];
  moons: Moon[];
  moonsNote?: string;
  facts: string[];
}

export const BODIES: Body[] = [
  {
    id: "sun",
    name: "The Sun",
    type: "G-type main-sequence star",
    au: 0,
    swatch: "#f2c36f",
    tagline: "The star that holds the Solar System together.",
    summary:
      "The Sun holds about 99.86% of the Solar System’s mass. In its core, hydrogen fuses into helium at roughly 15 million °C, releasing the energy that eventually leaves its surface as sunlight.",
    image: "sun",
    stats: [
      { label: "Diameter", value: "1.39 million km (109 × Earth)" },
      { label: "Surface temperature", value: "≈ 5,500 °C" },
      { label: "Age", value: "≈ 4.6 billion years" },
      { label: "Light to Earth", value: "≈ 8 min 20 s" },
    ],
    moons: [],
    facts: [
      "Energy made in the core spends many thousands of years working outward before it escapes as sunlight.",
      "The corona, the Sun’s outer atmosphere, is far hotter than its surface, at over a million degrees.",
      "About 1.3 million Earths could fit inside the Sun by volume.",
    ],
  },
  {
    id: "mercury",
    name: "Mercury",
    type: "Terrestrial planet",
    au: 0.39,
    swatch: "#9d978f",
    tagline: "Smallest planet, closest to the Sun.",
    summary:
      "A heavily cratered, airless world with an oversized iron core. With no atmosphere to hold heat, its surface swings from about −180 °C at night to roughly 430 °C by day.",
    image: "mercury",
    stats: [
      { label: "Diameter", value: "4,879 km" },
      { label: "Distance from Sun", value: "0.39 AU (58 million km)" },
      { label: "Year", value: "88 Earth days" },
      { label: "Rotation", value: "58.6 Earth days" },
      { label: "Moons", value: "None" },
      { label: "Rings", value: "None" },
    ],
    moons: [],
    facts: [
      "One sunrise to the next takes about 176 Earth days, twice as long as its 88-day year.",
      "Water ice has been detected in permanently shadowed craters near its poles.",
      "Mercury is slowly shrinking as its iron core cools, wrinkling the crust into long cliffs.",
    ],
  },
  {
    id: "venus",
    name: "Venus",
    type: "Terrestrial planet",
    au: 0.72,
    swatch: "#dcc48f",
    tagline: "A runaway greenhouse world.",
    summary:
      "Almost Earth’s twin in size, but its thick carbon-dioxide atmosphere traps heat so well that the surface sits near 465 °C, under about 90 times Earth’s air pressure.",
    image: "venus",
    stats: [
      { label: "Diameter", value: "12,104 km" },
      { label: "Distance from Sun", value: "0.72 AU (108 million km)" },
      { label: "Year", value: "225 Earth days" },
      { label: "Rotation", value: "243 Earth days (retrograde)" },
      { label: "Moons", value: "None" },
      { label: "Rings", value: "None" },
    ],
    moons: [],
    facts: [
      "Venus spins backwards, so the Sun would rise in the west.",
      "A day on Venus is longer than its year.",
      "It is the hottest planet, even though Mercury is closer to the Sun.",
    ],
  },
  {
    id: "earth",
    name: "Earth",
    type: "Terrestrial planet",
    au: 1,
    swatch: "#5382c9",
    tagline: "The only world known to host life.",
    summary:
      "About 71% of the surface is liquid water. A magnetic field and a nitrogen-oxygen atmosphere shield the surface and plate tectonics slowly recycles the crust.",
    image: "earth",
    stats: [
      { label: "Diameter", value: "12,742 km" },
      { label: "Distance from Sun", value: "1 AU (149.6 million km)" },
      { label: "Year", value: "365.25 days" },
      { label: "Rotation", value: "23 h 56 min" },
      { label: "Moons", value: "1" },
      { label: "Rings", value: "None" },
    ],
    moons: [
      {
        name: "The Moon",
        note: "Thought to have formed from debris after a Mars-sized body struck the young Earth.",
      },
    ],
    facts: [
      "Earth is the densest planet in the Solar System.",
      "The Moon is moving away from Earth by about 3.8 centimetres a year.",
      "The Apollo 17 crew took this photograph in 1972, on the way to the Moon.",
    ],
  },
  {
    id: "mars",
    name: "Mars",
    type: "Terrestrial planet",
    au: 1.52,
    swatch: "#b65c3c",
    tagline: "A cold desert with ancient riverbeds.",
    summary:
      "Iron-rich dust gives Mars its rusty colour. Dry river valleys and mineral deposits show that liquid water once shaped the surface and robotic explorers are now examining rocks for signs of ancient life.",
    image: "mars",
    stats: [
      { label: "Diameter", value: "6,779 km" },
      { label: "Distance from Sun", value: "1.52 AU (228 million km)" },
      { label: "Year", value: "687 Earth days" },
      { label: "Rotation", value: "24 h 37 min" },
      { label: "Moons", value: "2" },
      { label: "Rings", value: "None" },
    ],
    moons: [
      { name: "Phobos", note: "Orbits closer to its planet than any other moon and is slowly spiralling inward." },
      { name: "Deimos", note: "A small, distant moon only about 12 km across." },
    ],
    facts: [
      "Olympus Mons, a volcano roughly 22 km high, is about two and a half times the height of Everest.",
      "The Valles Marineris canyon system stretches roughly 4,000 km.",
      "Martian sunsets appear blue, because fine dust scatters light differently than Earth’s air does.",
    ],
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Gas giant",
    au: 5.2,
    swatch: "#c9a47c",
    tagline: "The Solar System’s giant.",
    summary:
      "A gas giant about two and a half times as massive as all the other planets combined, banded by cloud and driven by powerful jet streams. The Great Red Spot is a storm wider than Earth that has been observed for well over a century.",
    image: "jupiter",
    stats: [
      { label: "Diameter", value: "139,820 km" },
      { label: "Distance from Sun", value: "5.2 AU (778 million km)" },
      { label: "Year", value: "11.9 Earth years" },
      { label: "Rotation", value: "9 h 56 min" },
      { label: "Moons", value: "More than 90 known" },
      { label: "Rings", value: "Faint and dusty" },
    ],
    moons: [
      { name: "Io", note: "The most volcanically active body known." },
      { name: "Europa", note: "An icy shell over a global salty ocean." },
      { name: "Ganymede", note: "The largest moon in the Solar System, bigger than Mercury." },
      { name: "Callisto", note: "An ancient, heavily cratered surface." },
    ],
    facts: [
      "Jupiter has the shortest day of any planet, under ten hours.",
      "It radiates more heat than it receives from the Sun.",
      "NASA’s Juno spacecraft reached Jupiter in 2016 and has mapped its gravity, magnetic field and storms.",
    ],
  },
  {
    id: "saturn",
    name: "Saturn",
    type: "Gas giant",
    au: 9.58,
    swatch: "#d8c392",
    tagline: "Rings of ice and rock.",
    summary:
      "The second-largest planet is so light for its size that it would float in water. Its rings are mostly water ice and span about 280,000 km, yet are only around 10 metres thick in places.",
    image: "saturn",
    stats: [
      { label: "Diameter", value: "116,460 km" },
      { label: "Distance from Sun", value: "9.58 AU (1.43 billion km)" },
      { label: "Year", value: "29.4 Earth years" },
      { label: "Rotation", value: "≈ 10 h 33 min" },
      { label: "Moons", value: "More than 140 known" },
      { label: "Rings", value: "Seven main groups, mostly water ice" },
    ],
    moons: [
      { name: "Titan", note: "The only moon with a dense atmosphere, with lakes and seas of liquid methane." },
      { name: "Enceladus", note: "Jets of water vapour and ice erupt from a subsurface ocean." },
      { name: "Iapetus", note: "Strikingly two-toned, with one dark and one bright hemisphere." },
    ],
    facts: [
      "Titan’s surface air pressure is about one and a half times Earth’s.",
      "Saturn’s average density is lower than water’s.",
      "Cassini orbited Saturn from 2004 until its planned plunge into the atmosphere in 2017.",
    ],
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Ice giant",
    au: 19.2,
    swatch: "#93d1d6",
    tagline: "The planet that rolls on its side.",
    summary:
      "Tilted about 98°, Uranus circles the Sun almost on its side, so each pole gets roughly 42 years of sunlight followed by 42 years of darkness. Methane in its atmosphere gives it a blue-green tint.",
    image: "uranus",
    stats: [
      { label: "Diameter", value: "50,724 km" },
      { label: "Distance from Sun", value: "19.2 AU (2.87 billion km)" },
      { label: "Year", value: "84 Earth years" },
      { label: "Rotation", value: "17 h 14 min (retrograde)" },
      { label: "Moons", value: "Over 25 known" },
      { label: "Rings", value: "13 known, narrow and dark" },
    ],
    moons: [
      { name: "Titania", note: "The largest of its moons." },
      { name: "Miranda", note: "A patchwork surface with towering cliffs." },
      { name: "Ariel", note: "Marked by long canyons and bright terrain." },
    ],
    facts: [
      "Uranus was the first planet found with a telescope, by William Herschel in 1781.",
      "Its moons are named after characters in works by Shakespeare and Alexander Pope.",
      "Voyager 2 is the only spacecraft to have visited, in 1986.",
    ],
  },
  {
    id: "neptune",
    name: "Neptune",
    type: "Ice giant",
    au: 30.1,
    swatch: "#4f72d2",
    tagline: "Windswept and far away.",
    summary:
      "The most distant planet has the fastest winds measured in the Solar System, reaching roughly 2,000 km/h. It was located by mathematical prediction before anyone had seen it.",
    image: "neptune",
    stats: [
      { label: "Diameter", value: "49,244 km" },
      { label: "Distance from Sun", value: "30.1 AU (4.5 billion km)" },
      { label: "Year", value: "165 Earth years" },
      { label: "Rotation", value: "16 h 6 min" },
      { label: "Moons", value: "About 16 known" },
      { label: "Rings", value: "5 main rings, faint" },
    ],
    moons: [
      { name: "Triton", note: "Orbits backwards, probably a captured Kuiper Belt object, with nitrogen geysers seen by Voyager 2." },
      { name: "Nereid", note: "Follows one of the most elongated orbits of any moon." },
    ],
    facts: [
      "Neptune completed its first orbit since its discovery in 1846 during 2011.",
      "Voyager 2’s 1989 flyby remains the only visit.",
      "Neptune and Uranus are closer in true colour than older images suggested.",
    ],
  },
];
