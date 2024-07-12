import React from 'react'
import { ProdcastVideoData } from './Helper'
import Image from 'next/image'
import { PlayIcon } from './Icons'
import Link from 'next/link'

const ProdcastVideoMap = () => {
    return (
        <>
            {ProdcastVideoData.map((data, index) => (
                <div key={index} className='w-full border border-offGray p-4 mb-4 mb:mb-6 xl:max-h-[230px]' >
                    <div className='flex flex-col md:flex-row gap-5 w-full'>
                        <Image className=' w-full md:w-[331px] max-h-[375px] my-auto h-full md:h-[198px] object-cover' src={data.img} alt="course's thumbnail" width={331} height={198} />
                        <div>
                            <div className="flex items-center justify-between w-full">
                                <div className="flex gap-4 items-center">
                                    <p className='py-[3px] px-[10px] rounded-full bg-lightBlack text-yellow text-base font-black leading-150'>{data.episodeNumber}</p>
                                    <p className='text-base font-medium leading-150 text-offGray'>{data.date}</p>
                                </div>
                                <div className='cursor-pointer md:-mr-[1%] xl:-mr-[9%]'>
                                    <PlayIcon />
                                </div>
                            </div>
                            <p className='text-lightBlack text-2xl sm:text-2xl1 font-bold leading-120 pb-[10px] pt-4'>{data.title}</p>
                            <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl leading-130 font-medium text-lightBlack pb-5 max-w-[695px]'>{data.description}</p>
                            <Link href="#" className='text-lightBlack underline text-base font-bold leading-150'>Read More</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProdcastVideoMap