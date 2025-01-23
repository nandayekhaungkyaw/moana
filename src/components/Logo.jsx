import React from "react";

import Image from "next/image";

const Logo = ({ className }) => {
  return (
    <>
      <Image src={"/assets/logo.png"} width={152} height={55} alt="Moana Logo" className={className} />
    </>
  );
};

export default Logo;
