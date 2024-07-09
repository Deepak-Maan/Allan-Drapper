import Image from "next/image";

const Sacrifice = () => {
    return (
        <section>
            <div className="max-w-[1164px] mx-auto pt-12 sm:pt-16 md:pt-20 lg:pt-[152px] px-3">
                <h1 className='text-center text-3xl1 sm:text-4xl md:text-5xl lg:text-5xl1 text-lightBlack font-bold mb-7 md:mb-10 lg:mb-14 leading-110'>Never Sacrifice These 3 Things</h1>
                <h2 class="text-white common-transition text-shadow-sky text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[120px] text-center font-black uppercase sm:tracking-[12px] tracking-[6px] !leading-120 mt-6 sm:mt-8 md:mt-12 lg:mt-14">Your Family</h2>
                <h2 class="lg:text-[84px] xl:text-[120px] text-center font-black uppercase sm:tracking-[12px] text-white common-transition text-shadow-skyblue text-4xl sm:text-6xl md:text-7xl tracking-[6px]  !leading-120 ">Your Heart</h2>
                <h2 class="text-white text-center font-black uppercase sm:tracking-[12px] !leading-120 common-transition text-shadow-yellow text-4xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-[6px] xl:text-[120px]  ">Your Dignity</h2>
                <Image
                    src="/assets/images/webp/meetAllan/sacrificeFamily.webp"
                    alt="My Image"
                    width={1140}
                    height={603}
                    className="object-cover pt-8 md:pt-10 lg:pt-16"
                />
            </div>

        </section>
    )
}

export default Sacrifice