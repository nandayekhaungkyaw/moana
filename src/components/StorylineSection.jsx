import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

const StorylineSection = () => {
  return (
    <div className="my-10 flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between relative">
      <Image
        src={"/assets/moana_home/storyline.png"}
        alt="Storyline"
        height={400}
        width={400}
        className="object-contain overflow-hidden"
      />
      <div className="w-full md:w-1/2 relative space-y-4 z-40">
        <h1 className="text-2xl font-semibold font-leckerli">
          Brief of Moana Movie
        </h1>
        <p className="text-gray-600 leading-relaxed z-50 bg-transparent">
          Inspired by Polynesian mythology, Moana is depicted as the
          strong-willed daughter of a chief of a Polynesian village, who is
          chosen by the ocean itself to reunite a mystical relic with the
          goddess Te Fiti. Teaming up with the demigod Maui, Moana faces
          challenges to discover her true identity as a wayfinder, and saves her
          island from a spreading darkness. It's a tale of courage,
          self-discovery, and connection to heritage.
        </p>
        <Button filled>
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>

        {/* Decorative Wave */}
        <div className="absolute right-2 top-10 w-72 h-72 -z-10 hidden md:block">
          <Image
            src="/assets/moana_home/bg-wave.png"
            alt="Wave"
            width={400}
            height={400}
            className="object-contain overflow-hidden"
          />
        </div>
      </div>
      <div className="absolute md:-right-4 overflow-hidden md:-top-10 w-48 h-48 -z-10 hidden md:block">
        <Image
          src="/assets/moana_home/Flower.png"
          alt="Flower"
          width={80}
          height={80}
          className="object-contain "
        />
      </div>
    </div>
  );
};
export default StorylineSection;
