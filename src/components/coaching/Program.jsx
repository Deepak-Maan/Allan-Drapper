import React from 'react'
import {  Heading } from '../common/Heading'
import Image from 'next/image'

const Program = () => {
  return (
    <div className='bg-gray py-12 sm:py-16 md:py-20 lg:py-[95px]'>
      <div className='container max-w-[1172px] px-4 mx-auto'>
      <Heading className="text-3xl1 sm:text-4xl md:text-4xl1 text-center after:left-1/2 after:-translate-x-1/2 after:!bg-lightBlack after:opacity-80 " heading="Coaching Programs"/>
           <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-[93px] pt-6 sm:pt-12 md:pt-[81px]'>
                <div className='flex flex-col'>
                  <Image src="/assets/images/coaching/svg/number.svg" alt='oneOnOne' width={64} height={64} className='mb-6'/>
                  <h3 className='mb-[10px] text-lightBlack font-bold text-2xl md:text-2xl1 leading-120'>One-on-One Coaching</h3>
                  <p className='opacity-80 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>Personalized coaching to tackle your business challenges and create a success roadmap.</p>
                </div>
                <div className='flex flex-col'>
                  <Image src="/assets/images/coaching/svg/group-people.svg" alt='groupPeople' width={64} height={64} className='mb-6'/>
                  <h3 className='mb-[10px] text-lightBlack font-bold text-2xl md:text-2xl1 leading-120'>Group Coaching</h3>
                  <p className='opacity-80 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>Access online courses and workshops on business growth and personal development. Learn and apply practical lessons.</p>
                </div>
                <div className='flex flex-col'>
                  <Image src="/assets/images/coaching/svg/laptop-work.svg" alt='laptopWork' width={64} height={64} className='mb-6'/>
                  <h3 className='mb-[10px] text-lightBlack font-bold text-2xl md:text-2xl1 leading-120'>Online Courses & Workshops</h3>
                  <p className='opacity-80 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>Explore diverse online courses for business growth and personal development. Learn, apply, succeed.</p>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Program
