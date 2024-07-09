import React from 'react';
import { H2 } from '../common/Heading';
import Image from 'next/image';
import { LawItem, Laws } from '../common/Helper';

const LawMoney = () => {
    return (
        <div className='max-w-[1164px] mx-auto px-3 pt-12 sm:pt-16 md:pt-20 xl:pt-[120px]'>
            <div className="flex flex-col items-center md:items-start xl:gap-4 md:justify-start justify-center md:flex-row">
                <div className=' md:sticky md:top-0'>

                    <div className='mb-10'> <H2 heading={"10 Laws That Govern Money"} /></div>
                    <Image
                        src="/assets/images/webp/meetAllan/allanDraperBook.webp"
                        alt="My Image"
                        width={534}
                        height={905}
                        className="md:max-w-[400px] sm:max-w-[404px] sm:max-h-[600px] lg:max-w-[534px] md:max-h-[600px] object-cover lg:max-h-[903px] xl:min-h-[905px] "
                    />
                </div>
                <div className='max-w-[588px]'>
                    {Laws.map((law, index) => (
                        <LawItem
                            key={index}
                            number={index + 1}
                            text={law}
                            containerClass="border-offGray"
                            numberClass="bg-lightBlack bg-opacity-80 xl:text-2xl1 lg:text-2xl text-xl text-white leading-120 mt-1"
                            textClass="text-lightBlack lg:text-2xl1 md:text-2xl sm:text-xl text-lg text-opacity-80"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LawMoney;
