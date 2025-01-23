import React from "react";
import GradientText from "./GradientText";

const CalltoAdventure = () => {
  return (
    <>
      <div className="  lg:space-y-1 space-y-0">
        <GradientText
          className="font-subrayada lg:text-2xl sm:text-lg text-base  "
          heading="2"
        >
          Call to Adventure
        </GradientText>
        <p className=" text-xs sm:text-sm md:text-base text-secondary-700">
          Learns she is chosen to restore Te Fiti’s heart and save her island.
        </p>
      </div>
      <div className=" lg:space-y-1 space-y-0">
        <GradientText className="font-subrayada lg:text-2xl sm:text-lg text-base " heading="2">
          Departure
        </GradientText>
        <p className=" text-xs sm:text-sm md:text-base text-secondary-700">
          Defies her father’s restrictions and sets sail beyond the reef.
        </p>
      </div>
      <div className=" lg:space-y-1 space-y-0">
        <GradientText className="font-subrayada lg:text-2xl sm:text-lg text-base " heading="2">
          Meeting Maui
        </GradientText>
        <p className=" text-xs sm:text-sm md:text-base text-secondary-700">
          Convinces the demigod Maui to join her mission despite his initial
          reluctance..
        </p>
      </div>
      <div className=" lg:space-y-1 space-y-0">
        <GradientText className="font-subrayada lg:text-2xl sm:text-lg text-base " heading="2">
          Challenges:
        </GradientText>
        <p className=" text-xs sm:text-sm md:text-base text-secondary-700">
          Faces battles with Kakamora pirates and retrieves Maui’s fishhook from
          Tamatoa.
        </p>
      </div>
      <div className=" lg:space-y-1 space-y-0">
        <GradientText className="font-subrayada lg:text-2xl sm:text-lg text-base " heading="2">
          Growth
        </GradientText>
        <p className=" text-xs sm:text-sm md:text-base text-secondary-700">
          Learns wayfinding and discovers her inner strength.
        </p>
      </div>
      <div className=" lg:space-y-1 space-y-0">
        <GradientText className="font-subrayada lg:text-2xl sm:text-lg text-base " heading="2">
          Climactic Confrontation
        </GradientText>
        <p className=" text-xs sm:text-sm md:text-base text-secondary-700">
          Realizes Te Kā is Te Fiti without her heart and restores it, healing
          the world.
        </p>
      </div>
      <div className=" lg:space-y-1 space-y-0">
        <GradientText className="font-subrayada lg:text-2xl sm:text-lg text-base " heading="2">
          Return Home:
        </GradientText>
        <p className=" text-xs sm:text-sm md:text-base text-secondary-700">
          Inspires her people to embrace voyaging and becomes their leader.
        </p>
      </div>
    </>
  );
};

export default CalltoAdventure;
