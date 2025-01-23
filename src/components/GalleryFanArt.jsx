"use client";
import React from "react";
import GradientText from "@/components/GradientText";

import fanArt1 from "../../public/assets/moana_gallery/fan_art/fanart-1.png";
import fanArt2 from "../../public/assets/moana_gallery/fan_art/fanart-2.png";
import fanArt3 from "../../public/assets/moana_gallery/fan_art/fanart-3.png";
import fanArt4 from "../../public/assets/moana_gallery/fan_art/fanart-4.png";
import fanArt5 from "../../public/assets/moana_gallery/fan_art/fanart-5.png";
import fanArt6 from "../../public/assets/moana_gallery/fan_art/fanart-6.png";
import fanArt7 from "../../public/assets/moana_gallery/fan_art/fanart-7.png";
import Image from "next/image";
import SliderComponent from "@/components/SliderComponent";
import { useEffect, useState } from "react";

const GalleryFanArt = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const fanArts = [
    fanArt1,
    fanArt2,
    fanArt3,
    fanArt4,
    fanArt5,
    fanArt6,
    fanArt7,
  ];
  return (
    <section className="my-5 lg:my-section-spacing">
      <GradientText
        className={
          "font-subrayada text-2xl md:text-3xl lg:text-5xl mb-3 lg:mb-section-spacing"
        }
      >
        Fan Art Gallery
      </GradientText>
      <SliderComponent
        leftRightControls={isMobileOrTablet ? false : true}
        bottomControls={false}
        dots={true}
        slideCount={isMobileOrTablet ? 1 : 3}
        scrollCount={isMobileOrTablet ? 1 : 2}
        className={"border md:border-none border-primary"}
      >
        {fanArts.map((fanArt, index) => (
          <div key={index} className="p-5">
            <Image
              src={fanArt}
              width="431px"
              height="333px"
              alt="Fan Art"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </SliderComponent>
    </section>
  );
};

export default GalleryFanArt;
