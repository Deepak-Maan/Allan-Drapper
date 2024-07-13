"use client"
import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import { REVIEWDATA} from '../common/Helper';
import { BigInvertedComa, Star } from '../common/Icons';

const CustomerReviewCards
    = () => {
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
                className='md:!pt-20 !pt-10 sm:!pt-16 !pb-5 sm:!pb-8 px-4 mx-auto reviews max-w-[1030px]'
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

                {REVIEWDATA.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className='shadow-worldCard bg-white sm:pl-6 sm:pt-6 sm:pr-5 sm:pb-5 p-4 lg:max-w-[487px] w-full mx-auto min-h-[230px] sm:min-h-[240px] md:min-h-[322px] flex flex-col justify-between'>
                            <div>
                                <div className='flex items-center gap-1'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </div>
                                <p className='lg:max-w-[433px] font-medium text-lg sm:text-xl md:text-2xl leading-130 opacity-80 text-lightBlack mt-4'>{data.Review}</p>
                            </div>
                            <div className='flex justify-between'>
                                <div className='pt-8'>
                                    <p className='font-bold text-xl sm:text-2xl md:text-2xl1 !leading-120 text-lightBlack pb-[2px]'>{data.Customer}</p>
                                    <p className='font-medium text-lg sm:text-xl md:text-2xl !leading-120 text-offGray pb-[2px]'>{data.CustomerProfession}</p>
                                </div>
                                <span className='-mt-10'>
                                    <BigInvertedComa />
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }

export default CustomerReviewCards
    ;
