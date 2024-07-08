import React from 'react'
import { H2 } from '../common/Heading'
import ProdcastVideoMap from '../common/ProdcastVideoMap'

const ProdcastVideos = () => {
    return (
        <div>
            <div className="container  mx-auto px-3 max-w-[1164px]">
                <H2 heading="Podcasts" className="after:bg-yellow flex justify-center after:left-1/2 after:-translate-x-1/2" />
                <ProdcastVideoMap />
            </div>
        </div>
    )
}

export default ProdcastVideos
