import {  Heading } from '../common/Heading'
import WorldMostCard from '../common/WorldMostCard'

const WorldMost = () => {
    return (
        <>
            <div className="container  mx-auto px-3 max-w-[1164px] xl:pb-[140px] lg:pb-24 md:pb-16 sm:pb-14 pb-12">
                <Heading heading="World's Most Inspiring Entrepreneurs" className="after:bg-yellow flex justify-center text-center sm:text-start after:left-1/2 after:-translate-x-1/2 mb-6 sm:mb-[37px]" />
                <p className='font-medium text-lg sm:text-xl md:text-2xl leading-130 text-lightBlack text-center pb-3 sm:pb-5 md:pb-[26px] opacity-80 max-w-[965px] mx-auto'>Boasting over 70,000 downloads in its infancy with guests like David Meltzer, Jeff Fenster, and Larry Hagner; the Allan Draper show cuts out the noise of entrepreneurship and addresses real business stories and actionable information about scaling businesses to 8+ figures from guests who have actually done it!</p>
                <div className='flex flex-wrap flex-row -mx-3 '>
                    <WorldMostCard/>
                </div>
            </div>
        </>
    )
}

export default WorldMost