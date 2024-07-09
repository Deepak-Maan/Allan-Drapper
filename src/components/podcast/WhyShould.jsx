import Link from 'next/link'
import React from 'react'
import WhyshouldCards from './WhyshouldCards'

const WhyShould = () => {
    return (
        <>
            <div className='pt-[50px]'>
                <div className='flex flex-row flex-wrap -mx-3 justify-between'>
                    <div className=' w-[53%] px-3'>
                        <h3 className='font-bold text-4xl1 leading-105 text-lightBlack'>Why should you have Allan on your show?</h3>
                        <p className='font-medium text-2xl leading-130 text-lightBlack opacity-80 mt-4'>
                            Simply put, Allan has amassed real and diversified sustainable wealth in a multitude of industries and can actually speak to the processes that it takes to achieve it.
                            <span className='block py-3'>He also has a relatable and heart warming story of incredibly humble beginning sleeping on the floor in a small town, to becoming an attorney, and then a pivotal moment where he took the ultimate risk, left his old life behind and bet on himself.</span>
                            Allan isn’t afraid too discuss his pitfalls and give real actionable advice on how to truly build sustainable wealth. Listeners gravitate towards his matter-of-fact delivery instantaneously towards scalability. Allan also puts his money where his mouth is and gives listeners access to his investment insights projects and philanthropy. Allan truly understand what it means to spread the wealth to everything he touches.
                        </p>
                        <div className='flex items-center font-medium text-2xl leading-130 mt-5'>
                            <p className='text-lightBlack opacity-80'>Press Inquiries:</p>
                            <Link href="mailto:Allan@Allandraper.com" className='text-orange'>Allan@Allandraper.com</Link>
                        </div>
                        <div className='flex items-center font-medium text-2xl leading-130 mt-3'>
                            <p className='text-lightBlack opacity-80'>Link:</p>
                            <Link href="Allandraper.com" className='text-orange'>Allandraper.com</Link>
                        </div>
                    </div>
                    <div className='w-[46%] px-3'>
                        <div className='flex gap-6'>
                            <div className='flex flex-col gap-6 max-w-[236px]'>
                                <WhyshouldCards/>
                            </div>
                            <div className='flex flex-col gap-6 max-w-[236px]'>
                                <WhyshouldCards/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyShould