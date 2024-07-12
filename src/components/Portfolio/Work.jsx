'use client'
import { Heading } from "../common/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import Button from "../common/Button";

const Work = () => {
  return (
    <>
      <div className=" oveflow-hidden mx-auto min-[1925px]:container">
        <div className=" max-w-[594px] mx-auto sm:pb-16 pb-4">
          <Heading className="text-center after:left-1/2 after:-translate-x-1/2" heading="Work with Allan" />
          <p className=" font-medium text-center text-lg sm:text-xl md:text-2xl text-lightBlack opacity-80 pt-9 max-w-[470px] mx-auto">
            My companies are always hiring. Send me your info and let me know what
            type of work you are looking for.
          </p>
        </div>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            410: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}

          modules={[Pagination]}
          className="portfolioSwiper mx-auto !pt-5 "

        >
          <SwiperSlide >
            <Image className="!h-[384px] md:!w-[528px] w-full px-3 md:px-0 object-cover" src="/assets/images/portfolio/webp/base-boll-player.webp" width={528} height={384} alt="sliderImage" />
          </SwiperSlide>
          <SwiperSlide >
            <Image className="!h-[384px] md:!w-[528px] w-full px-3 md:px-0 object-cover " src="/assets/images/portfolio/webp/black-Suit-people.webp" width={528} height={384} alt="sliderImage" />
          </SwiperSlide>
          <SwiperSlide >
            <Image className="!h-[384px] md:!w-[528px] w-full px-3 md:px-0 object-cover " src="/assets/images/portfolio/webp/swiper-fist-photo.webp" width={528} height={384} alt="sliderImage" />
          </SwiperSlide>
          <SwiperSlide >
            <Image className="!h-[384px] md:!w-[528px] w-full px-3 md:px-0 object-cover" src="/assets/images/portfolio/webp/base-boll-player.webp" width={528} height={384} alt="sliderImage" />
          </SwiperSlide>
          <SwiperSlide >
            <Image className="!h-[384px] md:!w-[528px] w-full px-3 md:px-0 object-cover" src="/assets/images/portfolio/webp/black-Suit-people.webp" width={528} height={384} alt="sliderImage" />
          </SwiperSlide>
        </Swiper>
        <div className=" flex justify-center items-center mt-12">
          <Button text='APPLY' classesbtn=" w-[105px]" />
        </div>
      </div>
    </>
  );
};

export default Work;