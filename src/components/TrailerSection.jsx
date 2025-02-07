import Container from "@/components/Container"
import Image from "next/image"
import GradientText from "@/components/GradientText"
import YouTubeEmbed from "@/components/YouTubeEmbed"

const TrailerSection = () => {
  return (
    <div>
      <Container>
        <GradientText className="home-header mb-6">WATCH TRAILER</GradientText>
      </Container>
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/assets/moana_home/movie-trailer-bg.png"
          alt="Trailer background"
          width={1980}
          height={1080}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover md:object-contain hidden md:block"
          priority
        />

        {/* Content Overlay */}
        <div className="md:absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col">
          {/* Mobile Layout */}
          <div className="flex flex-col space-y-4 md:hidden">
            <InfoCard />
            <YouTubeEmbed videoId="KGqBfyQFG_g?si=lsdn45q4npTSUnXi" />
            <YouTubeEmbed videoId="cPAbx5kgCJo" />
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block md:h-[400px] ">
            <YouTubeEmbed
              videoId="KGqBfyQFG_g?si=lsdn45q4npTSUnXi"
              className="absolute left-40 lg:left-40 top-[70%] -translate-y-1/2 w-[280px] lg:w-[360px] h-[210px] lg:h-[270px]"
            />
            <YouTubeEmbed
              videoId="cPAbx5kgCJo"
              className="absolute right-8 lg:right-40 top-[40%] w-[300px] lg:w-[400px] h-[225px] lg:h-[300px]"
            />
            <InfoCard className="absolute md:right-40 lg:right-80 md:-top-4 lg:top-8 w-[280px] lg:w-[340px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

const InfoCard = ({ className = "" }) => (
  <div className={`bg-gradient-to-b from-[#E2D3C8] to-[#56B3C7] p-4 rounded-lg shadow-sm ${className}`}>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1 font-leckerli">Trailer Concept</h3>
        <p className="text-sm text-gray-600 leading-5 md:leading-7">
          Moana journeys with Maui to restore Te Fiti's heart and save her island
        </p>
      </div>
      <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
        <Image src="/assets/moana_home/pig.png" alt="Pig" fill className="object-contain" />
      </div>
    </div>
  </div>
)

export default TrailerSection

