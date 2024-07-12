import Image from 'next/image';
import { H2 } from '../common/Heading';
import { cardData } from '../common/Helper';

const Opinions = () => {
    return (
        <div className='bg-gray'>
            <div className="max-w-[1164px] px-3 mx-auto pt-7 sm:pt-10 md:pt-[52px] lg:pt-16 xl:pt-24">
                <div className='mb-[61px]'><H2 heading={"Allan’s Unpopular Opinions"} className={"text-center after:left-1/2 after:-translate-x-1/2 after:!bg-lightBlack after:opacity-80 "} /></div>
                <div className="flex flex-row flex-wrap items-center lg:justify-start lg:items-start justify-center xl:pt-5 pb-2 sm:pb-5 md:pb-10 lg:pb-6">
                    {cardData.map((card) => (
                        <div key={card.id} className="w-full sm:w-1/2 lg:w-1/3 pb-10">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={64}
                                height={64}
                                className="pb-4 md:pb-6"
                            />
                            <p className="text-2xl md:text-2xl1  font-bold mb-2.5 !leading-120 text-lightBlack">
                                {card.title}
                            </p>
                            <p className="text-lg sm:text-xl md:text-2xl text-lightBlack opacity-80 mb-0 font-medium !leading-130 sm:max-w-[325px]">
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
