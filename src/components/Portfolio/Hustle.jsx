import Image from 'next/image'
import React from 'react'
import signature from '../../../public/assets/images/svg/portfolio/signature.svg'

const Hustle = () => {
  return (
    <div className=' max-w-[1140px] mx-auto px-3 py-[150px]'>
        <div className=' bg-hustle min-h-[469px] bg-coverbg-no-repeat bg-center flex flex-col justify-center items-center'>
           <p className=' text-6xl1 text-orange max-w-[729px] mx-auto text-center leading-110'>“Hustle until your haters ask if you’re hiring.”</p>
           <div className=' flex justify-center pt-8'>
               <Image className=' w-[299px]' src={signature} width={79} height={299} alt='signature' />
           </div>
        </div>
    </div>
  )
}

export default Hustle