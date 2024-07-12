"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { Heading } from '../common/Heading';
import { Pagination, Autoplay } from 'swiper/modules';

const Memories = () => {
    return (
        <section>
            <div className='max-w-[1164px] px-3 mx-auto'>
                <div className="pb-8 sm:pb-9">
                    <Heading heading={"Our Speaking memories"} className={"text-center capitalize after:left-1/2 after:-translate-x-1/2 after:!bg-white"} />
                </div>
                <div className="pb-12 sm:pb-14 mx-auto md:pb-16 xl:pt-5 lg:pb-24 xl:pb-[120px]">
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            speed: 0,
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay]} S
                        className='memories  max-w-[1164px]'
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Image
                                src="/assets/images/speaking/webp/singer.webp"
                                alt="Singers"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[505px] lg:h-[456px] xl:h-[424px] object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-rows-2 gap-4 lg:gap-6">
                                <Image
                                    src="/assets/images/speaking/webp/two-Person-Talking.webp"
                                    alt="MenTalking"
                                    width={534}
                                    height={905}
                                    className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto"
                                />
                                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                    <Image
                                        src="/assets/images/speaking/webp/singer-Men.webp"
                                        alt="SingerMen"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[360px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto"
                                    />
                                    <Image
                                        src="/assets/images/speaking/webp/a-Men-Singing.webp"
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
                                src="/assets/images/speaking/webp/reporter.webp"
                                alt="Reporter"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[505px] xl:min-w-[364px] lg:h-[456px] xl:h-[424px] object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/assets/images/speaking/webp/singer.webp"
                                alt="Singer"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[505px] lg:h-[456px] xl:h-[424px] object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-rows-2 gap-4 lg:gap-6">
                                <Image
                                    src="/assets/images/speaking/webp/two-Person-Talking.webp"
                                    alt="TwoPersontalking"
                                    width={534}
                                    height={905}
                                    className="w-full min-h-[190px] sm:w-[358px] sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto"
                                />
                                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                                    <Image
                                        src="/assets/images/speaking/webp/singer-Men.webp"
                                        alt="singermen"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[358px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto"
                                    />
                                    <Image
                                        src="/assets/images/speaking/webp/a-Men-Singing.webp"
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
                                src="/assets/images/speaking/webp/reporter.webp"
                                alt="reporter_Image"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[505px] lg:h-[456px] xl:w-[364px] xl:h-[424px] object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="custom-pagination "></div>
                </div>
            </div>
        </section>
    );
};

export default Memories;