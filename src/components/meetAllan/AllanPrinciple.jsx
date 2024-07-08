import Image from "next/image";
import { Happiness, Scary, Someone, Thinking } from "../common/Icons";

const AllanPrinciple = () => {
    return (
        <div>
            <div className='bg-principle bg-no-repeat  bg-cover bg-center'>
                <div className="container relative xl:min-h-[770px]">
                    <div class="w-[120px] h-[280px] sm:w-[494px] sm:h-[494px] absolute left-[22%] lg:left-[8%] !bottom-0 bg-yellow rounded-full blur-[130px] z-0 opacity-70 lg:opacity-60 -translate-y-[20%] translate-x-1/2 sm:-translate-x-[15%]"></div>
                    <Image
                        src="/assets/images/meetAllan/webp/principle.png"
                        alt="My Image"
                        width={752}
                        height={1103}
                        className="md:max-w-[400px] absolute top-[6%] z-40 lg:max-w-[752px] md:max-h-[500px] object-cover lg:max-h-[603px] cursor-pointer"
                    />
                    <div class="lg:w-[38%] xl:ms-auto pb-[30px] lg:pb-[80px] xl:pb-[138px] pt-16 sm:pt-20 md:pt-[100px] lg:pt-[140px] xl:pt-[150px]">
                        <div class="w-full text-left mr-auto ml-0">
                            <h2 class="text-gray font-bold !leading-[101.1%] text-[clamp(32px,3.5vw,42px)] relative pb-4 sm:pb-5 md:pb-6 capitalize after:absolute after:bottom-0 after:w-16 after:h-[3px] sm:after:h-[5px] sm:tracking-[0.046em] text-white !pb-12 inline-block after:left-0">
                                Allan's Principles
                            </h2>
                        </div>
                        <div class="flex items-center gap-4">
                            <div>
                                <span class="relative after:absolute after:w-[2px] after:h-[40px] sm:after:h-[48px] after:content-[''] after:border-l-2 after:border-dotted after:border-light-sky after:left-[50%] after:top-[120%]">
                                    <span class="inline-block">
                                        <Someone />
                                    </span>
                                </span>
                            </div>
                            <p class="text-gray text-[16px] sm:text-[18px] font-medium leading-6 text-light-sky">
                                Take Someone with You                            </p>
                        </div>
                        <div class="mt-6 flex items-center gap-4">
                            <div>
                                <span class="relative after:absolute after:w-[2px] after:h-[40px] sm:after:h-[48px] after:content-[''] after:border-l-2 after:border-dotted after:border-light-sky after:left-[50%] after:top-[120%]">
                                    <span class="inline-block">
                                        <Scary />
                                    </span>
                                </span>
                            </div>
                            <p class="text-gray text-[16px] sm:text-[18px] font-medium leading-6 text-light-sky">
                                Risk is less scary than regret                            </p>
                        </div>
                        <div class="flex items-center pt-4 gap-4">
                            <div>
                                <span class="relative after:absolute after:w-[2px] after:h-[40px] sm:after:h-[48px] after:content-[''] after:border-l-2 after:border-dotted after:border-light-sky after:left-[50%] after:top-[120%]">
                                    <span class="inline-block">
                                        <Happiness />
                                    </span>
                                </span>
                            </div>
                            <p class="text-gray text-[16px] sm:text-[18px] font-medium leading-6 text-light-sky">
                                Gratitude=Happiness                            </p>
                        </div>
                        <div class="mt-6 flex items-center gap-4">
                            <div>
                                <span class="relative after:absolute after:w-[2px] after:h-[40px] sm:after:h-[48px] after:content-[''] after:border-l-2 after:border-dotted after:border-light-sky after:left-[50%] after:top-[120%]">
                                    <span class="inline-block">
                                        <Thinking />
                                    </span>
                                </span>
                            </div>
                            <p class="text-gray text-[16px] sm:text-[18px] font-medium leading-6 text-light-sky">
                                You are not limited by your abilities you are limited by your thinking                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllanPrinciple