"use client"

import Container from "@/components/Container"
import LandingSection from "@/components/LandingSection"
import ScenceSection from "@/components/ScenceSection"
import TrailerSection from "@/components/TrailerSection"
import StorylineSection from "@/components/StorylineSection"
import FaqSection from "@/components/FaqSection"
import GradientText from "@/components/GradientText"
import MoanaSailBoat from "./characters/components/MoanaSailBoat"
import { motion } from "framer-motion"

export default function Page() {
  // Animation variants for smoother transitions
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const sailBoatVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  }

  const scenes = [
    {
      id: 1,
      title: "Maui's funny movement",
      image: "/assets/moana_home/best-scence.mp4",
      gridArea: "span 1 / span 3 / auto / auto",
    },
    {
      id: 2,
      title: "Dancing movement",
      image: "/assets/moana_home/best-scene-two.mp4",
      gridArea: "span 1 / span 3 / auto / auto",
    },
    {
      id: 3,
      title: "Benison from goddess",
      image: "/assets/moana_home/best-scene-three.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
    {
      id: 4,
      title: "Moana's cuteness movement",
      image: "/assets/moana_home/best-scene-four.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
    {
      id: 5,
      title: "Moana's funny movement",
      image: "/assets/moana_home/best-scene-five.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
  ]

  return (
    <main className={"py-10"}>
      {/* Landing Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <LandingSection />
        </Container>
      </motion.div>

      {/* Moana Sail Boat */}
      <motion.div
        variants={sailBoatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MoanaSailBoat styleName={"w-full mb-10"} />
      </motion.div>

      {/* Scence Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <ScenceSection scenes={scenes} />
        </Container>
      </motion.div>

      {/* Moana Sail Boat */}
      <motion.div
        variants={sailBoatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MoanaSailBoat styleName={"w-full mb-10"} />
      </motion.div>

      {/* Storyline Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <StorylineSection />
        </Container>
      </motion.div>

      {/* Moana Sail Boat */}
      <motion.div
        variants={sailBoatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MoanaSailBoat styleName={"w-full mb-10"} />
      </motion.div>

      {/* Trailer Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <TrailerSection />
      </motion.div>

      {/* Moana Sail Boat */}
      <motion.div
        variants={sailBoatVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MoanaSailBoat styleName={"w-full mb-10"} />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="my-10">
          <Container>
            <GradientText className={"home-header"}>Frequently Asked Questions</GradientText>
            <FaqSection />
          </Container>
        </div>
      </motion.div>
    </main>
  )
}

