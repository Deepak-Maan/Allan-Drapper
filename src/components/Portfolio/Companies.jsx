"use client";
import React from "react";
import { Heading } from "../common/Heading";
import Image from "next/image";
import { IMAGES } from "../common/Helper";
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div className="max-w-[1220px] mx-auto px-3 md:pt-[74px] md:mt-[76px] mt-0 sm:pt-16 pt-12">
      <Heading
        className="text-center after:left-1/2 after:-translate-x-1/2 after:!bg-offBlue"
        heading="Companies Allan Founded"
      />
      <Marquee>
        <div className="flex flex-wrap xl:gap-16 gap-10  justify-center sm:pt-[110px] pt-8">
          {IMAGES.slice(0, 5).map((image, index) => (
            <Image
              className=" duration-300 hover:scale-90"
              key={index}
              src={image.img}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          ))}
        </div>
      </Marquee>
      <Marquee direction="ltr">
        <div className="flex flex-wrap xl:gap-[90px] gap-16  justify-center pt-16">
          {IMAGES.slice(5, 10).map((image, index) => (
            <Image
              className=" duration-300 hover:scale-90"
              key={index}
              src={image.img}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          ))}
        </div>
      </Marquee>
      <div className="flex justify-center sm:pt-20 pt-16 mb-1">
        <Image
          className=" duration-300 hover:scale-90"
          src={IMAGES[10].img}
          width={IMAGES[10].width}
          height={IMAGES[10].height}
          alt={IMAGES[10].alt}
        />
      </div>
    </div>
  );
};

export default Companies;
