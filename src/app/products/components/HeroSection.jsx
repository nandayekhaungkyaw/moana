import MoanaSailBoat from "@/app/characters/components/MoanaSailBoat";
import HeroSectionImage from "../../../../public/assets/moana_products/product-hero.png";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className=" relative w-full h-[300px] sm:h-[400px] md:h-[500px] max-w-[1550px]  mb-[80px] m-auto">
      <Image
        src={HeroSectionImage}
        alt="Moana Adventure Doll"
        layout="fill"
        objectFit="cover"
      />
      <div className="   cursor-pointer hover:cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 flex gap-2 z-20 absolute  top-[50%] left-[50%] font-leckerli text-3xl">
        <Link href={"/"}>Home</Link>
        <span>/</span>
        <span>Products</span>
      </div>
      <div className=" absolute z-20 w-full bottom-[50px] transform translate-y-1/2">
        <MoanaSailBoat />
      </div>
    </div>
  );
};

export default HeroSection;
