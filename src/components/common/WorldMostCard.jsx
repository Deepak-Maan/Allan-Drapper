import React from 'react'
import CommonButton from './Button'
import { PODCASTS } from './Helper'
import Image from 'next/image'

const WorldMostCard = () => {
  return (
    <>
      {PODCASTS.map((podcast) => (
        <div key={podcast.id} className='w-full sm:w-1/2 lg:w-1/3 px-3 pt-4 md:pt-6'>
          <div className='max-w-[364px] mx-auto lg:mx-0 w-full h-full p-4 sm:p-5 lg:py-[31px] flex flex-col justify-center items-center border border-solid hover:border-transparent bg-white hover:shadow-worldCard duration-300 ease-in-out border-offGray'>
            <Image src={podcast.src} width={50} height={50} alt='podcast' className={`${podcast.img}`} />
            <p className='pt-3 sm:pt-4 md:pt-6 font-bold text-2xl md:text-2xl1 mb-2 sm:mb-4'>{podcast.title}</p>
            <CommonButton text='LISTEN' />
          </div>
        </div>
      ))}
    </>
  )
}

export default WorldMostCard