import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import ReviewSwiperCards from '../common/ReviewSwiperCards'

const ReviewSwiper = () => {
    return (
        <>
        <div className='xl:pt-40 xl:pb-[140px] lg:pt-12 md:pt-8 sm:pt-7 pt-6 lg:pb-24 md:pb-16 sm:pb-14 pb-12 overflow-hidden'>
            <div className='container  mx-auto px-3 max-w-[1164px]'>
                <H2 heading="Podcast Reviews" className="after:bg-yellow text-lightBlack flex justify-center after:left-1/2 after:-translate-x-1/2" />
                <ReviewSwiperCards />
                <Image
                    src="/assets/images/webp/podCast/podcastReviewBigImg.webp" alt='bigimage' width={1140} height={588} className='w-full max-h-[588px] h-full mt-7 sm:mt-12 object-cover md:mt-14 lg:mt-16 xl:mt-[91px]' />
            </div>
        </div>
        </>
    )
}

export default ReviewSwiper