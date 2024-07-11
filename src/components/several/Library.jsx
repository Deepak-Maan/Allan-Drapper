import React from 'react'
import { libraryData } from '../common/Helper'
import Image from 'next/image'

const Library = () => {
        return (
                <div className='py-12 sm:py-16 md:py-20 lg:pt-[120px] lg:pb-[208px]'>
                        <div className='container mx-auto max-w-[1172px] px-4'>
                                <div className=''>
                                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                                                {libraryData.map((obj, index) => (
                                                        <div key={index} className='border border-offGray bg-white lg:max-w-[364px] mx-auto w-full'>
                                                                <Image src={obj.image} alt={obj.title} />
                                                                <div className='p-4'>
                                                                        <h4 className='text-lightBlack font-bold text-2xl md:text-2xl1 leading-120 mb-2'>{obj.title}</h4>
                                                                        <p className='opacity-80 max-w-[503px] mb-3 text-lightBlack font-medium text-lg sm:text-xl md:text-2xl leading-130'>{obj.description}</p>
                                                                        <a className='font-medium text-lg leading-130 text-skuBlue underline' href="/blog-details">Read more</a>
                                                                </div>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Library