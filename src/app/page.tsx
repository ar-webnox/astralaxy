import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BlackHoles } from "@/components/sections/BlackHoles";
import { CosmicFacts } from "@/components/sections/CosmicFacts";
import { DeepSpace } from "@/components/sections/DeepSpace";
import { Exploration } from "@/components/sections/Exploration";
import { FinalCta } from "@/components/sections/FinalCta";
import { Galaxies } from "@/components/sections/Galaxies";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Nebulae } from "@/components/sections/Nebulae";
import { SolarSystem } from "@/components/sections/SolarSystem";
import { Stars } from "@/components/sections/Stars";
import { UniverseOverview } from "@/components/sections/UniverseOverview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <UniverseOverview />
        <SolarSystem />
        <Galaxies />
        <Stars />
        <BlackHoles />
        <Nebulae />
        <Exploration />
        <DeepSpace />
        <CosmicFacts />
        <Gallery />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
