import React from 'react';
import { WhyShouldcardData } from '../common/Helper';

const WhyshouldCards = () => {
    // Split the card data into two parts
    const firstHalf = WhyShouldcardData.slice(0, 2);
    const secondHalf = WhyShouldcardData.slice(2);

    return (
        <>
            <div className='card-container'>
                {firstHalf.map((card, index) => (
                    <div key={index} className='py-5 px-10 border border-solid border-offGray'>
                        <p className={`font-medium text-2xl leading-130 text-center text-lightBlack relative after:absolute after:w-14 after:h-[2px] after:left-1/2 after:-translate-x-1/2 after:-bottom-3 ${card.LineColor}`}>
                            {card.title}
                        </p>
                        <p className='font-bold text-5xl leading-120 text-lightBlack text-center mt-6'>
                            {card.amount}
                        </p>
                    </div>
                ))}
            </div>
            <div className='card-container'>
                {secondHalf.map((card, index) => (
                    <div key={index} className='py-5 px-10 border border-solid border-offGray'>
                        <p className={`font-medium text-2xl leading-130 text-center text-lightBlack relative after:absolute after:w-14 after:h-[2px] after:left-1/2 after:-translate-x-1/2 after:-bottom-3 ${card.LineColor}`}>
                            {card.title}
                        </p>
                        <p className='font-bold text-5xl leading-120 text-lightBlack text-center mt-6'>
                            {card.amount}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default WhyshouldCards;
