import React from 'react'
import { H2 } from '../common/Heading'
import Image from "next/image";
import { Bluesquare } from '../common/Icons';

const Keynote = () => {
    return (
        <section>
            <div className='max-w-[1164px] px-3 mx-auto py-12 sm:py-16 md:py-20 lg:py-[120px]'>
                <div className="flex flex-col-reverse md:flex-row items-center gap-5  justify-between">
                    <div className='border-gray border-[10px] md:border-[20px]'>
                    <Image
                        src="/assets/images/webp/speaking/keynoteMen.webp"
                        alt="keyNote"
                        width={464}
                        height={603}
                        className="md:max-w-[350px] lg:max-w-[464px] md:max-h-[500px] object-cover lg:max-h-[603px] "
                    /></div>
                    <div className='max-w-[580px]'>
                        <H2 heading={"Meet Allan Draper: Your Keynote Speaker Solution"} className={"after:bg-yellow "} />
                        <p className='text-2xl font-medium !leading-120 max-w-[560px] mt-8 lg:mt-12 mb-0 text-lightBlack opacity-80'>Confession: I&apos;m just an ordinary achiever. Yet, extraordinary accomplishments include...</p>
                        <div className="flex gap-3 my-3 lg:my-4 ">
                            <span><Bluesquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 font-bold'>Remarkable achievements include five 8+ figure businesses.</p>

                        </div>
                        <div className="flex gap-3 mb-3 lg:mb-4 ">
                            <span><Bluesquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 font-bold max-w-[544px]'>$100MM+ business empire grown.</p>

                        </div>
                        <div className="flex gap-3 mb-3 lg:mb-4 ">
                            <span><Bluesquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 font-bold'>
                                Network with A-listers like Shaquille O&apos;Neal, Drew Brees, and David Melzer.</p>

                        </div>
                        <div className="flex gap-3 mb-3 lg:mb-4 ">
                            <span><Bluesquare /></span>

                            <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 font-bold'>
                                400+ restaurants launched.</p>
                        </div>
                    </div>
                </div></div>
        </section>
    )
}

export default Keynote