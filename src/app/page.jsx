import Container from "@/components/Container";
import LandingSection from "@/components/LandingSection";
import ScenceSection from "@/components/ScenceSection";
import TrailerSection from "@/components/TrailerSection";
import StorylineSection from "@/components/StorylineSection";
import FaqSection from "@/components/FaqSection";
import GradientText from "@/components/GradientText";
import MoanaSailBoat from "./characters/components/MoanaSailBoat";

export default function page() {
  const scenes = [
    {
      id: 1,
      title: "Maui's funny movement",
      image: "/assets/moana_home/best-scence.mp4",
      gridArea: "span 1 / span 3 / auto / auto",
    },
    {
      id: 2,
      title: "Dancing movement",
      image: "/assets/moana_home/best-scene-two.mp4",
      gridArea: "span 1 / span 3 / auto / auto",
    },
    {
      id: 3,
      title: "Benison from goddess",
      image: "/assets/moana_home/best-scene-three.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
    {
      id: 4,
      title: "Moana's cuteness movement",
      image: "/assets/moana_home/best-scene-four.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
    {
      id: 5,
      title: "Moana's funny movement",
      image: "/assets/moana_home/best-scene-five.mp4",
      gridArea: "span 1 / span 2 / auto / auto",
    },
  ];

  return (
    <main className={"py-10"}>
      <Container>
        <LandingSection />
      </Container>
      <MoanaSailBoat styleName={"w-full mb-10"} />
      <Container>
        <ScenceSection scenes={scenes} />
      </Container>
      <MoanaSailBoat styleName={"w-full mb-10"} />
      <Container>
        <StorylineSection />
      </Container>
      <MoanaSailBoat styleName={"w-full mb-10"} />

      {/* Trailer Section */}
      <TrailerSection />

      <MoanaSailBoat styleName={"w-full mb-10"} />
      {/* Faq Section */}
      <div className="my-10">
        <Container>
          <GradientText className={"home-header"}>
            Frequently Asked Questions
          </GradientText>
          <FaqSection />
        </Container>
      </div>
    </main>
  );
}
