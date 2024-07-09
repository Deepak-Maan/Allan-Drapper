import React from 'react';

const WhyshouldCards = ({ cards }) => {
    if (!Array.isArray(cards)) {
        console.error("Expected cards to be an array, but got:", cards);
        return null;
    }

    return (
        <>
            {cards.map((card, index) => (
                <div key={index} className='py-5 px-5 sm:px-10 border border-solid border-offGray'>
                    <p className={`font-medium text-2xl leading-130 text-center text-lightBlack relative after:absolute  after:w-14 after:h-[2px] after:left-1/2 after:-translate-x-1/2 after:-bottom-3 ${card.LineColor}`}>
                        {card.title}
                    </p>
                    <p className='font-bold text-5xl leading-120 text-lightBlack text-center mt-6'>
                        {card.amount}
                    </p>
                </div>
            ))}
        </>
    );
};

export default WhyshouldCards;
