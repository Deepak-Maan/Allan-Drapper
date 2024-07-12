import React from 'react'
import Navbar from './Navbar'
import CommonButton from './Button'
import Image from 'next/image'

const Header = (header) => {
    return (
        <div className={`${header.background} bg-cover bg-center bg-no-repeat lg:min-h-[500px] max-w-[1920px] mx-auto`}>
            <Navbar />
            <div className={`max-w-[1164px] mx-auto px-3 ${header.paddingYclass}`}>
                <div className={`${header.content}`}>
                    <div className='text-white'>
                        <h1 className={`font-bold text-4xl1 md:text-5xl lg:text-5xl1 leading-110 text-center ${header.headingclass}`}>
                            {header.heading}
                        </h1>
                        <p className={`${header.paraclass} font-medium text-lg sm:text-xl md:text-2xl leading-130 text-center mx-auto pt-4`}>{header.para}</p>
                    </div>
                    <div className={`${header.button} hidden md:mt-0 mt-6`}><CommonButton text={header.btntext} /></div>
                </div>
                <span className={`${header.signature} hidden mt-10`}>
                    <Image
                        src="/assets/images/meetAllan/svg/sign.svg" width={308} height={79} alt='sign' />
                </span>
            </div>
        </div>
    )
}

export default Header