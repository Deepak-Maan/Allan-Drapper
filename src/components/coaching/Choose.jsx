import Image from 'next/image'
import { Heading } from '../common/Heading'

const Choose = () => {
        return (
                <div className='py-12 sm:py-16 md:py-20 lg:pt-[130px] lg:pb-[136px]'>
                        <div className='container max-w-[1172px] px-4 mx-auto'>
                                <div className='grid lg:grid-cols-2'>
                                        <div className='flex justify-center lg:justify-start'>
                                                <Image src="/assets/images/coaching/webp/choose-people.webp" alt='choosePeople' width={464} height={603} className='min-h-[400px] w-[300px] md:w-[464px] md:min-h-[603px]' />
                                        </div>
                                        <div className='flex items-center flex-col justify-center'>
                                                <Heading className="text-3xl1 sm:text-4xl md:text-4xl1 pt-3 !lg:pt-0 text-center lg:text-start after:bg-yellow !leading-105" heading="Why Choose Allan Draper as Your Coach?" />
                                                <div className='flex items-start gap-3 mt-[52px] mb-4'>
                                                        <Image src="/assets/images/coaching/svg/choose-triangle-box.svg" alt='triangleBox' width={24} height={24} />
                                                        <p className='font-medium text-lightBlack opacity-80 text-lg sm:text-xl md:text-2xl leading-130 '><span className='font-bold text-lg sm:text-xl md:text-2xl'>Proven Track Record:</span> Allan has built multimillion-dollar companies in home services, digital marketing, real estate, and legal services.</p>
                                                </div>
                                                <div className='flex items-start gap-3 mb-4'>
                                                        <Image src="/assets/images/coaching/svg/choose-triangle-box.svg" alt='triangleBox' width={24} height={24} />
                                                        <p className='font-medium text-lightBlack opacity-80 text-lg sm:text-xl md:text-2xl leading-130'><span className='font-bold text-lg sm:text-xl md:text-2xl'>Diverse Expertise:</span> Allan’s vast experience provides innovative solutions to overcome any business challenge across various sectors.</p>
                                                </div>
                                                <div className='flex items-start gap-3 mb-4'>
                                                        <Image src="/assets/images/coaching/svg/choose-triangle-box.svg" alt='triangleBox' width={24} height={24} />
                                                        <p className='font-medium text-lightBlack opacity-80 text-lg sm:text-xl md:text-2xl leading-130'><span className='font-bold text-2xl '>Personalized Coaching:</span> Tailored sessions to meet your unique needs and goals, ensuring maximum impact and success.</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Choose
