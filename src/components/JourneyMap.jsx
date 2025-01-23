import Image from "next/image";
import React from "react";
import { mapCharacters } from "../../public/images/moana_about";

const JourneyMap = ({ className }) => {
  return (
    <div className={` ${className}   `}>
      {/* <iframe className="h-full scale-125 " src="https://lottie.host/embed/417a6f83-9817-4f0f-806c-cd4c1a29c682/fiaEXxVwr9.lottie"></iframe> */}
      <iframe
        className="h-full scale-100 w-full "
        src="https://lottie.host/embed/795c332e-8eb0-4244-9681-cb8ab4fbb4d1/VlF5iRUJrt.lottie"
      ></iframe>
      {/* <Image
        className=" absolute h-full -left-28 top-0 scale-95"
        src={mapCharacters}
        width={429}
        height={665}
        alt="moana-journey-animation"
      /> */}
    </div>
  );
};

export default JourneyMap;
