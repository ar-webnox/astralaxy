export const FACT_CATEGORIES = [
  "Solar System",
  "Stars",
  "Galaxies",
  "Black holes",
  "Exploration",
  "Universe",
] as const;

export type FactCategory = (typeof FACT_CATEGORIES)[number];

export interface Fact {
  id: string;
  category: FactCategory;
  text: string;
  detail: string;
}

export const FACTS: Fact[] = [
  { id: "sunlight", category: "Solar System", text: "Sunlight takes about 8 minutes and 20 seconds to reach Earth.", detail: "The Sun is on average 149.6 million km away and light covers about 300,000 km every second." },
  { id: "venus-day", category: "Solar System", text: "A day on Venus is longer than its year.", detail: "Venus takes 243 Earth days to rotate once but only 225 to orbit the Sun." },
  { id: "saturn-float", category: "Solar System", text: "Saturn is less dense than water.", detail: "Its average density is about 0.69 g/cm³, though no bathtub could hold it." },
  { id: "olympus", category: "Solar System", text: "Olympus Mons on Mars is about two and a half times the height of Mount Everest.", detail: "The shield volcano rises roughly 22 km above the surrounding plains." },
  { id: "neptune-year", category: "Solar System", text: "Neptune finished its first orbit since discovery in 2011.", detail: "It was found in 1846 and takes about 165 Earth years to circle the Sun." },
  { id: "blue-sunset", category: "Solar System", text: "Sunsets on Mars look blue.", detail: "Fine dust in the Martian sky scatters blue light toward the Sun’s direction near the horizon." },
  { id: "moon-drift", category: "Solar System", text: "The Moon is drifting away from Earth by about 3.8 cm every year.", detail: "Laser reflectors left by Apollo astronauts are still used to measure the distance." },

  { id: "stardust", category: "Stars", text: "Most elements heavier than hydrogen and helium were made inside stars.", detail: "The carbon in your cells and the oxygen you breathe were forged in earlier generations of stars and spread by their deaths." },
  { id: "neutron-teaspoon", category: "Stars", text: "A teaspoon of neutron-star material would weigh billions of tonnes.", detail: "A neutron star packs more than the Sun’s mass into a sphere about 20 km across." },
  { id: "sun-mass", category: "Stars", text: "The Sun holds about 99.86% of the Solar System’s mass.", detail: "Jupiter makes up most of what remains." },
  { id: "red-dwarfs", category: "Stars", text: "The most common kind of star is a small red dwarf.", detail: "Proxima Centauri, our nearest neighbour, is one, yet it is too dim to see without a telescope." },

  { id: "andromeda-light", category: "Galaxies", text: "The light you see from Andromeda left it about 2.5 million years ago.", detail: "Looking at distant galaxies is looking back in time." },
  { id: "galactic-year", category: "Galaxies", text: "The Sun takes 225 to 250 million years to orbit the Milky Way once.", detail: "The last time the Solar System was in this part of its orbit, dinosaurs were only beginning to appear." },

  { id: "bh-earth", category: "Black holes", text: "To become a black hole, Earth would have to be squeezed to about the size of a marble.", detail: "Its Schwarzschild radius is under 1 cm; for the Sun it is about 3 km." },
  { id: "bh-gravity", category: "Black holes", text: "A black hole pulls on things from afar just like any object of the same mass.", detail: "Replace the Sun with a black hole of equal mass and Earth’s orbit would not change." },

  { id: "voyager", category: "Exploration", text: "Voyager 1 is more than 24 billion kilometres from Earth.", detail: "Launched in 1977, it entered interstellar space in 2012 and its signals take about a day to arrive." },
  { id: "footprints", category: "Exploration", text: "Apollo footprints may last for millions of years.", detail: "The Moon has no wind or rain to erase them. Only slow micrometeoroid impacts wear them away." },

  { id: "observable", category: "Universe", text: "The observable universe is about 93 billion light-years across, though it is only 13.8 billion years old.", detail: "Space itself has expanded while the light was travelling, so the sources have moved much farther away." },
  { id: "ordinary", category: "Universe", text: "Ordinary matter makes up only about 5% of the universe.", detail: "Roughly 27% is dark matter and 68% is dark energy." },
  { id: "light-year", category: "Universe", text: "A light-year is about 9.46 trillion kilometres.", detail: "It is a unit of distance, not time: how far light travels in one year." },
];
