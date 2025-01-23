'use client'
import selfCare1 from "../../../../public/assets/moana_products/self-care/self-care-1.png"
import selfCare2 from "../../../../public/assets/moana_products/self-care/self-care-2.png"
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'
import ProductButton from "./ProductButton"
import { handleDownload } from "../actions/dowloadfile"

export default function SelfCare() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-[40px] mb-[80px] ">
      {/* Left Side - Image */}
      <div className="w-full   aspect-[3/2] relative overflow-hidden rounded-lg shadow-xl">
        <Image
                    src={selfCare1.src}
                    alt="Moana Maze Worksheet"
                   fill
                    className="object-center  "
                    
                    
                    priority
                  />
      </div>

       {/* Right Section */}
       <div className="bg-white/80 backdrop-blur">
        <Image
                                        src={selfCare2.src}
                                        alt="Starfish decoration"
                                       
                                        width={400}
                                        height={100}
                                        className="absolute  opacity-40 z-20 top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/3 "
                                       
                                      />
          <div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 font-subrayada">
              Self-Care
            </h2>
            <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 font-leckerli italic mt-2">
            Moana-Inspired Self-Care Checklist
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-700">
            Take inspiration from the adventurous and serene vibes of Moana with 
            this themed self-care checklist to nurture your body, mind, and spirit.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-leckerli text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 font-semibold">
              Tips
              </h3>
              <ul className="space-y-2 text-gray-700">
              <li>
              Plan an "adventure day" where you try something new or explore a nearby place.
            </li>
            <li>
              Practice acts of kindness toward others, connecting like Moana did with her people.
            </li>
            <li>
              Treat yourself to something that feels luxurious, like a spa day or a self-made skincare routine.
            </li>
              </ul>
            </div>

            <ProductButton icon={<Download size={20} />} filled={true} process={()=>handleDownload("1v8g3ReRWFxZpABjO6Dl93bAlxuVUHaVLJyhiSztsNZs","moana-weekly-planner")}children={'Download pdf'}/>
          </div>
        </div>


      {/* Right Side - Content */}
      {/* <div className="w-full p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-sky-600 tracking-tight">
          SELF-CARE
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-sky-400 mt-6 font-script">
          Moana-Inspired Self-Care Checklist
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Take inspiration from the adventurous and serene vibes of Moana with 
          this themed self-care checklist to nurture your body, mind, and spirit.
        </p>

        <div className="mt-8">
          <h3 className="text-3xl text-sky-400 font-script mb-4">Tips</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              Plan an "adventure day" where you try something new or explore a nearby place.
            </li>
            <li>
              Practice acts of kindness toward others, connecting like Moana did with her people.
            </li>
            <li>
              Treat yourself to something that feels luxurious, like a spa day or a self-made skincare routine.
            </li>
          </ul>
        </div>

        <ProductButton icon={<Download size={20} />} filled={true} process={() => console.log('Download PDF')} children={'Download pdf'}/>
      </div> */}
    </div>
  )
}

