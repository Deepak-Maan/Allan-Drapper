import React from 'react'
import { H2 } from '../common/Heading'
import CommonButton from '../common/CommonButton'

const DoYou = () => {
    return (
        <>
        <div className='bg-doYou lg:py-[168px] md:py-20 sm:py-16 py-12 bg-center bg-cover bg-no-repeat max-w-[1920px] mx-auto'>
            <div className='container  mx-auto px-3 max-w-[1164px]'>
                <H2 heading="Do you have what it takes to be on The Allan Draper Show?" className="after:bg-yellow max-w-[685px] capitalize text-center mx-auto text-white flex justify-center after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-9" />
                <p className='font-medium text-lg sm:text-xl md:text-2xl leading-130 text-gray max-w-[774px] mx-auto text-center pb-8 opacity-80'>If you are a successful entrepreneur with a proven pathway to success that is wanting to talk candidly about your entrepreneurial journey, then we want to hear from you!</p>
               <div className='flex justify-center'> <CommonButton text='APPLY TO BE A GUEST'/></div>
                </div>
        </div>
        </>
    )
}

export default DoYou