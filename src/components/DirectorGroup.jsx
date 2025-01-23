import directors from "@/store/aboutUs/director";
import React from "react";
import FollowUsBtnGroup from "./FollowUsBtnGroup";
import Image from "next/image";

const DirectorGroup = () => {
  return (
    <>
  
      {directors.map((director, index) => (
        <div
          key={index}
          className="  md:my-section-spacing md:col-span-4 mb-5 lg:mb-20 col-span-2 lg:col-span-3 flex flex-col gap-4 "
        >
          <div className="">
            <Image
              src={director.image}
              height={360}
              width={305}
              alt={director.name}
              className=" w-full object-cover object-center "
            />
            <div className=" icon-group -mt-4 md:-mt-5 px-2">
              <FollowUsBtnGroup />
            </div>
          </div>
          <div>
            <h1 className=" lg:text-3xl md:text-2xl text-xl text-center text-secondary-900 font-bold ">
              {director.name}
            </h1>
            <p className=" text-secondary-800 text-center sm:text-base text-sm">{director.roles}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default DirectorGroup;
