import React from 'react'
import ProdcastVideoMap from '../common/ProdcastVideoMap'
import { H2 } from '../common/Heading'

const StopGoogling = () => {
    return (
        <>
            <div className="container  mx-auto px-3 max-w-[1164px] xl:pt-[120px] xl:pb-[116px] lg:pt-24 md:pt-16 lg:pb-[72px] sm:pt-14 md:pb-10 pt-12 pb-8">
                <H2 heading='Stop googling "How to become a millionaire" and listen to this show' className="after:bg-yellow mb-7 sm:mb-10 md:mb-[76px] max-w-[735px] mx-auto text-center flex justify-center after:left-1/2 after:-translate-x-1/2" />
                <ProdcastVideoMap />
            </div>
        </>
    )
}

export default StopGoogling