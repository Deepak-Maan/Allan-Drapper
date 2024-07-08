import Image from 'next/image'
import React from 'react'
import choosePeople from '../../../public/assets/images/coaching/webp/choosePeople.webp'
import { H2 } from '../common/Heading'

const Choose = () => {
  return (
    <div className='pt-[150px]'>
        <div className='container max-w-[1140px] mx-auto'>
                <div className='grid grid-cols-2'>
                <Image src={choosePeople} alt='choosePeople' width={464} className='min-h-[603px]' />
                <div>
                        <H2 className="!text-4xl1" heading="Why Choose Allan Draper as Your Coach?"/>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Choose
