"use client"
import Image from 'next/image'
import React from 'react'
import signature from '../../../public/assets/images/portfolio/svg/signature.svg'

const Hustle = () => {
  return (
    <div className=' max-w-[1140px] mx-auto px-3 md:py-[150px] sm:py-[70px] py-8'>
        <div className=' bg-hustle sm:min-h-[469px] min-h-[253px] bg-coverbg-no-repeat bg-center flex flex-col justify-center items-center'>
           <p className='sm:text-6xl1 text-4xl text-orange max-w-[729px] mx-auto text-center leading-110'>“Hustle until your haters ask if you’re hiring.”</p>
           <div className=' flex justify-center sm:pt-8 pt-4'>
               <Image className=' sm:w-[299px] w-[200px]' src={signature} width={79} height={299} alt='signature' />
           </div>
        </div>
    </div>
  )
}

export default Hustle