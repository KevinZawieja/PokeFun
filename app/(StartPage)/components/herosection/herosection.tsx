import CarouselComponent from "./carousel"; // Correct the import statement to use PascalCase for component names
import Image from "next/image";
import React from "react";
import HeroSectionBG from "@/app/(StartPage)/assets/herosectionbg.png";

export default function Herosection() {
  return (
    <div className="relative flex justify-center p-8 flex-col w-full h-full">
      <Image
        src={HeroSectionBG}
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
        className="-z-10"
      />
      <h2 className="text-6xl font-extrabold flex justify-center text-black underline pb-32">
        GAMES
      </h2>
      <div className="">
        <CarouselComponent />
      </div>
      <div className="flex justify-center">
        <h2 className="text-6xl font-extrabold flex justify-center text-black underline pb-32">
          News
        </h2>
      </div>
      <div className="flex justify-center">
        <h2 className="text-6xl font-extrabold flex justify-center text-black underline pb-32">
          Community
        </h2>
      </div>
    </div>
  );
}
