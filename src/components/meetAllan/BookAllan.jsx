import React from 'react';
import { Heading } from '../common/Heading';
import Image from "next/image";
import { BOOKSDATA } from '../common/Helper';

const BookAllan = () => {
    return (
        <div className='max-w-[1164px] mx-auto px-3 xl:px-0 pb-4 sm:pb-6 pt-0 sm:pt-2 md:pb-6 md:pt-0 lg:pb-12  xl:pt-[120px]  lg:pt-12'>
            <div className='mb-8 md:mb-14 xl:mb-20'>
                <Heading heading={"Book Recommendations By Allan"} className={"text-center after:left-1/2 after:-translate-x-1/2 mx-auto"} />
            </div>

            {BOOKSDATA.map((section, index) => (
                <div key={index} >
                    <h3 className="font-bold text-2xl md:text-2xl1 lg:3xl xl:text-3xl1 text-lightBlack sm:pb-6  text-center sm:text-start lg:mb-1.5">{section.category}</h3>
                    <div className="flex flex-row items-center justify-center pb-8 md:pb-10 lg:pb-12 xl:pb-[60px] flex-wrap">
                        {section.items.map((book, bookIndex) => (
                            <div key={bookIndex} className='xxs:w-1/2 w-full md:w-1/3 pt-4 xxs:pt-6 px-0 xs:px-3 xl:px-0 md:pt-0'>
                                <div className="max-[500px]:w-full border xs:min-h-[285px] md:min-h-[300px] pt-8 sm:pt-10 md:pt-4 lg:pt-12 xl:pt-[57px] border-offGray hover:border-transparent hover:shadow-worldCard duration-300 xl:max-w-[364px] lg:min-h-[376px] sm:min-h-[310px] min-h-[270px] max-[500px]:min-h-[240px] md:px-2 lg:px-6 px-2 flex flex-col items-center ">
                                    <Image
                                        src={book.src}
                                        alt={book.title}
                                        width={464}
                                        height={603}
                                        className="lg:w-[145px] w-28"
                                    />
                                    <h4 className="font-bold text-xl md:text-2xl xl:text-2xl1 text-lightblack opacity-80 sm:pt-6 pt-3 text-center max-w-[269px] !leading-120">{book.title}</h4>
                                    <p className="font-medium lg:text-2xl sm:text-lg text-base text-offGray text-center !leading-130">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookAllan;
