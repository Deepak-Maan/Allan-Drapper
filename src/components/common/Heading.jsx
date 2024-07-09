export const H2 = ({ heading, className }) => {
    return <h2 className={`font-bold text-lightBlack text-2xl1 sm:text-3xl md:text-4xl lg:text-4xl1 leading-110 after:absolute relative after:h-[5px] after:w-[64px] after:bg-orange after:bottom-[-20px] after:left-0  ${className}`}>{heading} <span></span></h2>
}