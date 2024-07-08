import React from 'react'
import { H2 } from '../common/Heading'
import { chooseDate } from '../common/Helper'
import Image from 'next/image'

const Program = () => {
  return (
    <div className='bg-gray py-[95px]'>
      <div className='container max-w-[1140px] px-3 mx-auto'>
      <H2 className="!text-4xl1 text-center" heading="Coaching Programs"/>
           <div className='grid grid-cols-3 pt-[61px]'>
                   {chooseDate.map((chooseData ,index) =>{
                        return(
                                <div key={index} >
                                <Image src={chooseDate.svg} alt='oneOnOne' width={64} height={64}/>
                                <h3>{chooseData. name}</h3>
                                <p>{chooseDate. detail}</p>
                             </div>
                        )
                   })
                   }
           </div>
        </div>
    </div>
  )
}

export default Program
