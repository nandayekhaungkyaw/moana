import React from "react";
import GradientText from "./GradientText";

const CommercialSuccess = () => {
  return (
    <div className=" bg-commercial bg-no-repeat  object-fill object-bottom lg:col-span-6 md:px-2 col-span-full  sm:col-span-3 md:col-span-6  md:pr-10 lg:mb-20 md:mb-10 mb-5   ">
      <div className=" bg-[rgba(255,255,255,0.6)] flex flex-col md:gap-5 gap-3">
        <GradientText className=" text-2xl  md:text-3xl font-leckerli ">
          Commercial success
        </GradientText>
        <div className="flex flex-col gap-3 ">
          <div className="space-y-2">
            <h1 className=" md:text-xl sm:text-lg text-base leading-6  font-medium  text-secondary-900">
              Worldwide box office
            </h1>
            <p className=" md:font-base text-xs text-secondary-700">
              Over $643 million, with $248 million from domestic (U.S.) markets
              and $395 million internationally.Ranked as one of Disney’s
              highest-grossing animated films of all time.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className=" md:text-xl sm:text-lg text-base leading-6  font-medium  text-secondary-900">
              Streaming popularity
            </h1>
            <p className=" md:font-base text-xs text-secondary-700">
              One of Disney's most-watched films, accumulating over 1 billion
              hours of viewership from 2020 to 2023.Upon its release on Disney+,
              Moana quickly became one of the platform’s most-watched titles,
              attracting new audiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialSuccess;
