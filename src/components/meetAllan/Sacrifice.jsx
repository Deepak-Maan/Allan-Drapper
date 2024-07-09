import Image from "next/image";

const Sacrifice = () => {
    return (
        <section>
            <div className="max-w-[1164px] mx-auto pt-12 sm:pt-16 md:pt-24 lg:pt-[152px] px-3">
                <h1 className='text-center text-5xl1 text-lightBlack mb-7 md:mb-10 lg:mb-14 leading-110'>Never Sacrifice These 3 Things</h1>
                <h2 class="text-white common-transition text-shadow-custom-sky text-[40px] sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[120px] text-center font-black uppercase sm:tracking-[5.6px] md:tracking-[7px] lg:tracking-[9px] xl:tracking-[12px] !leading-120 mt-6 sm:mt-8 md:mt-12 lg:mt-14">Your Family</h2>
                <h2 class="text-white common-transition text-shadow-custom-sky text-[40px] sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[120px] text-center font-black uppercase sm:tracking-[5.6px] md:tracking-[7px] lg:tracking-[9px] xl:tracking-[12px] !leading-120 ">Your Heart</h2>
                <h2 class="text-white common-transition text-shadow-custom-sky text-[40px] sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[120px] text-center font-black uppercase sm:tracking-[5.6px] md:tracking-[7px] lg:tracking-[9px] xl:tracking-[12px] !leading-120 ">Your Dignity</h2>
                <Image
                    src="/assets/images/meetAllan/webp/sacrificeFamily.png"
                    alt="My Image"
                    width={1140}
                    height={603}
                    className="object-cover pt-8 md:pt-10 lg:pt-16 cursor-pointer"
                />
            </div>

        </section>
    )
}

export default Sacrifice