"use client";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import HeroSectionImage from "../../../public/assets/moana_character/HeroSection.png";

import Characters from "./components/Characters";
import HeroSection from "@/components/HeroSection";
import VoiceActor from "./components/VoiceActor";
import { characterData } from "./data/characterData";
import { actors } from "./data/voiceActors";

export default function Page() {
  return (
    <main>
      {/* Hero Section with Fade-In Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <HeroSection title="Characters" image={HeroSectionImage} />
      </motion.div>

      <Container className="gap-[80px] flex-col flex justify-center items-center">
        {/* Voice Actor Section with Slide-Up Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <VoiceActor actors={actors} />
        </motion.div>

        {/* Characters Section with Staggered Fade-In */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <Characters data={{ characterData }} />
        </motion.div>
      </Container>
    </main>
  );
}
