"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import GradientText from "@/components/GradientText";
import useEmblaCarousel from "embla-carousel-react";

const LandingSection = () => {
  const characterImages = [
    {
      id: 1,
      src: "/assets/moana_home/Maui.png",
      alt: "Maui",
    },
    {
      id: 2,
      src: "/assets/moana_home/Moana.png",
      alt: "Moana",
    },
    {
      id: 3,
      src: "/assets/moana_home/grandma.png",
      alt: "Grandma",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="">
      <div className="md:py-10 relative">
        {/* Sun Icon */}
        <div className="absolute hidden md:block -top-4 left-10">
          <Image
            src={"/assets/moana_home/sun.png"}
            alt="Sun Icon"
            width={52}
            height={52}
          />
        </div>

        <div className="">
          {/* Starfish */}
          <div className="absolute top-4 hidden md:block md:-top-4 left-80 ">
            <Image
              src={"/assets/moana_home/starfish.png"}
              alt="Starfish Icon"
              width={54}
              height={54}
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row items-start md:justify-between lg:justify-around">
            {/* Movie Info */}
            <div className="w-full lg:w-auto">
              <GradientText className="text-5xl font-bold text-sky-600 mb-6 font-subrayada">
                MOANA
              </GradientText>

              <div className="space-y-4 text-gray-700">
                <div>
                  <span className="font-semibold">Release Date:</span> November
                  23, 2016 (USA)
                </div>
                <div>
                  <span className="font-semibold">Genre:</span> Family/Adventure
                </div>
                <div>
                  <span className="font-semibold">Sequel:</span> Moana 2
                </div>
                <div>
                  <span className="font-semibold">Runtime:</span> 1h 47m
                </div>
                <div>
                  <span className="font-semibold">IMDb Rating:</span> 7.6/10
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    onClick={scrollPrev}
                    className="flex items-center justify-center py-2 px-6 h-[36px] border-2 border-primary rounded-tr-lg rounded-bl-lg  box-border"
                  >
                    Prev
                  </button>
                  <button
                    onClick={scrollNext}
                    className="bg-gradient-to-r from-primary to-secondary-500 text-white flex items-center justify-center py-2 px-6 h-[36px] rounded-tr-lg rounded-bl-lg  box-border"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-auto">
              <div
                className="w-full md:aspect-square aspect-auto h-[350px] lg:w-[400px] lg:h-[400px] relative rounded-full overflow-hidden"
                style={{
                  backgroundImage: `url(${"/assets/moana_home/home-hero-bg.png"})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  className="overflow-hidden absolute inset-0"
                  ref={emblaRef}
                >
                  <div className="flex h-full">
                    {characterImages.map((image) => (
                      <div
                        key={image.id}
                        className="flex-[0_0_100%] min-w-0 relative h-full"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* {shell} */}
            <div>
              <div className="absolute right-20 lg:bottom-20 md:-bottom-10">
                <Image
                  src={"/assets/moana_home/shell.png"}
                  alt="Shell Icon"
                  width={54}
                  height={54}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingSection;
