"use client";

// import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
import { Download } from "lucide-react";
import Image from "next/image";
import planner1 from "../../../../public/assets/moana_products/weekly-planner/planner-1.png";
import planner2 from "../../../../public/assets/moana_products/weekly-planner/planner-2.png";
import planner3 from "../../../../public/assets/moana_products/weekly-planner/planner-3.png";
import ProductButton from "./ProductButton";
import { handleDownload } from "../actions/dowloadfile";

export default function WeeklyPlanner() {
  return (
    <div className=" ">
      <div className="mx-auto max-w-7xl grid gap-[40px] md:grid-cols-12 relative">
        <Image
          src={planner3.src}
          alt="Starfish decoration"
          width={150}
          height={100}
          className="md:absolute md:inline-block  hidden z-30 bottom-0 -left-[30px] "
        />
        {/* {new column} */}
        <div className=" hidden md:inline-block"></div>
        {/* Left Column - Info Section */}
        <div className="space-y-8 col-span-1 md:col-span-6 p-2">
          <div>
            <h1 className="text-4xl md:text-5xl font-subrayada font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 mb-4">
              WEEKLY PLANNER
            </h1>
            <h2 className="text-2xl md:text-3xl  text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 font-leckerli font-semibold italic mb-6">
              Your Week with Adventure
            </h2>
            <p className="text-gray-600">
              Stay inspired and on track with the Moana Weekly Planner! Whether
              you&apos;re conquering your to-do list or planning new adventures,
              this vibrant and motivational planner is perfect for adding a
              touch of Moana&apos;s fearless spirit to your daily routine.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-secondary-400 font-leckerli italic mb-4">
              Why It&apos;s Special
            </h3>
            <p className="text-gray-600">
              The Moana Weekly Planner isn&apos;t just about staying organized –
              it&apos;s about empowering you to chart your course, follow your
              heart, and make every week extraordinary. With space for
              creativity and reflection, it&apos;s more than a planner –
              it&apos;s a tool for self-discovery and inspiration!
            </p>
          </div>
          <ProductButton
            icon={<Download size={20} />}
            filled={true}
            process={() =>
              handleDownload(
                "1MC2euLlKZl28eGPZRr10HNgiOOD7aPq2caaAMPWNVjw",
                "moana-weekly-planner"
              )
            }
            children={"Download pdf"}
          />
        </div>

        {/* Right Column - Planner Section */}
        <div className=" backdrop-blur col-span-1 md:col-span-4">
          <Image
            src={planner2.src}
            alt="Starfish decoration"
            width={150}
            height={100}
            className="absolute md:absolute md:inline-block  hidden z-20 -top-[80px] -right-[70px] "
          />

          <Image
            src={planner1.src}
            alt="Starfish decoration"
            width={411}
            height={580}
            className=" md:inline-block hidden  w-1/2 md:w-full   "
            priority
          />
          <Image
            src={planner1.src}
            alt="Starfish decoration"
            width={300}
            height={400}
            className="md:object-cover md:hidden inline-block  w-1/2 md:w-full   "
            priority
          />
        </div>
        {/* {new column} */}
        <div className=" hidden md:inline-block"></div>
      </div>
    </div>
  );
}
