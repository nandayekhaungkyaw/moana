import React from "react";

import Image from "next/image";
import GradientText from "@/components/GradientText";

const ScenceSection = ({ scenes }) => {
  return (
    <div>
      <div className="flex items-center  gap-3 mb-4">
        <GradientText className={"home-header"}>
          Best scences of Moana
        </GradientText>
        <Image
          src={"/assets/moana_home/kakamora.png"}
          alt="Kakamora"
          width={48}
          height={48}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {scenes.map((scene) => {
          return (
            <div
              key={scene.id}
              className="group"
              style={{ gridArea: scene.gridArea }}
            >
              <video
                src={scene.image}
                className="w-[100%] h-[250px] object-cover rounded-lg shadow-lg transition-transform group-hover:scale-105"
                autoPlay
                loop
                muted
                controls
                playsInline
                preload="auto"
                poster={scene.image}
                title={scene.title}
                style={{ objectFit: "cover" }}
              ></video>

              <div className=" text-center mt-1">
                <p className="text-sm font-medium text-gray-700 italic">
                  {scene.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ScenceSection;
