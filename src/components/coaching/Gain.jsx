import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import gainMan from '../../../public/assets/images/webp/coaching/gainMan.webp'

const Gain = () => {
  return (
    <div className='pt-[156px]'>
      <div className='container max-w-[1172px] px-4 mx-auto'>
         <div className='flex items-center flex-col lg:flex-row gap-[88px] mb-[82px]'>
                <div className=' flex flex-col items-center'>
                        <div className='border border-offGray p-4 max-w-[588px] mb-3'>
                                <div className='flex items-center gap-[14px] '>
                                        <div className='w-[34px] h-[37px] opacity-80 bg-lightBlack flex items-center justify-center '>
                                                <p className='font-bold text-2xl md:text-2xl1 leading-120 text-white'>1</p>
                                        </div>
                                                <h4 className='text-lightBlack font-bold text-2xl md:text-2xl1 leading-120 pb-2'>Strategic Business Planning</h4>
                        
                                </div>
                                                <p className='opacity-80 max-w-[503px] pl-12 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>Develop comprehensive business plans with clear strategies, target markets, and financial projections.</p>
                        </div>
                        <div className='border border-offGray p-4 max-w-[588px] mb-3'>
                                <div className='flex items-center gap-[14px] '>
                                        <div className='w-[34px] h-[37px] opacity-80 bg-lightBlack flex items-center justify-center '>
                                                <p className='font-bold text-2xl md:text-2xl1 leading-120 text-white'>2</p>
                                        </div>
                                                <h4 className='text-lightBlack font-bold text-2xl md:text-2xl1 leading-120 pb-2'>Market Analysis and Positioning</h4>
                        
                                </div>
                                                <p className='opacity-80 pl-12 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130 max-w-[509px]'>Conduct detailed market research to understand demand, competition, and potential customer bases.</p>
                        </div>
                        <div className='border border-offGray p-4 max-w-[588px] mb-3'>
                                <div className='flex items-center gap-[14px] '>
                                        <div className='w-[34px] h-[37px] opacity-80 bg-lightBlack flex items-center justify-center '>
                                                <p className='font-bold text-2xl md:text-2xl1 leading-120 text-white'>3</p>
                                        </div>
                                                <h4 className='text-lightBlack font-bold text-2xl md:text-2xl1 leading-120 pb-2'>Operational Excellence</h4>
                        
                                </div>
                                                <p className='opacity-80 pl-12 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>Implement best practices in project management and team building.</p>
                        </div>
                        <div className='border border-offGray p-4 max-w-[588px] mb-3'>
                                <div className='flex items-center gap-[14px] '>
                                        <div className='w-[34px] h-[37px] opacity-80 bg-lightBlack flex items-center justify-center '>
                                                <p className='font-bold text-2xl md:text-2xl1 leading-120 text-white'>4</p>
                                        </div>
                                                <h4 className='text-lightBlack font-bold text-2xl md:text-2xl1 leading-120 pb-2'>Financial Mastery</h4>
                        
                                </div>
                                                <p className='opacity-80 pl-12 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>Create robust financial plans, including budgeting, forecasting, and funding strategies.</p>
                        </div>
                        <div className='border border-offGray p-4 max-w-[588px] mb-3'>
                                <div className='flex items-center gap-[14px] '>
                                        <div className='w-[34px] h-[37px] opacity-80 bg-lightBlack flex items-center justify-center '>
                                                <p className='font-bold text-2xl md:text-2xl1 leading-120 text-white'>5</p>
                                        </div>
                                                <h4 className='text-lightBlack font-bold text-2xl md:text-2xl1 leading-120 pb-[10px]'>Marketing Strategy</h4>
                        
                                </div>
                                                <p className='opacity-80 pl-12 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>Utilize digital marketing, social media, and traditional marketing channels to maximize your reach.</p>
                        </div>
                </div>
                <div className='flex flex-col justify-center lg:justify-start'>
                <H2 className="text-3xl1 sm:text-4xl md:text-4xl1 capitalize flex text-center lg:text-start max-w-[398px] !leading-105 " heading="What You Will Gain from Allan's Coaching"/>
                <div className='flex justify-center lg:justify-start'>
                        <Image src={gainMan} alt='gainMan' className='pt-[60px] md:max-w-[504px] md:h-[643px]'/>
                </div>
                </div>
         </div>
      </div>
    </div>
  )
}

export default Gain
