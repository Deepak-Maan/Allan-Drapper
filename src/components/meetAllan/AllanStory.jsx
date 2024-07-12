import {  Heading } from '../common/Heading'
import Image from "next/image";

const AllanStory = () => {
    return (
        <section>
            <div className='max-w-[1164px] px-3 mx-auto pb-12 sm:pb-14 md:pb-16 lg:pt-0 xl:pt-[63px] lg:pb-24 xl:pb-[120px]'>
                <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className='xl:pt-7'>
                        <div className='mb-8 sm:mb-12'>
                            <Heading heading={"Who is Allan Draper ?"} className={"text-center md:text-start max-md:after:left-1/2 max-md:after:-translate-x-1/2"} /></div>
                        <p className='text-lg sm:text-xl md:text-2xl !leading-130 text-lightBlack  opacity-80 font-bold max-w-[443px]'>Allan’s story may sound familiar. It’s probably a lot like yours. Allan grew up in home that had very few financial resources. But there was something inside him. Something that yearned for more. Something that made him want to extract every last drop out of his potential. Allan is on a mission to help 10,000 people make short-term sacrifices to build businesses and wealth. Are you a creator?</p>
                    </div>
                    <Image
                        src="/assets/images/meetAllan/webp/allan-Story.webp"
                        alt="AllanStory"
                        width={611}
                        height={594}
                        className="md:max-w-[400px] lg:max-w-[464px] md:max-h-[594px] object-cover lg:min-w-[611px] !xl:min-h-[594px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default AllanStory