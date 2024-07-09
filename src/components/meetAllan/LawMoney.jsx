import React from 'react';
import { H2 } from '../common/Heading';
import Image from 'next/image';
import { LawItem, Laws } from '../common/Helper';

const LawMoney = () => {
    return (
        <div className='max-w-[1164px] mx-auto px-3 pt-12 sm:pt-16 md:pt-20 lg:pt-[120px]'>
            <div className="flex flex-col items-center md:items-start md:justify-start justify-center md:flex-row">
                <div>
                    <H2 heading={"10 Laws That Govern Money"} />
                    <Image
                        src="/assets/images/meetAllan/webp/allanDraperBook.png"
                        alt="My Image"
                        width={534}
                        height={905}
                        className="md:max-w-[400px] sm:max-w-[404px] sm:max-h-[600px] pt-10 lg:pt-0 lg:max-w-[534px] md:max-h-[600px] object-cover lg:max-h-[903px] xl:min-h-[905px] cursor-pointer"
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
                            textClass="text-lightBlack xl:text-2xl1 lg:text-2xl text-xl text-opacity-80"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LawMoney;
