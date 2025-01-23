import Image from "next/image";
import React from "react";

const PartnerLogo = ({ partner }) => {
  return (
    <div className=" lg:h-[100px] h-12 sm:h-16 sm:ml-5 md:h-20 ">
      <Image
        className=" h-full w-auto  object-contain  "
        height="100"
        width={300}
        alt={partner.title}
        src={partner.src}
      />
    </div>
  );
};

export default PartnerLogo;
