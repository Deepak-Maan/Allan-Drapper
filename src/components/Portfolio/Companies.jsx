'use client'
import React from 'react';
import { H2 } from '../common/Heading';
import Image from 'next/image';
import proof from '../../../public/assets/images/portfolio/svg/proof.svg';
import ranahub from '../../../public/assets/images/portfolio/svg/ranahub.svg';
import marketing from '../../../public/assets/images/portfolio/svg/marketing.svg';
import give from '../../../public/assets/images/portfolio/svg/giveBack.svg';
import lizard from '../../../public/assets/images/portfolio/svg/lizard.svg';
import jad from '../../../public/assets/images/portfolio/svg/jad.svg';
import brown from '../../../public/assets/images/portfolio/svg/brown.svg';
import wealth from '../../../public/assets/images/portfolio/svg/wealth.svg';
import bugbuxt from '../../../public/assets/images/portfolio/svg/bugBuxt.svg';
import podcast from '../../../public/assets/images/portfolio/svg/podcast.svg';
import real from '../../../public/assets/images/portfolio/svg/realEstate.svg';

const Companies = () => {
  const images = [
    { src: proof, width: 100, height: 100, alt: 'proof' },
    { src: ranahub, width: 255, height: 93, alt: 'ranahub' },
    { src: marketing, width: 240, height: 90, alt: 'marketing' },
    { src: give, width: 172, height: 100, alt: 'give' },
    { src: lizard, width: 118, height: 100, alt: 'lizard' },
    { src: jad, width: 87, height: 102, alt: 'jad' },
    { src: brown, width: 172, height: 96, alt: 'brown' },
    { src: wealth, width: 234, height: 103, alt: 'wealth' },
    { src: bugbuxt, width: 178, height: 100, alt: 'bugbuxt' },
    { src: podcast, width: 100, height: 100, alt: 'podcast' },
    { src: real, width: 163, height: 96, alt: 'real' }
  ];

  return (
    <div className='max-w-[1220px] mx-auto px-3 pb-16 mb-2'>
      <H2 className="text-center" heading="Companies Allan Founded" />
      <div className="flex flex-wrap xl:gap-16 gap-10 justify-center pt-24">
        {images.slice(0, 5).map((image, index) => (
          <Image key={index} src={image.src} width={image.width} height={image.height} alt={image.alt} />
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
