import React from 'react'
import { Heading } from '../common/Heading'
import Image from 'next/image'

const WhoAllan = () => {
    return (
        <div className='max-lg:bg-gray lg:bg-whoAllan bg-no-repeat bg-top sm:bg-cover xl:bg-contain pt-12 sm:pt-14 md:pt-16 lg:pt-24 xl:pt-[250px]'>
            <div className="container mx-auto px-3 max-w-[1104px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='flex justify-center lg:justify-start'>
                        <div>
                            <Heading heading="Who is Allan Draper ?" className="text-center lg:text-left after:left-1/2 max-lg:after:-translate-x-1/2 lg:after:left-0" />
                            <p className=' pt-16 mt-1 text-lg !leading-130 sm:text-xl text-center lg:text-left md:text-2xl font-medium max-w-[526px] text-lightBlack opacity-80 pb-5'>Allan’s story may sound familiar. It’s probably a lot like yours. Allan grew up in home that had very few financial resources. But there was something inside him. Something that yearned for more. Something that made him want to extract every last drop out of his potential. Allan is on a mission to help 10,000 people make short-term sacrifices to build businesses and wealth. Are you a creator?</p>
                            <Image className='sm:pb-10 md:pb-[77px] max-lg:mx-auto' src="/assets/images/homePage/svg/allan-sign.svg" width={299} height={79} alt="allan's signature" />
                        </div>
                    </div>
                    <div className=' mb-12 sm:mb-[70px] '>
                        <Image className='mx-auto mt-10' src="/assets/images/homePage/webp/who-allan.webp" width={503} height={603} alt="allan draper" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoAllan
