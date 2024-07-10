import React from 'react'
import { ProdcastVideoData } from './Helper'
import Image from 'next/image'
import { PlayIcon } from './Icons'
import Link from 'next/link'

const ProdcastVideoMap = () => {
    return (
        <>
          {ProdcastVideoData.map((data, index) => (
                    <div key={index} className='w-full border border-offGray p-3 sm:p-4 mb-4 sm:mb-6  ' >
                        <div className='flex flex-col md:flex-row gap-3 sm:gap-5'>
                            <Image className=' w-full md:w-[331px] max-h-[375px] h-full md:h-[198px] object-cover' src={data.img} alt="course's thumbnail" width={331} height={198} />
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-4 items-center">
                                        <p className='py-[3px] px-[10px] rounded-full bg-lightBlack text-yellow sm:text-base text-sm font-black leading-150'>{data.episodeNumber}</p>
                                        <p className='sm:text-base text-sm font-medium leading-150 text-offGray'>{data.date}</p>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <PlayIcon />
                                    </div>
                                </div>
                                <p className='text-lightBlack  text-2xl md:text-2xl1 font-bold leading-120 pb-2 sm:pb-[10px] pt-3 sm:pt-4'>{data.title}</p>
                                <p className='text-lg sm:text-xl md:text-2xl leading-130 font-medium text-lightBlack pb-3 sm:pb-4 md:pb-5'>{data.description}</p>
                                <Link href="#" className='text-lightBlack underline sm:text-base text-sm font-bold leading-150'>Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default ProdcastVideoMap