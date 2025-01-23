import Container from "@/components/Container";
import bgGallery from "../../../public/assets/moana_gallery/gallery-hero.png";
import HeroSection from "@/components/HeroSection";
import GalleryMovieScence from "@/components/GalleryMovieScence";
import GalleryOST from "@/components/GalleryOST";
import GalleryFanArt from "@/components/GalleryFanArt";

import MoanaSailBoatRight from "./components/MoanaSailBoatRight";

export default function Page() {
  return (
    <main className="flex flex-col">
      <HeroSection image={bgGallery} title={"Gallery"} className />

      <Container>
        <GalleryMovieScence />
      </Container>
      <div className='z-20 w-full '>
        <MoanaSailBoatRight />
      </div>

      <Container>
        <GalleryOST />
        <GalleryFanArt />
      </Container>

    </main>
  );
}
