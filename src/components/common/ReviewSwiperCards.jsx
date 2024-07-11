"use client"
import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperCards } from './Helper';
import { BigInvertedComaIcon, StartIcon } from './Icons';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';

const ReviewSwiperCards = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                speed: 0,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className='md:!pt-20 !pt-10 sm:!pt-16 !pb-5 sm:!pb-8 px-4 !mx-auto reviews max-w-[1018px]'
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
            }}
        >
            {SwiperCards.map((card, index) => (
                <SwiperSlide key={index}>
                    <div className='shadow-worldCard bg-white sm:pl-6 sm:pt-6 sm:pr-5 sm:pb-5 p-4 max-w-[650px] lg:max-w-[487px] w-full min-h-[230px] sm:min-h-[240px] md:min-h-[312px] mx-auto flex flex-col justify-between'>
                        <div className='text-lightBlack'>
                            <div className='flex items-center gap-1'>
                                <StartIcon />
                                <StartIcon />
                                <StartIcon />
                                <StartIcon />
                                <StartIcon />
                            </div>
                            <p className='lg:max-w-[438px] font-medium text-lg sm:text-xl md:text-2xl leading-130 opacity-80 mt-4'>
                                <span className='block'>{card.linefirst}</span>
                                <span className='lg:block'>{card.linesecond}</span>
                                <span className='lg:block'>{card.linethird}</span>
                                <span className='lg:block'>{card.linefourth}</span>
                                <span className='lg:block'>{card.linefifth}</span>
                            </p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <p className='font-bold text-xl sm:text-2xl md:text-2xl1 leading-120 text-lightBlack pb-[2px]'>{card.name}</p>
                            <span>
                                <BigInvertedComaIcon />
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default ReviewSwiperCards;
