import React from 'react'
import { ProdcastVideoData } from '../common/Helper'
import Image from 'next/image'
import Link from 'next/link'
import { PlayIcon } from '../common/Icons'
import { H2 } from '../common/Heading'
import CommonButton from '../common/CommonButton'

const ProdcastVideos = () => {
    return (
        <div>
            <div className="container  mx-auto px-3 max-w-[1164px]">
                <H2 heading="Podcasts" className="after:bg-yellow flex justify-center after:left-1/2 after:-translate-x-1/2 mb-[107px]" />
                {ProdcastVideoData.map((data, index) => (
                    <div key={index} className='w-full border border-offGray p-4 mb-6  ' >
                        <div className='flex flex-col md:flex-row gap-5'>
                            <Image className=' w-full md:w-[331px] h-[198px] object-cover' src={data.img} alt="course's thumbnail" width={331} height={198} />
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-4 items-center">
                                        <p className='py-[3px] px-[10px] rounded-full bg-lightBlack text-yellow text-base font-black leading-150'>{data.episodeNumber}</p>
                                        <p className='text-base font-medium leading-150 text-offGray'>{data.date}</p>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <PlayIcon />
                                    </div>
                                </div>
                                <p className='text-lightBlack text-2xl1 font-bold leading-120 pb-[10px] pt-4'>{data.title}</p>
                                <p className='text-2xl leading-130 font-medium text-lightBlack pb-5'>{data.description}</p>
                                <Link href="#" className='text-lightBlack underline text-base font-bold leading-150'>Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex gap-4">
                    <CommonButton text='BE A GUEST' />
                    <CommonButton text='BE A GUEST' />
                </div>
            </div>
        </div>
    )
}

export default ProdcastVideos
