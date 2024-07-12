import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import slick from '../../../public/assets/images/svg/portfolio/slickBarrier.svg'
import paramify from '../../../public/assets/images/svg/portfolio/paramify.svg'
import sky from '../../../public/assets/images/svg/portfolio/skyBlue.svg'

const Investments = () => {
  return (
    <div className=' max-w-[980px] mx-auto px-3   md:pb-[149px] sm:pb-[80px] pb-10'>
      <H2 className="text-center after:left-1/2 after:-translate-x-1/2" heading="Allan’s Investments"/>
      <div className=' flex flex-wrap sm:gap-20 gap-4 justify-center items-center pt-20'>
        <Image className=' duration-300 hover:scale-90' src={slick} width={256} height={103} alt='slick'/>
        <Image className='lg:py-16 md:py-10 py-2 duration-300 hover:scale-90' src={paramify} width={230} height={40} alt='slick'/>
        <Image className='lg:py-12 md:py-8 py-2 duration-300 hover:scale-90' src={sky} width={230} height={75} alt='slick'/>
      </div>
    </div>
  )
}

export default Investments  