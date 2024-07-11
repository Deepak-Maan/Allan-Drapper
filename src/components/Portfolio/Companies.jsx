'use client'
import React from 'react';
import { H2 } from '../common/Heading';
import Image from 'next/image';
import { images } from '../common/Helper';

const Companies = () => {
  return (
    <div className='max-w-[1220px] mx-auto px-3 sm:pb-16 md:pt-[74px] md:mt-[76px] mt-0 sm:pt-[64px] pt-[48px] mb-2'>
      <H2 className="text-center after:left-1/2 after:-translate-x-1/2 after:!bg-offBlue" heading="Companies Allan Founded" />
      <div className="flex flex-wrap xl:gap-16 gap-10  justify-center sm:pt-28 pt-8">
        {images.slice(0, 5).map((image, index) => (
          <Image className=' duration-300 hover:scale-90' key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} />
        ))}
      </div>
      <div className="flex flex-wrap xl:gap-[90px] gap-16  justify-center pt-16">
        {images.slice(5, 10).map((image, index) => (
          <Image className=' duration-300 hover:scale-90' key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} />
        ))}
      </div>
      <div className='flex justify-center sm:pt-20 pt-4 pb-20 mb-1'>
        <Image className=' duration-300 hover:scale-90' src={images[10].src} width={images[10].width} height={images[10].height} alt={images[10].alt} />
      </div>
    </div>
  );
};

export default Companies;
