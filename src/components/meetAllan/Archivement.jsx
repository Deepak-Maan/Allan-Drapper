import { Heading } from '../common/Heading'
import Image from "next/image";
import { BlueSquare } from '../common/Icons';

const Archivement = () => {
    return (
        <section>
            <div className='max-w-[1164px] px-3 mx-auto py-12 sm:py-14 md:py-16 lg:py-24 xl:pt-[150px] xl:pb-[93px]'>
                <div className="flex flex-col-reverse md:flex-row items-center gap-5 justify-between">
                    <Image
                        src="/assets/images/meetAllan/webp/archivement-men.webp"
                        alt="ArchivementMen"
                        width={464}
                        height={603}
                        className="md:max-w-[400px] lg:max-w-[464px] md:max-h-[500px] object-cover lg:max-h-[603px] "
                    />
                    <div className='flex flex-col'>
                        <div className='lg:mb-6'><Heading heading={"Allan's Top Achievements"} className={"after:bg-yellow text-center md:text-start max-md:after:left-1/2 max-md:after:-translate-x-1/2"} /></div>
                        <div className="flex xl:items-center gap-3 mb-4 mt-8">
                            <span><BlueSquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 font-medium'>Married for 16 years, 3 amazing children</p>

                        </div>
                        <div className="flex gap-3 mb-4 ">
                            <span><BlueSquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 font-medium max-w-[544px]'>Has built several multimillion dollar companies from scratch in industries like home services, digital marketing, real estate, legal services.</p>

                        </div>
                        <div className="flex xl:items-center gap-3 mb-4 ">
                            <span><BlueSquare /></span>
                            <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 font-medium'>
                                Built a multimillion dollar company in less than a year</p>

                        </div>
                        <div className="flex xl:items-center gap-3 mb-4 ">
                            <span><BlueSquare /></span>

                            <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack opacity-80 font-medium'>
                                20 business partners, many of who are millionaires</p>
                        </div>
                    </div>
                </div></div>
        </section>
    )
}

export default Archivement