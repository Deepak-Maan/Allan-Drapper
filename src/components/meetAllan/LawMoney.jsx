import {  Heading } from '../common/Heading';
import Image from 'next/image';
import {  LAWSLIST } from '../common/Helper';

const LawMoney = () => {
    return (
        <div className='max-w-[1164px] mx-auto px-3 pb-12 md:pb-16 pt-12 sm:pt-14 md:pt-16 lg:pt-12 xl:pt-[120px]'>
            <div className="flex flex-col items-center md:items-start xl:gap-4 md:justify-start justify-center md:flex-row">
                <div className='md:sticky md:top-0'>
                    <div className='mb-4 sm:mb-10 mx-auto text-center md:text-start'> <Heading heading={"10 Laws That Govern Money"} className={"max-md:after:left-1/2 max-md:after:-translate-x-1/2"} /></div>
                    <Image
                        src="/assets/images/meetAllan/webp/allan-Draper-Book.webp"
                        alt="Books"
                        width={534}
                        height={905}
                        className="md:max-w-[400px] xl:pt-10 sm:max-w-[404px] md:pt-8 sm:max-h-[600px] lg:max-w-[534px] md:max-h-[600px] object-cover lg:max-h-[903px] xl:min-h-[905px] "
                    />
                </div>
                <div className='max-w-[588px] -mt-10 sm:mt-0'>
                    {LAWSLIST.map((law, index) => (
                        <div key={index} className={`flex sm:gap-3.5 gap-2 p-2 lg:p-4 mt-3 items-start border border-offGray`}>
                            <span className={`md:w-[34px] md:min-w-[34px] md:h-[37px] min-w-6 h-6 flex justify-center items-center font-bold bg-lightBlack bg-opacity-80 text-lg md:text-2xl1 text-white !leading-120 mt-1`}>{index + 1}</span>
                            <p className={`font-bold !leading-120 text-lightBlack md:text-xl lg:text-2xl1 text-lg text-opacity-80 max-w-[491px]`}>{law}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LawMoney;
