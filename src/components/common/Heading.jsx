export const H2 = ({ heading, className }) => {
    return <h2 className={`font-bold text-lightBlack text-2xl1 sm:text-3xl1 lg:text-4xl xl:text-4xl1 !leading-105 after:absolute relative after:h-[5px] capitalize after:w-16 after:bg-orange after:bottom-[-10px] md:after:bottom-[-20px] after:left-0  ${className}`}>{heading} <span></span></h2>
}