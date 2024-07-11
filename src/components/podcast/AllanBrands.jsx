import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import { AllanBrand } from '../common/Helper'

const AllanBrands = () => {
    return (
        <>
            <div className='sm:mt-10 mt-7 md:mt-[66px]'>
                <H2 heading="Allan's Brands" className="after:!bg-offBlue text-lightBlack flex justify-center after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-8 md:mb-[44px]" />
                <div className='flex items-center mt-11 flex-wrap justify-center lg:justify-start'>
                    {AllanBrand.map((card, index) => (
                        <div key={index} className='lg:w-1/4 sm:w-1/3 w-1/2 max-w-[284px] min-h-[80px] sm:min-h-[170px] flex items-center justify-center'>
                            <Image src={card.src} width={card.width} height={card.height} alt='brandsImage' className={`${card.imagewidth}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllanBrands