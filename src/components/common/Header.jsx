import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <div className='max-w-[1164px] mx-auto px-3 pt-[60px]'>
        <div className='flex flex-row flex-wrap -mx-3'>
          <div className='w-1/2 px-3'>
            <h1 className='font-bold text-5xl1 leading-110 text-white'>
              Create Your Dream Life through Entrepreneurship
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header