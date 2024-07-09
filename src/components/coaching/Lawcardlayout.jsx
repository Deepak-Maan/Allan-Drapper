import React from 'react';
import { LawItem } from '../common/Helper';
import { H2 } from '../common/Heading';
import Image from 'next/image';

// Define different Laws array for this component
const Laws = [
  "Strategic Business Planning",
  "Market Analysis and Positioning",
  "Operational Excellence",
  "Financial Mastery",
  "Marketing Strategy"
];

const Lawcardlayout = () => {
  return (
    <div className='max-w-[1164px] mx-auto px-3 pt-12 sm:pt-16 md:pt-20 lg:pt-[120px]'>
      <div className="flex flex-col items-center md:items-start md:justify-start justify-center md:flex-row">
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
        <div className="flex flex-col">
          <H2 heading={"10 Laws That Govern Money"} />
          <Image
            src="/assets/images/coaching/webp/gainMan.webp"
            alt="My Image"
            width={464}
            height={603}
            className="md:max-w-[400px] sm:max-w-[404px] sm:max-h-[400px] pt-10 lg:pt-0 lg:max-w-[534px] md:max-h-[600px] object-cover lg:max-h-[500px] xl:min-h-[603px] cursor-pointer"
          /></div>
      </div>
    </div>
  );
}

export default Lawcardlayout;