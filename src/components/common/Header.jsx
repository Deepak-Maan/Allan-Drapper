import React from 'react'
import Commonbtn from './CommonButton'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='bg-black bg-coachingHeaderBg bg-center bg-cover bg-no-repeat '>
      <Navbar />
      <div className='max-w-[1164px] mx-auto px-3 pt-[100px] min-h-[500px]'>
        <div className='flex flex-col flex-wrap items-center justify-center -mx-3'>
            <h1 className='font-bold text-5xl1 leading-110 text-white pb-4 text-center'>
            Coaching with Allan Draper
            </h1>
            <p className=' text-white text-center font-medium text-2xl leading-130 max-w-[601px]'>Welcome to Allan Draper's coaching, offering strategies, insights, and motivation to elevate your business and success.</p>
        </div>
      </div>
    </div>
  )
}

export default Header