import Image from 'next/image';
import {  Heading } from '../common/Heading';
import { CARDDATA } from '../common/Helper';

const Opinions = () => {
    return (
        <div className='bg-gray'>
            <div className="max-w-[1164px] px-3 mx-auto pt-12 max-sm:pb-6 sm:pt-14 md:pt-16 lg:pt-12 xl:pt-24">
                <div className='mb-[61px]'><Heading heading={"Allan’s Unpopular Opinions"} className={"text-center after:left-1/2 after:-translate-x-1/2 after:!bg-lightBlack after:opacity-80 "} /></div>
                <div className="flex flex-row flex-wrap items-center lg:justify-start lg:items-start justify-center xl:pt-5 sm:pb-4 md:pb-6 lg:pb-2 xl:pb-14">
                    {CARDDATA.map((card) => (
                        <div key={card.id} className="w-full flex flex-col justify-center items-center sm:items-start sm:justify-start sm:w-1/2 lg:w-1/3 pb-4 sm:pb-10">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={64}
                                height={64}
                                className="pb-2 sm:pb-4 md:pb-6"
                            />
                            <p className="text-2xl md:text-2xl1  font-bold mb-2.5 !leading-120 text-lightBlack">
                                {card.title}
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-center  sm:text-start sm:pe-4 text-lightBlack opacity-80 mb-0 font-medium !leading-130 sm:max-w-[325px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Opinions;
