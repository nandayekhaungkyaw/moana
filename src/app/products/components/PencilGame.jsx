'use client'

import Image from "next/image"
import pencilGame1 from "../../../../public/assets/moana_products/pencil-game/pencil-game-1.png"
import pencilGame2 from "../../../../public/assets/moana_products/pencil-game/pencil-game-2.png"


// import { div, div, div, h2 } from "@/components/ui/div"
import { Download } from 'lucide-react'
import ProductButton from "./ProductButton"
import { handleDownload } from "../actions/dowloadfile"

export default function PencilGame() {
  return (
    <div className="  p-4 md:p-8">
      <div className="mx-auto max-w-7xl grid gap-[40px] md:grid-cols-2">
        {/* Left Section */}
        <div className="bg-white/80 backdrop-blur">
        <Image
                                        src={pencilGame2.src}
                                        alt="Starfish decoration"
                                       
                                        width={400}
                                        height={100}
                                        className="absolute  opacity-40 z-20 top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/3 "
                                       
                                      />
          <div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 font-subrayada">
              PENCIL GAME
            </h2>
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 font-leckerli italic mt-2">
              Moana&apos;s Path to Discovery
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-700">
              Help Moana navigate the vast ocean to find her way back to Motunui
              by tracing the path with your pencil! This fun and engaging game
              challenges players to stay on course while improving hand-eye
              coordination and focus.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-leckerli font-semibold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400">
                How to play
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Start up: Players must start green arrow point</li>
                <li>• Trace the Path: Players must carefully trace along the path</li>
                <li>• Avoid Obstacles: Stay within the lines and can&apos;t pass object line</li>
                <li>• Time Challenge (Optional): Add a timer to race against the clock</li>
              </ul>
            </div>

            <ProductButton icon={<Download size={20} />} filled={true} process={()=>handleDownload("1qiaRhWEbCHKcwTBdTuh3jbdaxKsf6vbbcNvXzQp-jd4","moana-weekly-planner")} children={'Download pdf'}/>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-xl">
          <Image
            src={pencilGame1.src}
            alt="Moana Maze Worksheet"
           fill
            className="object-center  "
            
            
            priority
          />
        </div>
      </div>
    </div>
  )
}

