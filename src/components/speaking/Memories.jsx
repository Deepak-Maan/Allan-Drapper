"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { H2 } from '../common/Heading';

const Memories = () => {
    return (
        <section>
            <div className='max-w-[1164px] px-3 mx-auto'>
                <div className="pb-8 sm:pb-9">
                    <H2 heading={"Our Speaking memories"} className={"text-center after:left-1/2 after:-translate-x-1/2 after:!bg-white"} />
                </div>
                <div className="pb-1 sm:pb-5 md:pb-8 xl:pt-5 lg:pb-5">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => `<span className="${className} custom-bullet"></span>`,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Image
                                src="/assets/images/webp/speaking/singer.png"
                                alt="Singers"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[505px] lg:h-[456px] xl:h-[479px] object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-rows-2 gap-4 lg:gap-6">
                                <Image
                                    src="/assets/images/webp/speaking/twoPersonTalking.png"
                                    alt="MenTalking"
                                    width={534}
                                    height={905}
                                    className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[255px] object-cover h-auto"
                                />
                                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                    <Image
                                        src="/assets/images/webp/speaking/singerMen.png"
                                        alt="SingerMen"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[360px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto"
                                    />
                                    <Image
                                        src="/assets/images/webp/speaking/aMenSinging.png"
                                        alt="menSinging"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[360px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/assets/images/webp/speaking/reporter.png"
                                alt="Reporter"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[505px] lg:h-[456px] xl:h-[479px] object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/assets/images/webp/speaking/singer.png"
                                alt="Singer"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[505px] lg:h-[456px] xl:h-[479px] object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-rows-2 gap-4 lg:gap-6">
                                <Image
                                    src="/assets/images/webp/speaking/twoPersonTalking.png"
                                    alt="TwoPersontalking"
                                    width={534}
                                    height={905}
                                    className="w-full min-h-[190px] sm:w-[358px] sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[255px] object-cover h-auto"
                                />
                                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                    <Image
                                        src="/assets/images/webp/speaking/singerMen.png"
                                        alt="singermen"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[358px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto"
                                    />
                                    <Image
                                        src="/assets/images/webp/speaking/aMenSinging.png"
                                        alt="Mensinging"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/assets/images/webp/speaking/reporter.png"
                                alt="reporter_Image"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[505px] lg:h-[456px] xl:h-[479px] object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Memories;
