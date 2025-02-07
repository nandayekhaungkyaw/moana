"use client";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import AdventureToy from "./components/AdventureToy";
import CalenderSection from "./components/CalenderSection";
import PencilGame from "./components/PencilGame";
import SelfCare from "./components/SelfCare";
import WeeklyPlanner from "./components/WeeklyPlanner";
import slides from "./data/data";
import HeroSection from "@/components/HeroSection";
import productHero from "../../../public/assets/moana_products/product-hero.png";

export default function Page() {
  return (
    <main>
      {/* Hero Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection title="Products" image={productHero} />
      </motion.div>

      <Container className="flex flex-col gap-[80px]">
        {/* Section Wrapper with Staggered Animation */}
        {[
          <AdventureToy slides={slides} />,
          <WeeklyPlanner />,
          <CalenderSection />,
          <PencilGame />,
          <SelfCare />,
        ].map((Component, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {Component}
          </motion.div>
        ))}
      </Container>
    </main>
  );
}
