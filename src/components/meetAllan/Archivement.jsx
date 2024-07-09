import React from 'react'
import { H2 } from '../common/Heading'
import Image from "next/image";
import { Bluesquare } from '../common/Icons';

const Archivement = () => {
    return (
        <section>
            <div className='max-w-[1164px] px-3 mx-auto py-12 sm:py-16 md:py-20 lg:pt-[150px] lg:pb-[93px]'>
                <div className="flex flex-col-reverse md:flex-row items-center gap-5  justify-between">
                    <Image
                        src="/assets/images/webp/meetAllan/archivementMen.webp"
                        alt="My Image"
                        width={464}
                        height={603}
                        className="md:max-w-[400px] lg:max-w-[464px] md:max-h-[500px] object-cover lg:max-h-[603px] "
                    />
                    <div>
                        <H2 heading={"Allan's Top Achievements"} />
                        <div className="flex gap-3 mb-4 mt-8">
                            <span><Bluesquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 fonr-bold'>Married for 16 years, 3 amazing children</p>

                        </div>
                        <div className="flex gap-3 mb-4 ">
                            <span><Bluesquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 fonr-bold max-w-[544px]'>Has built several multimillion dollar companies from scratch in industries like home services, digital marketing, real estate, legal services.</p>

                        </div>
                        <div className="flex gap-3 mb-4 ">
                            <span><Bluesquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 fonr-bold'>
                                Built a multimillion dollar company in less than a year</p>

                        </div>
                        <div className="flex gap-3 mb-4 ">
                            <span><Bluesquare /></span>

                            <p className='text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 fonr-bold'>
                                20 business partners, many of who are millionaires</p>
                        </div>
                    </div>
                </div></div>
        </section>
    )
}

export default Archivement