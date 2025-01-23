import React from "react";
import { quote } from "../../public/images/moana_about";
import { Star } from "lucide-react";
import Image from "next/image";
import GradientText from "./GradientText";

const RatingCard = ({className , image , title , message , date , rating}) => {
  return (
    <div className={` ${className}`}>
      <div className="  lg:p-5 md:p-2 relative border px-2 border-gray-500 bg-[#f5f5f5] rounded flex flex-col gap-5">
        <div className=" w-full md:-mt-24 -mt-24  sm:-mt-14">
          <Image
            src={image}
            alt="user1"
            className="  w-[150px]   sm:w-[120px] md:w-[150px]   border-2 border-primary-700 rounded-full mx-auto"
            width={150}
            height={150} 
          />
        </div>
        <div className=" mt-5 ">
          <div className=" inline-block w-full">
            <Image
              className=" mr-auto"
              src={quote}
              height={26}
              width={22}
              alt="quote"
            />
          </div>
          <div className="space-y-2">
            <GradientText className=" text-center text-xl lg:text-2xl font-leckerli " heading="3">
             {title}
            </GradientText>
            <p className=" text-sm sm:text-base  text-center">
        {message}
            </p>
          </div>
          <div className=" inline-block w-full ">
            <Image
              className=" rotate-180 ml-auto"
              src={quote}
              height={26}
              width={22}
              alt="quote"
            />
          </div>
        </div>

        <div className="flex justify-between py-5 px-1 ">
          <p>{date}</p>

          <div className=" flex gap-1">
            <Star size={16} color="#FDA520" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
