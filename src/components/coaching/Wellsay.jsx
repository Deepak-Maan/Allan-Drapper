import React from 'react'
import ReviewSwiperCards from "@/components/common/ReviewSwiperCards";
import { H2 } from '../common/Heading'


const Wellsay = () => {
  return (
    <div className='pt-12 sm:pt-16 md:pt-[83px]'>
      <div className='container mx-auto px-3 max-w-[1080px]'>
      <H2 className="text-3xl1 sm:text-4xl md:text-4xl1 !text-center after:left-1/2 after:-translate-x-1/2 max-w-[476px] mx-auto capitalize after:bg-yellow" heading="Well, that was nice of you to say!" />
      <ReviewSwiperCards/>
      </div>
    </div>
  )
}

export default Wellsay
