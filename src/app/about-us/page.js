
import HeroSection from "@/components/HeroSection";
import LogoSlider from "@/components/LogoSlider";
import { character1, character2, character3, aboutHero } from "../../../public/images/moana_about";
import Container from "@/components/Container";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import JourneyMap from "@/components/JourneyMap";
import SliderComponent from "@/components/SliderComponent";
import MoanaSailBoat from "../characters/components/MoanaSailBoat";
import DirectorGroup from "@/components/DirectorGroup";
import RatingCard from "@/components/RatingCard";
import CalltoAdventure from "@/components/CalltoAdventure";
import links from "@/store/aboutUs/ytLink";
import Awards from "@/components/Awards";
import CommercialSuccess from "@/components/CommercialSuccess";
import partners from "@/store/aboutUs/partners";

export default function AboutPage() {



  return (
    <>


      <HeroSection image={aboutHero} title="About Us" />


      <Container className="   grid lg:grid-cols-12 md:grid-cols-8 gap-x-5 grid-cols-4 items-start">
        <LogoSlider
          partners={partners}
        />
        <div className="  md:mb-10 col-span-full mb-5 md:block lg:hidden  ">
          <Image
            src="/images/moana_about/achievement1.png"
            alt="Picture of the author"
            className="w-full"
            width={639}
            height={334}
          />
        </div>

        <CommercialSuccess />
        <div className=" hidden lg:block lg:mb-20  lg:col-span-6  ">
          <Image
            src="/images/moana_about/achievement1.png"
            alt="Picture of the author"
            className="w-full"
            width={639}
            height={334}
          />
        </div>
        <div className=" lg:col-span-6 col-span-full  lg:mb-20 md:mb-10 mb-5  ">
          <Image
            className=" w-full object-cover rounded "

            alt="Moana-movie-celebaration"
            width={639}
            height={336}
            src="/images/moana_about/achievement.png"
            priority={true}
          />
        </div>
        <Awards />
      </Container>

      <div className=" w-screen h-[100px]   md:mb-10 mb-5 lg:mb-20  ">
        <MoanaSailBoat rtl={true} styleName=" w-screen " />
      </div>


      <Container className=" grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5 items-start">


        <GradientText className=" lg:text-5xl lg:my-section-spacing md:text-4xl text-2xl md:my-section-spacing font-subrayada sm:mb-8 col-span-full mb-5 text-center">
          Making of the Movie
        </GradientText>

        <div className=" col-span-full lg:mb-20 md:mb-10 mb-5">

          <SliderComponent bottomControls={false}
            leftRightControls={true} s infinite={false} >
            {links.map((link, index) => <div key={index} className=" p-1  lg:w-[560px] md:w-[392px] md:h-[234px] w-full aspect-video lg:h-[315px] ">
              <iframe
                className=" w-full h-full"
                src={link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>)}
          </SliderComponent>
        </div>
        <GradientText className=" lg:text-5xl  lg:mb-20 text-2xl md:text-3xl md:mb-10 mb-5 font-subrayada col-span-full  text-center">
          Journey Of Moana
        </GradientText>
        <div className=" lg:col-span-6 min-h-[340px] md:col-span-4 md:mb-10 lg:mb-20 col-span-full  self-stretch flex items-start justify-center mb-5 ">

          <JourneyMap className=" h-full w-full  " />
        </div>
        <div className="lg:col-span-6 col-span-full md:col-span-4 lg:mb-20 md:mb-10 mb-5 space-y-2  lg:space-y-5">
          <CalltoAdventure />
        </div>

        <GradientText className=" lg:my-20 col-span-full mb-5 md:mb-8 lg:text-5xl md:text-4xl text-2xl font-subrayada">
          Critics Review
        </GradientText>

        <div className=" col-span-full lg:mb-20 md:mb-10 mb-5 ">
          <SliderComponent bottomControls={true} leftRightControls={false} >
            <RatingCard className="px-1 mt-24 md:mt-24  sm:mt-14  sm:w-auto " image={character1} title="Victoria Luxford" message="Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery." date="May 4, 2023" rating="4/5" />
            <RatingCard className="px-1 mt-24 md:mt-24  sm:mt-14  sm:w-auto" image={character2} title="Victoria Luxford" message="Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery." date="May 4, 2023" rating="4/5" />
            <RatingCard className="px-1 mt-24 md:mt-24  sm:mt-14  sm:w-auto" image={character3} title="Victoria Luxford" message="Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery." date="May 4, 2023" rating="4/5" />
            <RatingCard className="px-1 mt-24 md:mt-24  sm:mt-14  sm:w-auto" image={character1} title="Victoria Luxford" message="Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery." date="May 4, 2023" rating="4/5" />
            <RatingCard className="px-1 mt-24 md:mt-24  sm:mt-14  sm:w-auto" image={character2} title="Victoria Luxford" message="Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery." date="May 4, 2023" rating="4/5" />
            <RatingCard className="px-1 mt-24 md:mt-24  sm:mt-14  sm:w-auto" image={character3} title="Victoria Luxford" message="Great fun. A traditional Disney Princess film but with a little more depth to it, being about personal discovery and bravery." date="May 4, 2023" rating="4/5" />

          </SliderComponent>
        </div>

        <DirectorGroup />



      </Container>

    </>
  );
}
