import React from 'react'
import { H2 } from '../common/Heading'
import Image from "next/image";

const AllanStory = () => {
    return (
        <div>
            <div className='max-w-[1164px] px-3 mx-auto pb-12 sm:pb-16 md:pb-20  lg:pt-[63px] lg:pb-[104px]'>
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className='xl:pt-7'>
                        <div className='mb-8 sm:mb-12'>
                            <H2 heading={"Who is Allan Draper ?"} /></div>
                        <p className='text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack  opacity-80 fonr-bold max-w-[443px]'>Allan’s story may sound familiar. It’s probably a lot like yours. Allan grew up in home that had very few financial resources. But there was something inside him. Something that yearned for more. Something that made him want to extract every last drop out of his potential. Allan is on a mission to help 10,000 people make short-term sacrifices to build businesses and wealth. Are you a creator?</p>
                    </div>
                    <Image
                        src="/assets/images/webp/meetAllan/allanStory.webp"
                        alt="My Image"
                        width={611}
                        height={594}
                        className="md:max-w-[400px] lg:max-w-[464px] md:max-h-[594px] object-cover lg:min-w-[611px]  !xl:min-h-[594px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default AllanStory