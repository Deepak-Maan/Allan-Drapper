import React from 'react';
import Image from 'next/image'; // Ensure you import the Image component from 'next/image'
import { H2 } from '../common/Heading';

// Card data
export const cardData = [
    {
        id: 1,
        image: "/assets/images/svg/meetAllan/startNow.svg",
        title: "Start Now",
        description: "Don't wait until you know 100% of what you need, get started already.",
    },
    {
        id: 2,
        image: "/assets/images/svg/meetAllan/debt.svg",
        title: "Good vs Bad Debt",
        description: "Not all debt is bad debt. Know the difference",
    },
    {
        id: 3,
        image: "/assets/images/svg/meetAllan/cutTies.svg",
        title: "Cut Ties",
        description:
            "Get bad people out of your life, especially if they are related to you. The closer they are, the more damage you allow them to cause.",
    },
    {
        id: 4,
        image: "/assets/images/svg/meetAllan/college.svg",
        title: "College Myth",
        description: "In most cases, college is a waste of time and money.",
    },
    {
        id: 5,
        image: "/assets/images/svg/meetAllan/payFirst.svg",
        title: "Pay Yourself First",
        description: "Pay yourself 10% first. Even before paying off high interest debt. The lender will make you pay them either way. You have to be the one to make sure to pay yourself.",
    },
];

// Component rendering the cards
const Opinions = () => {
    return (
        <div className="max-w-[1164px] px-3 mx-auto pt-24">
            <H2 heading={"Allan’s Unpopular Opinions"} className={"text-center"} />
            <div className="flex flex-row flex-wrap items-center md:justify-start md:items-start justify-center pt-[61px] pb-[54px]">
                {cardData.map((card) => (
                    <div key={card.id} className="w-full sm:w-1/2 lg:w-1/3 pb-10">
                        <Image
                            src={card.image}
                            alt={card.title}
                            width={64}
                            height={64}
                            className="pb-4 md:pb-6"
                        />
                        <p className="text-2xl font-bold mb-2.5 leading-120 text-lightBlack">
                            {card.title}
                        </p>
                        <p className="text-2xl text-lightBlack opacity-80 mb-0 font-medium leading-130 sm:max-w-[325px]">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Opinions;
