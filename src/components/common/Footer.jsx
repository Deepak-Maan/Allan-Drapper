import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from './Icons'

const Footer = () => {
    return (
        <div className='bg-darkGray'>
            <div className="container mx-auto px-3 pt-20 pb-8 max-w-[1164px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <Image src="/assets/images/webp/homePage/allanFooterImage.png" width={386} height={245} alt="allan's image" />
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <ul className='max-w-[158px] ml-auto'>
                                <li className='text-white text-lg sm:text-xl font-bold leading-150 pb-6 uppercase'>Home</li>
                                <li className='pb-6'><Link className='footerLinks' href="">Meet Allan</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="">My Brands</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="">Podcast</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="">Coaching</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="">Speaking</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="">Connect</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='max-w-[158px] ml-auto'>
                                <li className='text-white text-lg sm:text-xl font-bold leading-150 mb-6 uppercase'>Social</li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><InstagramLogo />Instagram</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><FacebookLogo />Facebok</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><LinkedinLogo />Linkedin</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><YoutubeLogo />Youtube</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><TwitterLogo />Twitter</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='max-w-[180px] ml-auto'>
                                <li className='text-white text-lg sm:text-xl font-bold leading-150 mb-6 uppercase'>Listen On </li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><InstagramLogo />Apple Podcast</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><FacebookLogo />Facebok</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><LinkedinLogo />Linkedin</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><YoutubeLogo />Youtube</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex gap-2' href=""><TwitterLogo />Twitter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
