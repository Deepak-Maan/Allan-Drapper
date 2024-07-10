export const H2 = ({ heading, className }) => {
    return <h2 className={`font-bold text-lightBlack text-3xl1 sm:text-4xl md:text-4xl1 leading-110 after:absolute relative after:h-[5px] after:w-[64px] after:bg-orange after:bottom-[-10px] md:after:bottom-[-20px] after:left-0  ${className}`}>{heading} <span></span></h2>
}