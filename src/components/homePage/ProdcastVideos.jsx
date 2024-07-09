import React from 'react'
import { H2 } from '../common/Heading'
import ProdcastVideoMap from '../common/ProdcastVideoMap'
import CommonButton from '../common/CommonButton'

const ProdcastVideos = () => {
    return (
        <>
            <div className="container  mx-auto px-3 max-w-[1164px]">
                <H2 heading="Podcasts" className="after:bg-yellow flex justify-center after:left-1/2 after:-translate-x-1/2 mb-[107px]" />
                <ProdcastVideoMap />
                <div className="flex gap-4">
                    <CommonButton text='BE A GUEST' />
                    <CommonButton text='BE A GUEST' classesbtn='after:bg-transparent bg-white !hover:!text-yellow hover:border-yellow border border-lightBlack !text-lightBlack' />
                </div>
            </div>
        </>
    )
}

export default ProdcastVideos
