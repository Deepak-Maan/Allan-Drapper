import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import ReviewSwiperCards from '../common/ReviewSwiperCards'

const ReviewSwiper = () => {
    return (
        <div className='lg:pt-40 lg:pb-[140px] md:py-20 sm:py-16 py-12 overflow-hidden'>
            <div className='container  mx-auto px-3 max-w-[1164px]'>
                <H2 heading="Podcast Reviews" className="after:bg-yellow text-lightBlack flex justify-center after:left-1/2 after:-translate-x-1/2" />
                <ReviewSwiperCards />
                <Image
                    src="/assets/images/webp/podCast/podcastReviewBigImg.webp" width={1140} height={588} className='w-full max-h-[588px] h-full mt-5 sm:mt-12 object-cover md:mt-16 lg:mt-20' />
            </div>
        </div>
    )
}

export default ReviewSwiper