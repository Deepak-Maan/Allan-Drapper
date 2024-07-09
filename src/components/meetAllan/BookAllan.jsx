import React from 'react';
import { H2 } from '../common/Heading';
import Image from "next/image";
import { BooksData } from '../common/Helper';

const BookAllan = () => {
    return (
        <div className='max-w-[1164px] mx-auto px-3 pt-12 sm:pt-16 md:pt-20 md:pb-12 lg:pb-[60px] lg:pt-[120px]'>
            <div className='pb-12'>
                <H2 heading={"Book Recommendations By Allan"} className={"text-center mx-auto"} />
            </div>

            {BooksData.map((section, index) => (
                <div key={index} >
                    <h3 className="font-bold text-3xl text-lightBlack sm:pb-6 pb-3 lg:mb-1.5">{section.category}</h3>
                    <div className="flex flex-row items-center justify-center pb-5 sm:pb-8 lg:pb-[60px] flex-wrap">
                        {section.items.map((book, bookIndex) => (
                            <div key={bookIndex} className='xs:w-1/2 w-full md:w-1/3 px-3 pt-4 md:pt-0'>
                                <div className="max-[500px]:w-full border pt-8 sm:pt-10 lg:pt-[57px] border-offGray lg:min-h-[376px] sm:min-h-[310px] min-h-[270px] max-[500px]:min-h-[240px]  md:px-6 px-2 flex flex-col items-center hover:shadow-[0px_0px_20px_1px_#00000012]  duration-300">
                                    <Image
                                        src={book.src}
                                        alt={book.title}
                                        width={464}
                                        height={603}
                                        className="lg:w-[145px] w-28"
                                    />
                                    <h4 className="font-bold lg:text-3xl sm:text-xl text-lg text-lightblack opacity-80 sm:pt-6 pt-3 text-center max-w-[269px] leading-120">{book.title}</h4>
                                    <p className="font-medium lg:text-2xl sm:text-lg text-base text-offGray text-center leading-130">{book.author}</p>
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
