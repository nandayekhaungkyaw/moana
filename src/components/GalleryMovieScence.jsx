import React from "react";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import movImg1 from "../../public/assets/moana_gallery/image.png";
import movImg2 from "../../public/assets/moana_gallery/image-1.png";
import movImg3 from "../../public/assets/moana_gallery/image-2.png";
import movImg4 from "../../public/assets/moana_gallery/image-3.png";
import movImg5 from "../../public/assets/moana_gallery/image-4.png";
import movImg6 from "../../public/assets/moana_gallery/image-5.png";
import movImg7 from "../../public/assets/moana_gallery/image-6.png";
import movImg8 from "../../public/assets/moana_gallery/image-7.png";
import movImg9 from "../../public/assets/moana_gallery/image-8.png";

const GalleryMovieScence = () => {
  return (
    <section className="my-5 lg:my-section-spacing">
      <GradientText className={"font-subrayada text-2xl md:text-3xl lg:text-5xl mb-3 lg:mb-section-spacing"}>
        Movie Scence
      </GradientText>
      <section className=" flex flex-col gap-3">
        <div className="grid grid-cols-4 grid-rows-4 md:grid-cols-8 md:grid-rows-2 lg:grid-cols-12 lg:grid-rows-2 gap-3">
          <div className="row-span-2 col-span-4 md:row-span-2 md:col-span-4 lg:col-span-6">
            <Image src={movImg1} width="630px" height="571px" alt="movie scence 1" className=" h-full"/>
          </div>
          <div className="row-span-2 col-span-2 md:row-span-2 md:col-span-2 lg:col-span-3">
            <Image src={movImg2} width="305px" height="571px" alt="movie scence 2" className=" h-full"/>
          </div>
          <div className="row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:col-span-3">
            <Image src={movImg3} width="305px" height="276px" alt="movie scence 3" className=" h-full"/>
          </div>
          <div className="row-span-1 col-span-2 md:row-span-1 md:col-span-2 lg:col-span-3">
            <Image src={movImg4} width="350px" height="275px" alt="movie scence 4" className=" h-full"/>
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-5 md:grid-cols-8 md:grid-rows-3 lg:grid-cols-12 lg:grid-rows-2 gap-3">
          <div className="row-span-2 col-span-2 md:row-span-2 md:col-span-4 lg:col-span-3">
            <Image
              src={movImg5}
              width="305px"
              height="571px"
              alt="movie scence 5"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="row-span-2 col-span-4 md:row-span-1 md:col-span-4 lg:row-span-1 lg:col-span-3">
            <Image
              src={movImg6}
              width="305px"
              height="276px"
              alt="movie scence 6"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="row-span-1 col-span-4 md:row-span-1 md:col-span-8 lg:col-span-6">
            <Image
              src={movImg7}
              width="633px"
              height="276px"
              alt="movie scence 7"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="row-span-1 col-span-4 md:row-span-1 md:col-span-8 lg:col-span-6">
            <Image
              src={movImg8}
              width="633px"
              height="276px"
              alt="movie scence 8"
              className=" h-full w-full object-cover"
            />
          </div>
          <div className="row-span-2 col-span-2 md:row-span-1 md:col-span-4 lg:row-span-1 lg:col-span-3 row-start-1 md:row-start-2 md:col-start-5 lg:row-start-2 lg:col-start-10">
            <Image
              src={movImg9}
              width="299px"
              height="276px"
              alt="movie scence 9"
              className=" h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default GalleryMovieScence;
