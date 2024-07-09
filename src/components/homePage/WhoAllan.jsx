import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'

const WhoAllan = () => {
    return (
        <div className='bg-whoAllan bg-no-repeat bg-cover xl:bg-contain pt-[250px]'>
            <div className="container mx-auto px-3 max-w-[1104px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='order-2 lg:order-1'>
                        <H2 heading="Who is Allan Draper ?" />
                        <p className=' pt-12 mt-1 text-base font-medium max-w-[526px] text-lightBlack opacity-80 pb-5'>Allan’s story may sound familiar. It’s probably a lot like yours. Allan grew up in home that had very few financial resources. But there was something inside him. Something that yearned for more. Something that made him want to extract every last drop out of his potential. Allan is on a mission to help 10,000 people make short-term sacrifices to build businesses and wealth. Are you a creator?</p>
                        <Image className='pb-[77px]' src="/assets/images/webp/homePage/allanSignature.png" width={299} height={79} alt="allan's signature" />
                    </div>
                    <div className=' mb-[70px] order-1 lg:order-2'>
                        <Image className='mx-auto mt-8' src="/assets/images/webp/homePage/whoAllanImage.png" width={380} height={450} alt="allan draper" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoAllan
