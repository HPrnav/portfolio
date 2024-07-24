import React from 'react'

function Section_title({title}) {
  return (
    <div className='max-w-[1300] text-gray-200 flex flex-col gap-6 justify-center items-center '>
        <div className='relative group'>
            <p className='font-mono text-4xl font-bold italic text-yellow-400'>{title}</p>
            <span className='absolute bottom-0 left-0 w-full h-1 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>

        </div>
    </div>
   )
}

export default Section_title