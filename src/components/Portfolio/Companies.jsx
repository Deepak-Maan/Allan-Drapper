import React from 'react'
import { H2 } from '../common/Heading'
import Image from 'next/image'
import proof from '../../../public/assets/images/portfolio/svg/proof.svg'
import ranahub from '../../../public/assets/images/portfolio/svg/ranahub.svg'
import marketing from '../../../public/assets/images/portfolio/svg/marketing.svg'
import give from '../../../public/assets/images/portfolio/svg/giveBack.svg'
import lizard from '../../../public/assets/images/portfolio/svg/lizard.svg'
import jad from '../../../public/assets/images/portfolio/svg/jad.svg'
import brown from '../../../public/assets/images/portfolio/svg/brown.svg'
import wealth from '../../../public/assets/images/portfolio/svg/wealth.svg'
import bugbuxt from '../../../public/assets/images/portfolio/svg/bugBuxt.svg'
import podcast from '../../../public/assets/images/portfolio/svg/podcast.svg'
import real from '../../../public/assets/images/portfolio/svg/realEstate.svg'

const Companies = () => {
  return (
    <div className=' max-w-[1220px] mx-auto px-3 pb-16 mb-2'>
     <H2 className=" text-center" heading="Companies Allan Founded"/>
     <div className=" flex flex-wrap xl:gap-16 gap-10 justify-center pt-24">
        <Image src={proof} width={100} height={100} alt='proof'/>
        <Image src={ranahub} width={255} height={93} alt='proof'/>
        <Image src={marketing} width={240} height={90} alt='proof'/>
        <Image src={give} width={172} height={100} alt='proof'/>
        <Image src={lizard} width={118} height={100} alt='proof'/>
     </div>
     <div className=" flex flex-wrap xl:gap-[90px] gap-16 justify-center pt-16">
        <Image src={jad} width={87} height={102} alt='proof'/>
        <Image src={brown} width={172} height={96} alt='proof'/>
        <Image src={wealth} width={234} height={103} alt='proof'/>
        <Image src={bugbuxt} width={178} height={100} alt='proof'/>
        <Image src={podcast} width={100} height={100} alt='proof'/>
     </div>
     <div className=' flex justify-center pt-20 pb-8 mb-1'>
        <Image src={real} width={163} height={96} alt='real'/>
     </div>
    </div>
  )
}

export default Companies