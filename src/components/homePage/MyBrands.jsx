import React from 'react'
import BrandLogo from '../common/BrandLogo'
import { H2 } from '../common/Heading'

const MyBrands = () => {
    return (
        <div className='lg:pt-[74px] py-12 sm:py-16 md:py-20 lg:pb-[92px] '>
            <div className="container mx-auto px-3 ">
                <H2 heading="My Brands" className="after:!bg-offBlue after:left-1/2 text-center after:-translate-x-1/2 mb-[66px]" />
            </div>
            <BrandLogo />
        </div>
    )
}

export default MyBrands
