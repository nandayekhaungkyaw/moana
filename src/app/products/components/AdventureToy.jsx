'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import starFish from '../../../../public/assets/moana_products/starfish.png'
import ProductButton from './ProductButton'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdventureToy({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleClick = (url) => {
    if (url) {
      window.open(url, '_blank')
    } else {
      console.error('No valid URL returned from process function')
    }
  }

  return (
    <div className="bg-white">
      <main className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[40px] items-center">
          {/* Left side - Product Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              className="relative aspect-[3/4] lg:col-span-5 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={slides[currentSlide].image}
                alt="Moana Adventure Doll"
                fill
                className="object-contain pr-4"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Right side - Content */}
          <div className="space-y-6 col-span-1 lg:col-span-7 relative">
            <motion.div
              className="flex flex-row justify-between items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 md:text-5xl font-subrayada text-4xl font-bold tracking-wide">
                MOANA TOYS
              </h1>
              <ProductButton
                icon={<ArrowRight size={20} />}
                filled={true}
                process={() => handleClick('https://www.disneystore.com/')}
                children={'store'}
              />
            </motion.div>

            <motion.img
              src={starFish.src}
              alt="Starfish decoration"
              width={40}
              height={40}
              className="absolute sm:right-[38%] top-[10%] right-[20%] "
              initial={{ rotate: currentSlide * 90 }}
              animate={{ rotate: currentSlide * 90 + 360 }}
              transition={{ duration: 0.5 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-4">
                  <h2 className=" font-leckerli   italic font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400  text-3xl font-script">
                    {slides[currentSlide].title}
                  </h2>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.div
              className="flex items-center justify-between pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-8 h-8 text-[#2B95B6]" />
              </button>

              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-12 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-[#2B95B6]' : 'bg-gray-200'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-8 h-8 text-[#2B95B6]" />
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

