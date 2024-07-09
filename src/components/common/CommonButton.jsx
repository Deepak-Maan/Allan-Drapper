import React from 'react'

const CommonButton = (btn) => {
    return (
        <>
            <button className={`py-[10px] font-bold text-xl leading-140 text-white px-6 after:w-full after:h-full after:bg-orange after:absolute relative after:z-[0] overflow-hidden after:left-0 after:top-0 bg-yellow hover:after:-top-[100%] after:duration-300 after:ease-in-out hover:text-orange duration-300 ease-in-out after:opacity-100 ${btn.classesbtn}`}>
                <span className=' relative z-10'>{btn.text}</span></button>
        </>
    )
}

export default CommonButton