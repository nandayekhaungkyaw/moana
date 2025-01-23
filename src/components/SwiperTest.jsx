"use client";
import React from "react";
import GradientText from "../components/GradientText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import navigation styles (if needed)
import { Navigation, Pagination } from "swiper/modules"; // Import required Swiper modules

import fanArt1 from "../../assets/moana_gallery/fan_art/fanart-1.png";
import fanArt2 from "../../assets/moana_gallery/fan_art/fanart-2.png";
import fanArt3 from "../../assets/moana_gallery/fan_art/fanart-3.png";
import fanArt4 from "../../assets/moana_gallery/fan_art/fanart-4.png";
import fanArt5 from "../../assets/moana_gallery/fan_art/fanart-5.png";
import fanArt6 from "../../assets/moana_gallery/fan_art/fanart-6.png";
import fanArt7 from "../../assets/moana_gallery/fan_art/fanart-7.png";
import Image from "next/image";

const GalleryFanArt = () => {
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
    <section>
      <GradientText className={"font-subrayada text-5xl mb-section-spacing"}>
        Fan Art Gallery
      </GradientText>
      {/* <Swiper
        navigation={true}
        pagination={{
          style: "fractions",
        }}
        modules={[Navigation, Pagination]}
        slidesPerView="3"
        spaceBetween={30}
        breakpoints={{
          640: {
            // Tailwind's sm breakpoint
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            // Tailwind's md breakpoint
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            // Tailwind's lg breakpoint
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper flex justify-center items-center w-full h-full"
      >
        {fanArts.map((fanArt, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center text-center border"
          >
            <Image
              src={fanArt}
              alt={`Fan art ${index + 1}`}
              className="object-contain sm:w-[300px] sm:h-[250px] md:w-[400px] md:h-[3000px] lg:w-[500px] lg:h-[300px] xl:w-[600px] xl:h-[250px]"
            />
          </SwiperSlide>
        ))}
      </Swiper> */}

      
    </section>
  );
};

export default GalleryFanArt;
