import React from "react";
import GradientText from "./GradientText";

const Awards = () => {
  return (
    <div className="bg-commercial lg:mb-20 bg-no-repeat object-fill object-left-bottom lg:col-span-6 md:px-2 px-1 col-span-full md:mb-10 mb-5  ">
      <div className=" bg-[rgba(255,255,255,0.6)] flex flex-col gap-3 md:gap-5">
        <GradientText className=" text-2xl md:text-3xl font-leckerli ">
          Awards And nomination
        </GradientText>
        <div className="flex flex-col gap-3">
          <div className="space-y-1">
            <h1 className=" text-base sm:text-lg md:text-xl leading-6  font-medium  text-secondary-900">
              Academy awardsz
            </h1>
            <div className="md:text-base sm:text-sm text-xs text-secondary-700">
              <p className="font-sans whitespace-normal ">
                Nominated for Best Animated Feature.
              </p>
              <p>Nominated for Best Original Song ("How Far I'll Go").</p>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-base sm:text-lg md:text-xl leading-6  font-medium  text-secondary-900">
              Golden globes
            </h1>
            <div>
              <p className=" md:text-base sm:text-sm text-xs text-secondary-700">
                Nominated for Best Motion Picture – Animated.
              </p>
              <p className=" md:text-base sm:text-sm text-xs text-secondary-700">
                Nominated for Best Original Song ("How Far I'll Go")
              </p>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className=" text-base sm:text-lg md:text-xl leading-6  font-medium  text-secondary-900">
              Annie awards
            </h1>
            <p className=" md:text-base sm:text-sm text-xs text-secondary-700">
              Received multiple nominations, including Outstanding Achievement
              in Animation.
            </p>
          </div>

          <div className="space-y-1">
            <h1 className=" text-base sm:text-lg md:text-xl leading-6  font-medium  text-secondary-900">
              Critics choice movie awards
            </h1>
            <p className=" md:text-base sm:text-sm text-xs text-secondary-700">
              Nominated for Best Animated Feature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
