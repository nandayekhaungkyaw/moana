"use client";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import {
  MoveLeftIcon,
  MoveRightIcon,
  SquareChevronLeft,
  SquareChevronRight,
} from "lucide-react";

const Slider = dynamic(() => import("react-slick") , {ssr : false})


const SliderComponent = ({
  children,
  infinite = true,
  bottomControls = false,
  leftRightControls = true,
  slideCount = 3,
  scrollCount = 2,
  dots = false,
  className,
}) => {
  let refSlider = useRef(null);

  const next = () => {
    refSlider.slickNext();
  };
  const previous = () => {
    refSlider.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: infinite,
    slidesToShow: slideCount,
    slidesToScroll: scrollCount,
    nextArrow: leftRightControls ? <SampleNextArrow /> : null,
    prevArrow: leftRightControls ? <SamplePrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: infinite,
          dots: dots,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { onClick, className: ClassName } = props;

    return (
      <button
        className={` group disabled:opacity-90 -translate-y-1/2 md:right-2  right-1  z-10 top-1/2   absolute  `}
        onClick={onClick}
        disabled={ClassName.includes("slick-disabled")}
      >
        <SquareChevronRight
          size={36}
          className="fill-primary-300  hover:fill-gray-500 hover:text-primary-400 group-disabled:fill-slate-500 group-disabled:text-slate-900 active:scale-90   text-gray-600 rounded "
        />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className: ClassName, onClick } = props;

    return (
      <button
        disabled={ClassName.includes("slick-disabled")}
        className={`z-10 top-1/2  md:left-2 left-1 -translate-y-1/2   absolute group disabled:opacity-90 `}
        onClick={onClick}
      >
        <SquareChevronLeft
          size={36}
          className=" fill-primary-300  hover:fill-gray-500 hover:text-primary-400 group-disabled:fill-slate-500 group-disabled:text-slate-900 active:scale-90 text-gray-600 rounded "
        />
      </button>
    );
  }

  return (
    <div className=" slider-container   w-full ">
      <Slider
        ref={(slider) => {
          refSlider = slider;
        }}
        {...settings}
        className={`relative overflow-hidden ${className}`}
      >
        {children}
      </Slider>
      {bottomControls && (
        <div className=" flex gap-5  items-center justify-center mt-3 sm:mt-5 lg:mt-10 md:mt-6">
          <button
            className="button hover:bg-gradient-to-br active:scale-95  from-primary to-secondary-500 text-secondary-800 left border border-secondary-700 rounded-full size-10  flex justify-center items-center   "
            onClick={previous}
          >
            <MoveLeftIcon />
          </button>
          <button
            className="button right hover:bg-gradient-to-r active:scale-95  from-primary to-secondary-500 text-secondary-800 border border-secondary-700  rounded-full size-10  flex justify-center items-center  "
            onClick={next}
          >
            <MoveRightIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderComponent;
