import React from 'react'
import BrandLogo from '../common/BrandLogo'
import { Heading } from '../common/Heading'

const MyBrands = () => {
    return (
        <div className='xl:pt-[74px] py-12 sm:py-14 md:py-16 lg:py-18 xl:pb-[110px] '>
            <div className="container mx-auto px-3 ">
                <Heading heading="My Brands" className="after:!bg-offBlue after:left-1/2 text-center after:-translate-x-1/2 " />
            </div>
            <div className='md:mt-12 mt-8 lg:mt-16 xl:mt-20'>
                <BrandLogo />
            </div>
        </div>
    )
}

export default MyBrands
