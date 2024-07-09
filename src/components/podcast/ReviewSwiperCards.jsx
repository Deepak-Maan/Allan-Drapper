"use client"
import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperCards } from '../common/Helper'; 
import { BigInvertedComaIcon, StartIcon } from '../common/Icons';

SwiperCore.use([Pagination, Autoplay]);

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
                delay: 300,  
                disableOnInteraction: true,  
            }}
            className='max-w-[1030px] !pt-20 !pb-8 mx-auto'
        >
            {SwiperCards.map((card, index) => (
                <SwiperSlide key={index}>
                    <div className='shadow-worldCard bg-white pl-6 pt-6 pr-5 pb-5 max-w-[487px] min-h-[312px] mx-auto flex flex-col justify-between'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <StartIcon />
                                <StartIcon />
                                <StartIcon />
                                <StartIcon />
                                <StartIcon />
                            </div>
                            <p className='max-w-[438px] font-medium text-2xl leading-130 opacity-80 text-lightBlack mt-4'>
                                <span className='block'>{card.linefirst}</span>
                                <span className='block'>{card.linesecond}</span>
                                <span className='block'>{card.linethird}</span>
                                <span className='block'>{card.linefourth}</span>
                                <span className='block'>{card.linefifth}</span>
                            </p>
                        </div>
                        <div className='flex items-end justify-between'>
                            <p className='font-bold text-2xl1 leading-120 text-lightBlack pb-[2px]'>{card.name}</p>
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
