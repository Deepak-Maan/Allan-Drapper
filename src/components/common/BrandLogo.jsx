import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const BrandLogo = () => {
    return (
        <div className='container mx-auto max-w-[1440px] '>
            <div className="flex max-lg:flex-wrap max-sm:gap-5 justify-center">
                <Marquee>
                    <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                        <Image src="/assets/images/portfolio/svg/proof.svg" width={100} height={100} alt='Brands Logo' />
                    </div>
                    <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                        <Image src="/assets/images/portfolio/svg/ranahub.svg" width={181} height={72} alt='Brands Logo' />
                    </div>
                    <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                        <Image src="/assets/images/portfolio/svg/marketing.svg" width={240} height={90} alt='Brands Logo' />
                    </div>
                    <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                        <Image src="/assets/images/portfolio/svg/give-back.svg" width={174} height={90} alt='Brands Logo' />
                    </div>
                    <div className='w-[288px] flex items-center justify-center sm:h-[170px]'>
                        <Image src="/assets/images/portfolio/svg/lizard.svg" width={118} height={100} alt='Brands Logo' />
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default BrandLogo
