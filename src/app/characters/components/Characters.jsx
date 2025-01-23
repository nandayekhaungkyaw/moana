'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"
import CharacterButton from "./CharacterButton"
import characterImage from '../../../../public/assets/moana_character/character-bg.png'
import UnderWave from '../../../../public/assets/moana_character/under-wave.png'
import Sun from '../../../../public/assets/moana_character/sun.png'
import { motion, AnimatePresence } from 'framer-motion';

export default function Characters({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  let currentData = data.characterData

  const { name, description, attributes, image } = currentData[currentSlide]

  const PrevCharacter = () => {
    setCurrentSlide((prev) => (prev - 1 + currentData.length) % currentData.length)
  }
  const NextCharacter = () => {
    setCurrentSlide((prev) => (prev + 1) % currentData.length)
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${characterImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="grid grid-cols-1 md:grid-cols-7 gap-4 md:gap-8 min-h-[500px] mb-[40px] md:mb-[80px] px-3 md:px-5 py-5"
    >
      <div className="hidden lg:block lg:col-span-1"></div>
      <AnimatePresence mode="wait">
        <motion.div
          className="col-span-1 md:col-span-2 relative flex justify-center items-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={image.src}
            alt="Character Image"
            width={100}
            height={400}
            className={`object-contain p-4 transform transition-all duration-700 ease-in-out scale-110 ${
              name === "Maui" ? "w-1/2 md:w-3/4" : "w-1/3 md:w-1/2"
            } ${name === "Pua" ? "w-1/2 md:w-3/4" : "w-1/3 md:w-1/2"}`}
          />
          <motion.img
            src={UnderWave.src}
            alt="Under Wave"
            className="p-4 absolute w-1/3 md:w-1/2 lg:top-[70%] top-[60%] md:inline-block hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={Sun.src}
            alt="Sun"
            className="p-4 absolute w-[40px] md:w-[80px] top-0 -left-[0%]"
            initial={{ rotate: currentSlide * 90 }}
            animate={{ rotate: currentSlide * 90 + 360 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          className="col-span-1 md:col-span-4 flex justify-between flex-col gap-4 mx-auto p-2 lg:p-6 space-y-4 md:space-y-6 min-h-[300px] md:min-h-[412px]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full">
            <motion.h1
              key={`${currentSlide}`}
              className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 font-subrayada font-bold tracking-wide"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {name}
            </motion.h1>
            <motion.p
              key={`content-${currentSlide}`}
              className="text-sm md:text-base text-gray-700 leading-relaxed"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {description}
            </motion.p>

            <motion.div
              key={`type-${currentSlide}`}
              className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {attributes.map((attr, index) => (
                <motion.div
                  key={index}
                  className="space-y-1 md:space-y-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-base md:text-xl font-semibold text-gray-900">{attr.label}</h2>
                  <p className="text-sm md:text-base text-gray-700">{attr.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center items-center gap-2 md:gap-4 mt-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CharacterButton process={PrevCharacter} children="Prev" iconLeft={<ArrowLeft className="ml-2 h-3 w-3 md:h-4 md:w-4" />} />
            <CharacterButton process={NextCharacter} children="Next" icon={<ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.main>
  );
}

