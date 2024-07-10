import React from 'react'

const CommonInput = (input) => {
    return (
        <div className='flex flex-col gap-[6.5px]'>
            <p className='font-medium text-lg sm:text-xl md:text-2xl'>{input.name}</p>
            <input type={input.type} className={`w-full border border-solid border-black20 min-h-[52px] max-h-[52px] outline-none p-2 font-normal text-lg sm:text-xl md:text-2xl ${input.className}`} />
        </div>
    )
}

export default CommonInput