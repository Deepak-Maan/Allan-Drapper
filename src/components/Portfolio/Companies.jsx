'use client'
import React from 'react';
import { H2 } from '../common/Heading';
import Image from 'next/image';
import { images } from '../common/Helper';

const Companies = () => {
  return (
    <div className='max-w-[1220px] mx-auto px-3 pb-16 mb-2'>
      <H2 className="text-center" heading="Companies Allan Founded" />
      <div className="flex flex-wrap xl:gap-16 gap-10 justify-center pt-24">
        {images.slice(0, 5).map((image, index) => (
          <Image className='w' key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} />
        ))}
      </div>
      <div className="flex flex-wrap xl:gap-[90px] gap-16 justify-center pt-16">
        {images.slice(5, 10).map((image, index) => (
          <Image key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} />
        ))}
      </div>
      <div className='flex justify-center pt-20 pb-8 mb-1'>
        <Image src={images[10].src} width={images[10].width} height={images[10].height} alt={images[10].alt} />
      </div>
    </div>
  );
};

export default Companies;
