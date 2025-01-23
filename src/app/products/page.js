

import Container from "@/components/Container";
import AdventureToy from "./components/AdventureToy";
import CalenderSection from "./components/CalenderSection";
import PencilGame from "./components/PencilGame";
import SelfCare from "./components/SelfCare";
import WeeklyPlanner from "./components/WeeklyPlanner";
import slides from "./data/data";
import HeroSection from "@/components/HeroSection";
import productHero from "../../../public/assets/moana_products/product-hero.png"

export default function Page() {

  return <main>
    <HeroSection title="Products" image={productHero}/>
    <Container className={`flex flex-col gap-[80px]`}>
    
    <AdventureToy slides={slides}/>
    <WeeklyPlanner/>
    <CalenderSection/>
    <PencilGame/>
    <SelfCare/>
    </Container>
  </main>
}