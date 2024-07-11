import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FacebookLogo, GooglePlayIcon, InstagramLogo, LinkedinLogo, PodcastLogo, StitcherIcon, TwitterLogo, YoutubeLogo } from './Icons'

const Footer = () => {
    return (
        <div className='bg-black2 mt-[-1px]'>
            <div className="container mx-auto px-3 pt-20 pb-8 max-w-[1164px]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className='lg:pb-0 pb-8'>
                        <Link href="/">
                            <Image className='pb-8' src="/assets/images/svg/podCast/pageLogo.svg" width={264} height={48} alt="page logo " />
                        </Link>
                        <Image src="/assets/images/webp/homePage/allanFooterImage.webp" width={386} height={245} alt="allan's image" />
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <ul className='max-w-[158px] ml-auto'>
                                <li className='text-white text-lg sm:text-xl font-bold leading-150 pb-6 uppercase'>Home</li>
                                <li className='pb-6'><Link className='footerLinks' href="/meet-allan">Meet Allan</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="#">My Brands</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="/podcast">Podcast</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="/coaching">Coaching</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="/speaking">Speaking</Link></li>
                                <li className='pb-6'><Link className='footerLinks' href="/connect">Connect</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='max-w-[158px] ml-auto'>
                                <li className='text-white text-lg sm:text-xl font-bold leading-150 mb-6 uppercase'>Social</li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://www.instagram.com/" target='_blank'><InstagramLogo />Instagram</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://www.facebook.com/" target="_blank"><FacebookLogo />Facebok</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://www.linkedin.com/" target="_blank"><LinkedinLogo />Linkedin</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://www.youtube.com/" target="_blank"><YoutubeLogo />Youtube</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://www.twitter.com/" target="_blank"><TwitterLogo />Twitter</Link></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='max-w-[180px] ml-auto'>
                                <li className='text-white text-lg sm:text-xl font-bold leading-150 mb-6 uppercase'>Listen On </li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://www.apple.com/in/apple-podcasts/" target="_blank"><PodcastLogo />Apple Podcast</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://open.spotify.com/" target="_blank"><Image src="/assets/images/svg/spotifyLogo.svg" height={35} width={35} alt='spotify logo' />Spotify</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://play.google.com/" target="_blank"><GooglePlayIcon />Google Play</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://www.pandora.com/" target="_blank"><Image src="/assets/images/svg/pandoraLogo.svg" height={35} width={35} alt='spotify logo' />Pandora</Link></li>
                                <li className='pb-[10px]'><Link className='footerLinks flex items-center gap-2' href="https://www.stitcher.com/" target="_blank"><StitcherIcon />Stitcher</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
