import React from 'react'

const Appearnce = () => {
    return (
        <div className='bg-darkGray'>
            <div className="container mx-auto px-3 md:pt-20 md:pb-24 sm:pt-16 sm:pb-20 pt-12 pb-16 lg:py-[111px] max-w-[758px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-12 sm:gap-10 md:gap-0 md:grid-cols-3">
                    <div>
                        <p className='text-5xl text-yellow text-center pb-2'>500+ </p>
                        <p className=' text-2xl font-medium text-center after:bg-yellow text-gray headingUnderline'>Podcast appearances</p>
                    </div>
                    <div>
                        <p className='text-5xl text-offBlue text-center pb-2'>$100M+ </p>
                        <p className=' text-2xl font-medium text-center after:bg-offBlue text-gray headingUnderline'>Scaling my Empire</p>
                    </div>
                    <div className='sm:col-span-2 md:col-span-1 col-span-1'>
                        <p className='text-5xl text-orange text-center pb-2'>20 </p>
                        <p className=' text-2xl font-medium text-center after:bg-orange text-gray headingUnderline'>Business Partnerships</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appearnce
