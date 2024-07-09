import Image from "next/image";
import { H2 } from '../common/Heading'

const Glimpse = () => {
    return (
        <section>
            <div className='max-w-[1164px] px-3 mx-auto  pt-12 sm:pt-16 md:pt-24 lg:pt-[152px]'>
                <H2 heading={"A Glimpse into Our Togetherness"} className={"text-center"} />
                <div className=" pt-12 pb-12 sm:pb-16 md:pb-24 lg:pb-[147px]">
                    <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                        <div class="col-span-1 !gap-4">
                            <Image
                                src="/assets/images/meetAllan/webp/meninCity.png"
                                alt="My Image"
                                width={534}
                                height={905}
                                className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[255px] object-cover h-auto" />
                            <Image
                                src="/assets/images/meetAllan/webp/brothers.png"
                                alt="My Image"
                                width={534}
                                height={905}
                                className="w-full min-h-[190px] sm:w-[288px]  sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[199px] object-cover h-auto" />
                        </div>
                        <div class="col-span-1">
                            <Image
                                src="/assets/images/meetAllan/webp/kidPlay.png"
                                alt="My Image"
                                width={534}
                                height={905}
                                className="w-full h-full md:h-[479px] xl:h-[479px] object-cover " />
                        </div>
                        <div class="col-span-1 xs:col-span-2 lg:col-span-1">
                            <div class="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
                                <Image
                                    src="/assets/images/meetAllan/webp/jointFamily.png"
                                    alt="My Image"
                                    width={534}
                                    height={905}
                                    className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[452px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[255px] object-cover h-auto" />
                                <div class="grid grid-cols-2 gap-4 lg:gap-6 col-span-1">
                                    <Image
                                        src="/assets/images/meetAllan/webp/player.png"
                                        alt="My Image"
                                        width={534}
                                        height={905}
                                        className="w-full min-h-[190px] sm:w-[288px] sm:h-[201px] md:w-[352px] md:h-[246px] lg:w-[309px] lg:h-[216px] xl:w-[364px] xl:h-[200px] object-cover h-auto" />
                                    <Image
                                        src="/assets/images/meetAllan/webp/couple.png"
                                        alt="My Image"
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