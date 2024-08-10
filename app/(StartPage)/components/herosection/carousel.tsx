import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import GameGTPPicture from "@/app/(StartPage)/assets/landingPage_GTP.jpg";
import GameHLPicture from "@/app/(StartPage)/assets/landingPage_HL.jpg";
import GameMSGPicture from "@/app/(StartPage)/assets/landingPage_MSG.jpg";

//todo beim onclick der bilder zu den jeweiligen seiten weiterleiten

export default function CarouselComponent() {
  return (
    <div className=" flex justify-center">
      <Carousel className="h-3/5 w-3/5">
        <CarouselContent>
          <CarouselItem className="flex justify-center flex-col items-center ">
            <Image src={GameGTPPicture} width={500} height={500} alt="GTP" />
            <h3 className="text-white font-semibold py-12">
              Game Title Placeholder
            </h3>
          </CarouselItem>
          <CarouselItem className="flex justify-center flex-col items-center">
            <Image src={GameHLPicture} width={500} height={500} alt="HL" />
            <h3 className="text-white font-semibold py-12">
              Game Title Placeholder
            </h3>
          </CarouselItem>
          <CarouselItem className="flex justify-center flex-col items-center">
            <Image src={GameMSGPicture} width={500} height={500} alt="GTP" />
            <h3 className="text-white font-semibold py-12">
              Game Title Placeholder
            </h3>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
