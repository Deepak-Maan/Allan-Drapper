import React from 'react'
import { H2 } from '../common/Heading'
import ProdcastVideoMap from '../common/ProdcastVideoMap'
import CommonButton from '../common/CommonButton'

const ProdcastVideos = () => {
    return (
        <>
            <div className="container  mx-auto px-3 py-12 sm:py-14 md:py-16 lg:py-24 xl:pt-[154px] xl:pb-[98px] max-w-[1164px]">
                <H2 heading="Podcasts" className="after:bg-yellow flex justify-center after:left-1/2 after:-translate-x-1/2 mb-8 md:mb-14 lg:mb-20 xl:mb-[107px]" />
                <ProdcastVideoMap />
                <div className="flex flex-wrap gap-4 justify-center sm:mt-11">
                    <CommonButton text='BE A GUEST' classesbtn=' max-sm:w-full' />
                    <CommonButton text='HAVE ME ON YOUR SHOW' classesbtn='after:bg-white max-sm:w-full bg-white !hover:!text-yellow hover:border-yellow border border-lightBlack !text-lightBlack' />
                </div>
            </div>
        </>
    )
}

export default ProdcastVideos
