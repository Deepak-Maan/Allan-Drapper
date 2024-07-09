import React from 'react'
import { H2 } from '../common/Heading'
import WorldMostCard from '../common/WorldMostCard'

const WorldMost = () => {
    return (
        <div>
            <div className="container  mx-auto px-3 max-w-[1164px] lg:pb-[140px] md:pb-20 sm:pb-16 pb-12">
                <H2 heading="World's Most Inspiring Entrepreneurs" className="after:bg-yellow flex justify-center after:left-1/2 after:-translate-x-1/2 mb-[107px]" />
                <p className='font-medium text-2xl leading-130 text-lightBlack text-center pb-[26px] opacity-80'>Boasting over 70,000 downloads in its infancy with guests like David Meltzer, Jeff Fenster, and Larry Hagner; the Allan Draper show cuts out the noise of entrepreneurship and addresses real business stories and actionable information about scaling businesses to 8+ figures from guests who have actually done it!</p>
                <div className='flex flex-wrap flex-row -mx-3 '>
                    <WorldMostCard/>
                </div>
            </div>
        </div>
    )
}

export default WorldMost