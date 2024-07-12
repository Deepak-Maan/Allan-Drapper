import React from 'react'
import CommonButton from '../common/CommonButton'
import Image from 'next/image'
import Navbar from '../common/Navbar'

const HomeHeader = () => {
    return (
        <div className='bg-black overflow-hidden'>
            <Navbar />
            <div className="container xl:ml-auto mx-auto px-3 xl:max-w-[1290px] ">
                <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 sm:pt-[60px]">
                    <div className='my-auto'>
                        <h1 className=' text-4xl md:text-5xl lg:text-5xl1 font-bold !leading-105 max-w-[540px] lg:text-left text-center capitalize text-white'>Create Your Dream Life
                            through Entrepreneurship</h1>
                        <p className='text-lg sm:text-xl md:text-2xl !leading-140 text-white font-medium max-w-[613px] text-center lg:text-left py-4 md:pb-10 pt-4'>For the Creators. I will teach you how to build an extraordinary business and how to build wealth without sacrificing what matters most.</p>
                        <div className="flex lg:justify-start justify-center pb-8 lg:pb-0">
                            <CommonButton text='START NOW' />
                        </div>
                    </div>
                    <div className='relative  '>
                        <div className='absolute w-[400px] animate-pulse h-[400px] bg-yellow blur-[200px] top-[10%] left-[20%] z-0'></div>
                        <Image className='max-lg:mx-auto relative z-10' src="/assets/images/webp/homePage/allanHeaderImage.webp" height={670} width={594} alt='allan image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader
