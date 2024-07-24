import React from 'react'

function Footer() {
  return (
    <div className='bg-gradient-to-r from-orange-400 to-lime-400  rounded-lg opacity-80 flex justify-between text-gray-100 text-xl w-full mb-5 pl-4 p mx-auto items-center'>
       
       <div className='flex gap-5'>
            <div className='flex items-center gap-2'>
            <svg class="h-5 w-5 text-red-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="3 9 12 15 21 9 12 3 3 9" />  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />  <line x1="3" y1="19" x2="9" y2="13" />  <line x1="15" y1="13" x2="21" y2="19" /></svg>
            <a className='font-mono italic text-gray-700' href="mailto:pranavhore1455@gmail.com">pranavhore1455@gmail.com</a>
            </div>

            <div className='flex items-center gap-2'>
            <svg class="h-5 w-5 text-red-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <line x1="15" y1="9" x2="20" y2="4" />  <polyline points="16 4 20 4 20 8" /></svg>         <p className='font-mono italic text-gray-700'>9146810174</p>
            </div>
       </div>
            <p className='text-gray-700 opacity-50'>@pranav_221</p>
    </div>
  )
}

export default Footer