import React from 'react'
import ProdcastVideoMap from '../common/ProdcastVideoMap'
import { H2 } from '../common/Heading'

const StopGoogling = () => {
    return (
        <div>
            <div className="container  mx-auto px-3 max-w-[1164px]">
                <H2 heading='Stop googling "How to become a millionaire" and listen to this show' className="after:bg-yellow max-w-[735px] mb-[76px] text-center mx-auto flex justify-center after:left-1/2 after:-translate-x-1/2" />
                <ProdcastVideoMap />
            </div>
        </div>
    )
}

export default StopGoogling