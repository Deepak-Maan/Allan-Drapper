import Link from 'next/link'
import React from 'react'
import WhyshouldCards from './WhyshouldCards'
import { WhyShouldcardData } from '../common/Helper';

const WhyShould = () => {
     // Split the card data into two parts
     const firstHalf = WhyShouldcardData.slice(0, 2);
    const secondHalf = WhyShouldcardData.slice(2);
    return (
        <>
            <div className='pt-[50px]'>
                <div className='flex flex-row flex-wrap -mx-3 justify-between'>
                    <div className='w-full lg:w-7/12 px-3'>
                        <h3 className='font-bold text-3xl1 sm:text-4xl md:text-4xl1 text-center lg:text-start !leading-105 text-lightBlack lg:max-w-[616px]'>Why should you have Allan on your show?</h3>
                        <p className='font-medium text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 mt-4 text-center lg:text-start lg:max-w-[616px]'>
                            Simply put, Allan has amassed real and diversified sustainable wealth in a multitude of industries and can actually speak to the processes that it takes to achieve it.
                            <span className='block py-1 sm:py-2 md:py-2.5'>He also has a relatable and heart warming story of incredibly humble beginning sleeping on the floor in a small town, to becoming an attorney, and then a pivotal moment where he took the ultimate risk, left his old life behind and bet on himself.</span>
                            Allan isn’t afraid too discuss his pitfalls and give real actionable advice on how to truly build sustainable wealth. Listeners gravitate towards his matter-of-fact delivery instantaneously towards scalability. Allan also puts his money where his mouth is and gives listeners access to his investment insights projects and philanthropy. Allan truly understand what it means to spread the wealth to everything he touches.
                        </p>
                        <div className='flex items-center font-medium text-lg sm:text-xl md:text-2xl leading-130 mt-2 sm:mt-3 md:mt-5 gap-1 justify-center lg:justify-start'>
                            <p className='text-lightBlack opacity-80'>Press Inquiries: </p> 
                            <Link href="mailto:Allan@Allandraper.com" className='text-orange'> Allan@Allandraper.com</Link>
                        </div>
                        <div className='flex items-center font-medium text-lg sm:text-xl md:text-2xl leading-130 mt-1.5 sm:mt-3 gap-1 justify-center lg:justify-start'>
                            <p className='text-lightBlack opacity-80'>Link: </p> 
                            <Link href="Allandraper.com" className='text-orange'> Allandraper.com</Link>
                        </div>
                    </div>
                    <div className='w-full lg:w-5/12 px-3 mt-6 lg:mt-0'>
                        <div className='flex lg:gap-6 lg:flex-row  gap-4 justify-center lg:justify-between'>
                            <div className='flex flex-col gap-4 lg:gap-6 max-w-[236px]'>
                                <WhyshouldCards cards={firstHalf} />
                            </div>
                            <div className='flex flex-col gap-4 lg:gap-6 max-w-[236px] sm:mt-12 lg:mt-[66px]'>
                                <WhyshouldCards cards={secondHalf} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyShould