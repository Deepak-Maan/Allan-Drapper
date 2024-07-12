"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Sacrifice = () => {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const text3Ref = useRef(null);
    const text4Ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.fromTo(
            text1Ref.current,
            { backgroundPosition: '100% 0', color: 'rgba(0, 0, 0, 0)' },
            { backgroundPosition: '0% 0', color: '#000', duration: 2, ease: 'power2.inOut' }
        )
            .fromTo(
                text2Ref.current,
                { backgroundPosition: '100% 0', color: 'rgba(255, 255, 255, 0)' },
                { backgroundPosition: '0% 0', color: '#fff', duration: 2, ease: 'power2.inOut' },
                '-=1.5'
            )
            .fromTo(
                text3Ref.current,
                { backgroundPosition: '100% 0', color: 'rgba(255, 255, 255, 0)' },
                { backgroundPosition: '0% 0', color: '#fff', duration: 2, ease: 'power2.inOut' },
                '-=1.5'
            )
            .fromTo(
                text4Ref.current,
                { backgroundPosition: '100% 0', color: 'rgba(255, 255, 255, 0)' },
                { backgroundPosition: '0% 0', color: '#fff', duration: 2, ease: 'power2.inOut' },
                '-=1.5'
            );
    }, []);

    return (
        <div className='max-w-[1164px] mx-auto pt-7 sm:pt-10 md:pt-[52px] lg:pt-16 xl:pt-[152px]'>
            <h1 className="text-center text-4xl1 md:text-5xl lg:text-5xl1 text-lightBlack font-bold mb-7 px-3 md:mb-10 lg:mb-14 !leading-110">
                Never Sacrifice These 3 Things
            </h1>
            <h2 ref={text2Ref} className="text-white  text-shadow-sky text-4xl sm:text-5xl md:text-6xl lg:text-[84px] xl:text-[120px] text-center font-black uppercase sm:tracking-[12px] tracking-[6px] !leading-120 mt-6 sm:mt-8 md:mt-12 lg:mt-14">
                Your Family
            </h2>
            <h2 ref={text3Ref} className="lg:text-[84px] xl:text-[120px] text-center font-black uppercase sm:tracking-[12px] text-white  text-shadow-skyblue text-4xl sm:text-5xl md:text-6xl tracking-[6px] !leading-120">
                Your Heart
            </h2>
            <h2 ref={text4Ref} className="text-white text-center font-black uppercase sm:tracking-[12px] !leading-120  text-shadow-yellow text-4xl sm:text-5xl md:text-6xl lg:text-[84px] tracking-[6px] xl:text-[120px]">
                Your Dignity
            </h2>
            <Image
                src="/assets/images/webp/meetAllan/sacrificeFamily.webp"
                alt="Family"
                width={1140}
                height={603}
                className="object-cover pt-8 md:pt-10 lg:pt-16"
            />
        </div>
    );
};

export default Sacrifice;
