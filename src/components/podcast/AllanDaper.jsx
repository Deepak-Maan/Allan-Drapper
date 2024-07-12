import React from 'react'
import {  Heading } from '../common/Heading'
import Image from 'next/image'
import { ALLANDAPPERIMG } from '../common/Helper'
import WhyShould from './WhyShould'
import AllanBrands from './AllanBrands'

const AllanDaper = () => {
    return (
        <>
        <div className='lg:pt-[76px] md:py-16 sm:py-14 py-12 lg:pb-24 xl:pb-[124px] bg-gray'>
            <div className='lg:pb-3 container  mx-auto px-3 max-w-[1164px]'>
                <Heading heading="Allan Draper" className="after:bg-yellow text-lightBlack flex justify-center after:left-1/2 after:-translate-x-1/2 mb-8 sm:mb-10 md:mb-[57px]" />
                <div className='flex flex-row justify-center items-center flex-wrap gap-3 sm:gap-6 lg:gap-0'>
                    <div className='flex items-center border-r border-solid border-black h-[18px]'>
                        <p className='font-medium text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 pr-3 lg:pr-6'>ANGEL INVESTOR</p>
                    </div>
                    <div className='flex items-center border-r border-solid border-black h-[18px]'>
                        <p className='font-medium text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 px-3 lg:px-6'>SERIAL ENTREPRENEUR</p>
                    </div>
                    <div className='flex items-center border-r border-solid border-black h-[18px]'>
                        <p className='font-medium text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 px-3 lg:px-6'>FAMILY MAN</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-medium text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack opacity-80 pl-3 lg:pl-6'>VISIONARY</p>
                    </div>
                </div>
                <div className='flex flex-wrap flex-row -mx-3 md:mt-6 justify-center md:justify-start'>
                    {ALLANDAPPERIMG.map((podcast) => (
                        <div key={podcast.id} className='sm:w-1/2 md:w-1/3 px-3 mt-3 sm:mt-4 md:mt-0'>
                            <div className='w-full h-full md:max-w-[364px] max-w-[280px] max-h-[275px] md:max-h-[324px] overflow-hidden group mx-auto md:mx-0'>
                                <Image src={podcast.src} width={364} height={324} alt={podcast.alt} className='group-hover:scale-110 md:max-w-[364px] max-w-[280px] max-h-[275px] md:max-h-[324px] w-full h-full duration-300 ease-in-out'/>
                            </div>
                        </div>
                    ))}
                </div>
                <WhyShould/>
                <AllanBrands/>
            </div>
        </div>
        </>
    )
}

export default AllanDaper