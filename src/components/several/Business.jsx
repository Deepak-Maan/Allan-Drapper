import React from 'react'
import { H2 } from '../common/Heading'
import analyzeMan from '../../../public/assets/images/several/webp/analyzeMan.webp'
// import evaluateMan from '../../../public/assets/images/several/webp/evaluateMan.webp'
// import navigate from '../../../public/assets/images/several/webp/navigate.webp'
import Image from 'next/image'

const Business = () => {
        return (
                <div className='pt-[110px]'>
                        <div className='container max-w-[1140px] mx-auto px-3'>
                            <div className='flex gap-[32px]'>
                                <div className='pt-[55px]'>
                                <H2 className="!text-4xl1 text-center" heading="I Have Several Business Ideas. What Should I Do?"/>
                                <p className='pt-[32px] font-medium text-xl leading-130 mb-[71px]'>Published: 11 December, 2023</p>
                                <Image src={analyzeMan} alt='analyzeMan' className='max-w-[758px] min-h-[393px]'/>
                                </div>
                                <div className='w-[330px] h-[420px] p-[32px] border border-offGray'>
                                     <h5 className='text-lightBlack font-bold text-2xl1 leading-120'>Table of Contents</h5>
                                </div>
                            </div>
                        </div>
                </div>
        )
}

export default Business
