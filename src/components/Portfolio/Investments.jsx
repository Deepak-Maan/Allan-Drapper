import React from 'react'
import { Heading } from '../common/Heading'
import Image from 'next/image'


const Investments = () => {
  return (
    <div className=' max-w-[980px] mx-auto px-3 md:pt-[155px] sm:pt-[80px] pt-10 md:pb-[149px] sm:pb-[80px] pb-10'>
      <Heading className="text-center after:left-1/2 after:-translate-x-1/2" heading="Allan’s Investments" />
      <div className=' flex flex-wrap sm:gap-20 gap-4 justify-center items-center sm:pt-20 pt-9'>
        <Image className=' duration-300 hover:scale-90' src="/assets/images/portfolio/svg/slick-barrier.svg" width={256} height={103} alt='slick' />
        <Image className='lg:py-16 md:py-10 py-2 duration-300 hover:scale-90' src="/assets/images/portfolio/svg/paramify.svg" width={230} height={40} alt='slick' />
        <Image className='lg:py-12 md:py-8 py-2 duration-300 hover:scale-90' src="/assets/images/portfolio/svg/sky-blue.svg" width={230} height={75} alt='slick' />
      </div>
    </div>
  )
}

export default Investments  