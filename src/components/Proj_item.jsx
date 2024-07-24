import React from 'react'

function Proj_item({url,description,title,skills}) {
  return (
    <div> 
        <li className="mb-10 ms-4 border border-yellow-500 p-5 rounded-lg shadow hover:shadow-lg hover:shadow-red-400">
                    <div className="absolute w-3 h-3 bg-red-500 rounded mt-1.5 -start-1.5   border-gray-900"></div>
                     <h3 className="text-lg font-semibold  text-white">{title}</h3>
                    <p className="mb-4 text-base font-normal text-gray-400">{description}</p>
                    <p className='mb-1 text-sm font-normal leading-none text-blue-500'>{skills}</p>
                    <a href={url} className="inline-flex items-center px-1 py-1 text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-900 focus:text-blue-700">view<svg className="w-2 h-2 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></a>
                </li>
    </div>
  )
}

export default Proj_item