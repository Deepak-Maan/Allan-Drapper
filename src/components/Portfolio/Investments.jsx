import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import slick from '../../../public/assets/images/webp/portfolio/svg/slickBarrier.svg'
import paramify from '../../../public/assets/images/webp/portfolio/svg/paramify.svg'
import sky from '../../../public/assets/images/webp/portfolio/svg/skyBlue.svg'

const Investments = () => {
  return (
    <div className=' max-w-[980px] mx-auto px-3 pt-5 pb-[149px]'>
      <H2 className="text-center" heading="Allan’s Investments"/>
      <div className=' flex flex-wrap gap-20 justify-center items-center pt-14'>
        <Image src={slick} width={256} height={103} alt='slick'/>
        <Image className='py-16' src={paramify} width={230} height={40} alt='slick'/>
        <Image className='py-12' src={sky} width={230} height={75} alt='slick'/>
      </div>
    </div>
  )
}

export default Investments