import React from 'react'

const Button = (button) => {
    return (
            <button className={`md:py-[10px] py-1.5 sm:py-2 font-bold text-lg sm:text-xl leading-140 text-white px-3 sm:px-4 md:px-6 after:w-full after:h-full after:bg-orange after:absolute relative after:z-0 overflow-hidden after:left-0 after:top-0 bg-yellow hover:after:-top-[100%] after:duration-300 after:ease-in-out hover:text-black duration-300 ease-in-out after:opacity-100 ${button.className}`}>
                <span className=' relative z-10'>{button.text}</span></button>
    )
}

export default Button