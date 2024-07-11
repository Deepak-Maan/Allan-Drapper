import Image from 'next/image'
import React from 'react'

const BrandLogo = () => {
    return (
        <div className='container mx-auto max-w-[1440px] '>
            <div className="flex max-lg:flex-wrap max-sm:gap-5 justify-center">
                <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                    <Image src="/assets/images/svg/portfolio/proof.svg" width={100} height={100} alt='Brands Logo' />
                </div>
                <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                    <Image src="/assets/images/svg/portfolio/ranahub.svg" width={181} height={72} alt='Brands Logo' />
                </div>
                <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                    <Image src="/assets/images/svg/portfolio/marketing.svg" width={240} height={90} alt='Brands Logo' />
                </div>
                <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                    <Image src="/assets/images/svg/portfolio/giveBack.svg" width={174} height={90} alt='Brands Logo' />
                </div>
                <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                    <Image src="/assets/images/svg/portfolio/lizard.svg" width={118} height={100} alt='Brands Logo' />
                </div>
            </div>
        </div>
    )
}

export default BrandLogo
