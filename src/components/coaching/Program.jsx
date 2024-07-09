import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import oneOnOne from '../../../public/assets/images/svg/coaching/oneOnOne.svg'
import groupPeople from '../../../public/assets/images/svg/coaching/groupPeople.svg'
import laptopWork from '../../../public/assets/images/svg/coaching/laptopWork.svg'

const Program = () => {
  return (
    <div className='bg-gray py-[95px]'>
      <div className='container max-w-[1140px] px-3 mx-auto'>
      <H2 className="!text-4xl1 text-center" heading="Coaching Programs"/>
           <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-[93px] pt-[61px]'>
                <div className='flex flex-col'>
                  <Image src={oneOnOne} alt='oneOnOne' width={64} height={64} className='mb-6'/>
                  <h3 className='mb-[10px] text-lightBlack font-bold text-2xl1 leading-120'>One-on-One Coaching</h3>
                  <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130'>Personalized coaching to tackle your business challenges and create a success roadmap.</p>
                </div>
                <div className='flex flex-col'>
                  <Image src={groupPeople} alt='groupPeople' width={64} height={64} className='mb-6'/>
                  <h3 className='mb-[10px] text-lightBlack font-bold text-2xl1 leading-120'>Group Coaching</h3>
                  <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130'>Access online courses and workshops on business growth and personal development. Learn and apply practical lessons.</p>
                </div>
                <div className='flex flex-col'>
                  <Image src={laptopWork} alt='laptopWork' width={64} height={64} className='mb-6'/>
                  <h3 className='mb-[10px] text-lightBlack font-bold text-2xl1 leading-120'>Online Courses & Workshops</h3>
                  <p className='opacity-80 text-lightBlack font-medium text-2xl leading-130'>Explore diverse online courses for business growth and personal development. Learn, apply, succeed.</p>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Program
