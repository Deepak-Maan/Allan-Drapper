import Image from 'next/image'
import React from 'react'
import choosePeople from '../../../public/assets/images/coaching/webp/choosePeople.webp'

const Choose = () => {
  return (
    <div className='pt-[150px]'>
        <div className='container max-w-[1140px] mx-auto'>
                <div className='grid grid-cols-2 gap-[95px]'>
                <Image src={choosePeople} alt='choosePeople' width={464} height={603} />
                </div>
        </div>
    </div>
  )
}

export default Choose
