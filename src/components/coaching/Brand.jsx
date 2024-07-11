import BrandLogo from '../common/BrandLogo'
import { H2 } from '../common/Heading'
import React from 'react'

const Brand = () => {
        return (
                <div className='py-12 sm:py-16 md:py-20 lg:pt-[156px] lg:pb-[92px]'>
                        <div className='container mx-auto px-4'>
                        <H2 className="text-3xl1 sm:text-4xl md:text-4xl1 pt-3 !lg:pt-0 !text-center after:left-1/2 after:-translate-x-1/2 lg:text-start after:!bg-offBlue mb-[86px]" heading="My Brands"/>
                        <BrandLogo/>
                        </div>
                </div>
        )
}

export default Brand
