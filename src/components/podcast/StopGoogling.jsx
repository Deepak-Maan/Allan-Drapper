import React from 'react'
import ProdcastVideoMap from '../common/ProdcastVideoMap'
import { H2 } from '../common/Heading'

const StopGoogling = () => {
    return (
        <div>
            <div className="container  mx-auto px-3 max-w-[1164px] lg:pt-[120px] lg:pb-[100px] md:pt-20 md:pb-10 sm:pt-16 sm:pb-6 pt-12 pb-2">
                <H2 heading='Stop googling "How to become a millionaire" and listen to this show' className="after:bg-yellow mb-[36px] text-center flex justify-center after:left-1/2 after:-translate-x-1/2" />
                <ProdcastVideoMap />
            </div>
        </div>
    )
}

export default StopGoogling