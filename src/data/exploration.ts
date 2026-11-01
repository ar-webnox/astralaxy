import type { ImageKey } from "@/lib/images";
import type { Stat } from "./solar-system";

export const MOON_STATS: Stat[] = [
  { label: "Diameter", value: "3,474 km" },
  { label: "Average distance", value: "384,400 km" },
  { label: "Surface gravity", value: "About one sixth of Earth’s" },
  { label: "Surface temperature", value: "≈ −170 °C to 120 °C" },
  { label: "Orbit", value: "27.3 days, locked to one face" },
  { label: "Phase cycle", value: "29.5 days" },
];

export const MOON_POINTS = [
  "The dark patches called maria are ancient basaltic lava plains; the bright highlands are older and heavily cratered.",
  "Permanently shadowed craters near the poles hold water ice, a key target for future missions.",
  "Apollo astronauts returned about 382 kg of rock and soil, still studied today.",
];

export interface Mission {
  name: string;
  date: string;
  note: string;
}

export const APOLLO_MISSIONS: Mission[] = [
  { name: "Apollo 11", date: "July 1969", note: "First crewed landing, in the Sea of Tranquility." },
  { name: "Apollo 12", date: "November 1969", note: "Precision landing near the Surveyor 3 probe." },
  { name: "Apollo 14", date: "February 1971", note: "Landing in the Fra Mauro highlands." },
  { name: "Apollo 15", date: "July 1971", note: "First use of the lunar roving vehicle." },
  { name: "Apollo 16", date: "April 1972", note: "First landing in the lunar highlands." },
  { name: "Apollo 17", date: "December 1972", note: "The last crewed landing, with a geologist aboard." },
];

export interface Observatory {
  id: string;
  name: string;
  image: ImageKey;
  tagline: string;
  text: string;
  facts: string[];
}

export const OBSERVATORIES: Observatory[] = [
  {
    id: "hubble",
    name: "Hubble Space Telescope",
    image: "hubble",
    tagline: "Visible and ultraviolet light, since 1990",
    text: "Orbiting above the blurring effect of Earth’s atmosphere, Hubble has reshaped our understanding of the age of the universe, dark energy and the lives of galaxies.",
    facts: [
      "2.4 m mirror, in orbit about 540 km up",
      "Serviced five times by Space Shuttle astronauts, from 1993 to 2009",
    ],
  },
  {
    id: "jwst",
    name: "James Webb Space Telescope",
    image: "jwst",
    tagline: "Infrared light, since 2022",
    text: "Webb looks in the infrared to see through dust, study the first galaxies and analyse the atmospheres of distant planets. Its science operations began in mid-2022.",
    facts: [
      "6.5 m mirror of 18 gold-coated beryllium segments",
      "Operates about 1.5 million km from Earth, shielded from the Sun by a tennis-court-sized sunshield",
    ],
  },
];

export const OTHER_EYES = [
  "Chandra X-ray Observatory, imaging the hottest and most energetic events",
  "The Very Large Telescope in Chile, four 8.2 m telescopes working singly or together",
  "LIGO and Virgo, detecting gravitational waves from colliding black holes and neutron stars",
  "The Event Horizon Telescope, a network of radio dishes acting as an Earth-sized lens",
];

export interface Explorer {
  id: string;
  title: string;
  image?: ImageKey;
  text: string;
}

export const EXPLORERS: Explorer[] = [
  {
    id: "apollo",
    title: "Walking on the Moon",
    image: "aldrin",
    text: "Between 1969 and 1972, twelve astronauts walked on the Moon in six landings. The photograph shows Apollo 11, humanity’s first visit.",
  },
  {
    id: "eva",
    title: "Working in open space",
    image: "mccandless",
    text: "In 1984 astronaut Bruce McCandless made the first untethered spacewalk using a gas-powered backpack. The International Space Station has been continuously crewed since November 2000.",
  },
  {
    id: "robots",
    title: "Robotic emissaries",
    text: "Voyager 1 left the heliosphere in 2012 and Voyager 2 in 2018. Cassini studied Saturn for 13 years, New Horizons flew past Pluto in 2015 and Perseverance and the Ingenuity helicopter reached Mars in 2021.",
  },
];

export interface Discovery {
  year: string;
  title: string;
  text: string;
}

export const DISCOVERIES: Discovery[] = [
  { year: "1610", title: "Galileo’s moons", text: "Galileo sees four moons orbiting Jupiter, proof that not everything circles the Earth." },
  { year: "1929", title: "An expanding universe", text: "Edwin Hubble shows galaxies are receding, with faster recession at greater distance." },
  { year: "1957", title: "The Space Age begins", text: "Sputnik 1 becomes the first artificial satellite." },
  { year: "1961", title: "First human in space", text: "Yuri Gagarin orbits the Earth on 12 April." },
  { year: "1965", title: "The cosmic afterglow", text: "Penzias and Wilson detect the cosmic microwave background, light from the early universe." },
  { year: "1969", title: "Apollo 11", text: "Neil Armstrong and Buzz Aldrin land on the Moon." },
  { year: "1990", title: "Hubble launches", text: "A telescope above the atmosphere begins a three-decade run of discovery." },
  { year: "1995", title: "A planet around a Sun-like star", text: "Mayor and Queloz find 51 Pegasi b, work recognised by the 2019 Nobel Prize in Physics." },
  { year: "1998", title: "Accelerating expansion", text: "Supernova surveys reveal the expansion of the universe is speeding up, attributed to dark energy." },
  { year: "2015", title: "Gravitational waves", text: "LIGO detects ripples from two merging black holes, first announced in 2016." },
  { year: "2019", title: "A black hole, pictured", text: "The Event Horizon Telescope releases the first image of a black hole’s shadow." },
  { year: "2022", title: "Webb’s first images", text: "The James Webb Space Telescope begins revealing the early universe in infrared." },
];
