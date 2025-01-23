
import React from "react";
import Marquee from "react-fast-marquee";
import PartnerLogo from "./PartnerLogo";

const LogoSlider = ({ partners }) => {
  return (
    <Marquee gradient={true} speed={45} direction="right" className="flex md:mb-10  lg:py-10 sm:py-10 mb-5 py-5 md:py-8 col-span-full  lg:h-auto lg:mb-20 overflow-y-hidden" pauseOnHover={true} autoFill={true}>
      {partners.map((partner, index) => (
        <PartnerLogo key={index} partner={partner} />
      ))}
    </Marquee>
  );
};

export default LogoSlider;
