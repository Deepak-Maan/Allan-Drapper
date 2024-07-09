import React from 'react'
import { H2 } from '../common/Heading'
import Image from "next/image";

const AllanStory = () => {
    return (
        <div>
            <div className='max-w-[1164px] px-3 mx-auto pb-12 sm:pb-16 md:pb-20  lg:pt-[63px] lg:pb-[94px]'>
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <div>
                        <H2 heading={"Who is Allan Draper ?"} />
                        <p className='text-2xl leading-130 text-lightBlack mt-8 opacity-80 fonr-bold max-w-[443px]'>Allan’s story may sound familiar. It’s probably a lot like yours. Allan grew up in home that had very few financial resources. But there was something inside him. Something that yearned for more. Something that made him want to extract every last drop out of his potential. Allan is on a mission to help 10,000 people make short-term sacrifices to build businesses and wealth. Are you a creator?</p>
                    </div>
                    <Image
                        src="/assets/images/meetAllan/webp/allanStory.png"
                        alt="My Image"
                        width={611}
                        height={594}
                        className="md:max-w-[400px] lg:max-w-[464px] md:max-h-[500px] object-cover lg:max-h-[603px] cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default AllanStory