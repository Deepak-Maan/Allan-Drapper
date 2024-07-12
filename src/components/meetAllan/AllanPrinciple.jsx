"use client";
import Image from "next/image";
import { Happiness, Scary, Someone, Thinking } from "../common/Icons";
import { H2 } from "../common/Heading";

const AllanPrinciple = () => {
    return (
        <div className="bg-principle bg-no-repeat bg-cover bg-center">
            <div className="container max-w-[1164px] flex flex-col md:flex-row justify-center items-center md:justify-between mx-auto px-3 relative pt-10 sm:pt-0 h-full md:h-[85vh] xl:min-h-[770px] 2xl:h-full">
                <div className="flex flex-col md:flex-row justify-center items-center flex-wrap">
                    <div className="w-[120px] h-[280px] sm:w-[399px] sm:h-[200px] lg:w-[499px] lg:h-[300px] absolute left-[22%] lg:left-[8%]  !bottom-0 bg-yellow rounded-full blur-[130px] z-0 opacity-70 lg:opacity-60 -translate-y-[100%] sm:-translate-y-[200%] md:-translate-y-1/2 translate-x-1/2 sm:-translate-x-[15%]"></div>
                    <Image
                        src="/assets/images/webp/meetAllan/principle.webp"
                        alt="Principle"
                        width={752}
                        height={1103}
                        className="sm:max-w-[400px] md:max-w-[600px] md:absolute bottom-0 -left-[14%] lg:left-[-3%] xl:left-0 relative z-40 lg:max-w-[652px] xl:w-[752px] xl:min-h-[755px] sm:max-h-[500px] md:max-h-[600px] object-cover lg:h-[583px]"
                    />

                    <div className="pb-12 sm:pb-8 lg:pb-20 mx-auto xl:pb-[138px] md:absolute right-2 pt-8 sm:pt-20 md:pt-[100px] lg:pt-[140px] xl:pt-[150px]">
                        <div className="w-full text-left mr-auto ml-0">
                            <H2
                                className={"!text-white after:bg-transparent pb-6 md:pb-9  lg:pb-12"}
                                heading={"Allan's Principles?"}
                            />
                        </div>
                        <div className="flex items-center gap-4 pb-6 md:pb-10 lg:pb-16">
                            <div className="relative after:absolute after:w-[2px] after:h-[15px] sm:after:h-12 after:content-[''] after:border-l-2 z-10 after:border-dotted after:border-offBlue after:left-1/2 after:top-[120%]">
                                <span className="relative z-30"><Someone /></span>
                            </div>
                            <p className="text-gray text-base sm:text-2xl1 font-bold !leading-120">
                                Take Someone with You
                            </p>
                        </div>
                        <div className="flex items-center gap-4 pb-6 md:pb-10 lg:pb-16">
                            <div className="relative after:absolute after:w-[2px] after:h-[15px] sm:after:h-12 after:content-[''] after:border-l-2 z-0 after:border-dotted after:border-offBlue after:left-1/2 after:top-[120%]">
                                <Scary />
                            </div>
                            <p className="text-gray text-base sm:text-2xl1 font-bold !leading-120">
                                Risk is less scary than regret
                            </p>
                        </div>
                        <div className="flex items-center sm:pt-4 xl:pt-0 gap-4 pb-6 md:pb-10 lg:pb-16">
                            <div className="relative after:absolute after:w-[2px] after:h-[15px] sm:after:h-12 after:content-[''] after:border-l-2 z-0 after:border-dotted after:border-offBlue after:left-1/2 after:top-[120%]">
                                <Happiness />
                            </div>
                            <p className="text-gray text-base sm:text-2xl1 font-bold !leading-120">
                                Gratitude = Happiness
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative after:absolute after:w-[2px] after:left-1/2 after:top-[120%]">
                                <Thinking />
                            </div>
                            <p className="text-gray text-base sm:text-2xl1 font-bold md:max-w-[340px] lg:max-w-[366px] !leading-120">
                                You are not limited by your abilities; you are limited by your thinking
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllanPrinciple;
