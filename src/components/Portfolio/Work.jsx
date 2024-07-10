'use client'
import { H2 } from "../common/Heading";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import slider1 from "../../../public/assets/images/webp/portfolio/swiperFistphoto.png";
import slider2 from "../../../public/assets/images/webp/portfolio/basebollPlayer.png";
import slider3 from "../../../public/assets/images/webp/portfolio/blackSuitPeople.png";
import CommonButton from "../common/CommonButton";

const Work = () => {
  return (
    <>
      <div className="pb-12">
          <div className=" max-w-[594px] mx-auto pb-16">
            <H2 className="text-center" heading="Work with Allan" />
            <p className=" font-medium text-2xl text-lightBlack opacity-80 pt-9 max-w-[470px] mx-auto">
              My companies are always hiring. Send me your info and let me know what
              type of work you are looking for.
            </p>
          </div>
          <Swiper
                      loop={true}
            slidesPerView={3}
            // spaceBetween={30}
            pagination={{
                clickable: true,
              }}
            modules={[Pagination]}
            className="portfolioSwiper"
            
          >
            <SwiperSlide >
                <Image src={slider1} width={528} height={384} alt="sliderImage" />
            </SwiperSlide>
            <SwiperSlide >
            <Image src={slider2} width={528} height={384} alt="sliderImage" />
            </SwiperSlide>
            <SwiperSlide >
            <Image src={slider3} width={528} height={384} alt="sliderImage" />
            </SwiperSlide>
            <SwiperSlide >
            <Image src={slider2} width={528} height={384} alt="sliderImage" />
            </SwiperSlide>
            <SwiperSlide >
            <Image src={slider3} width={528} height={384} alt="sliderImage" />
            </SwiperSlide>

          </Swiper>
          <div className=" flex justify-center items-center">
              <CommonButton text='APPLY' classesbtn=" mt-8 w-[105px]" />
          </div>
          </div>
    </>
  );
};

export default Work;
