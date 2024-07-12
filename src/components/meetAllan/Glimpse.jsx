import Image from "next/image";
import {  Heading } from '../common/Heading'

const Glimpse = () => {
    return (
        <section>
            <div className='max-w-[1164px] px-3 mx-auto  xl:pt-[152px]'>
                <div className="pb-8 sm:pb-12">
                    <Heading heading={"A Glimpse into Our Togetherness"} className={"text-center after:left-1/2 after:-translate-x-1/2 after:!bg-yellow"} /></div>
                <div className="pb-12 sm:pb-14 md:pb-16 lg:pb-12 xl:pt-5 xl:pb-[147px]">
                    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div className="col-span-1 !gap-4">
                            <Image
                                src="/assets/images/meetAllan/webp/men-in-city.webp"
                                alt="menInCity"
                                width={534}
                                height={905}
                                className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[452px] mb-4 lg:mb-6  md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[255px] object-cover h-auto" />
                            <Image
                                src="/assets/images/meetAllan/webp/brothers.webp"
                                alt="Brothers"
                                width={534}
                                height={905}
                                className="w-full min-h-[190px]  sm:w-[288px] sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[199px] object-cover h-auto" />
                        </div>
                        <div className="col-span-1">
                            <Image
                                src="/assets/images/meetAllan/webp/kid-play.webp"
                                alt="KidsPlay"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[509px] lg:h-[457px] xl:h-[479px] object-cover " />
                        </div>
                        <div className="col-span-1 xs:col-span-2 lg:col-span-1">
                            <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                                <Image
                                    src="/assets/images/meetAllan/webp/joint-family.webp"
                                    alt="AFamily"
                                    width={534}
                                    height={905}
                                    className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[255px] object-cover h-auto" />
                                <div className="grid grid-cols-2 gap-4 lg:gap-6 col-span-1">
                                    <Image
                                        src="/assets/images/meetAllan/webp/player.webp"
                                        alt="Players"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto" />
                                    <Image
                                        src="/assets/images/meetAllan/webp/couple.webp"
                                        alt="Couple"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>)
}

export default Glimpse