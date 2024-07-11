export const H2 = ({ heading, className }) => {
    return <h2 className={`font-bold text-lightBlack text-4xl1 leading-110 after:absolute relative after:h-[5px] after:w-[64px] after:bg-orange after:bottom-[-20px]  after:left-1/2 after:-translate-x-1/2 ${className}`}>{heading} <span></span></h2>
}