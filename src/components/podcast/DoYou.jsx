import React from 'react'
import { H2 } from '../common/Heading'
import CommonButton from '../common/CommonButton'

const DoYou = () => {
    return (
        <div className='bg-doYou lg:py-[168px] md:py-20 sm:py-16 py-12 bg-center bg-cover bg-no-repeat'>
            <div className='container  mx-auto px-3 max-w-[1164px]'>
                <H2 heading="Do you have what it takes to be on The Allan Draper Show?" className="after:bg-yellow max-w-[685px] text-center mx-auto text-white flex justify-center after:left-1/2 after:-translate-x-1/2 mb-[36px]" />
                <p className='font-medium text-2xl leading-130 text-gray max-w-[774px] mx-auto text-center pb-8 opacity-80'>Boasting over 70,000 downloads in its infancy with guests like David Meltzer, Jeff Fenster, and Larry Hagner; the Allan Draper show cuts out the noise of entrepreneurship and addresses real business stories and actionable information about scaling businesses to 8+ figures from guests who have actually done it!</p>
               <div className='flex justify-center'> <CommonButton text='Apply  to be a guest'/></div>
                </div>
        </div>
    )
}

export default DoYou