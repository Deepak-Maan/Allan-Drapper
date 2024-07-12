import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import { ALLANBRAND } from '../common/Helper'

const AllanBrands = () => {
    return (
        <>
            <div className='sm:mt-10 mt-7 md:mt-[66px]'>
                <H2 heading="Allan's Brands" className="after:!bg-offBlue text-lightBlack flex justify-center after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-8 md:mb-[44px]" />
                <div className='flex items-center mt-11 flex-wrap justify-center xl:justify-start'>
                    {ALLANBRAND.map((card, index) => {
                        let imageClass = '';
                        switch (index) {
                            case 0:
                                imageClass = 'max-w-[88px] xl:max-w-[100px] max-h-[100px]';
                                break;
                            case 1:
                                imageClass = 'max-w-[200px] xl:max-w-[260px] max-h-[75px]';
                                break;
                            case 2:
                                imageClass = 'max-w-[150px] max-w-[175px] max-h-[96px]';
                                break;
                            case 3:
                                imageClass = 'max-w-[100px] max-w-[118px] max-h-[100px]';
                                break;
                        }
                        return (
                            <div key={index} className='lg:w-1/4 sm:w-1/3 w-1/2 max-w-[220px] xl:max-w-[284px] min-h-[100px] sm:min-h-[140px] lg:min-h-[170px] flex items-center justify-center'>
                                <Image
                                    src={card.src}
                                    width={card.width}
                                    height={card.height}
                                    alt='brandsImage'
                                    className={imageClass}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default AllanBrands
