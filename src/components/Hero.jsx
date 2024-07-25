import React from 'react'
import profilpic from '../assets/profilpic.png'
import {TypeAnimation} from 'react-type-animation'
import config from '../config'
 function Hero() {
  return (
 
    <div className=' text-white max-w-[1200px] grid md:grid-cols-3 gap-10  place-items-center font-mono font-semibold mx-auto md:mt-14 text-xl md:pl-20 md:text-4xl'>
        <div className='flex flex-col md:col-span-2 gap-2 items-start'>
            <p className='  text-gray-200 md:text-4xl text-2xl tracking-tighter'>HI I AM <br/> </p>
            <TypeAnimation
             sequence={[
                    "Pranav Hore",1000,
                    "Full-stack-developer",1000
             ]}
             speed={30}
             repeat={Infinity}
             className='font-mono italic text-yellow-400 font-bold'
             >
            </TypeAnimation>

            <p className='text-sm md:text-lg  font-thin text-left'> 
              Name:Pranav Hore <br />
              Student at : Vishwakarma Institute of Information Technology  (IT)
            </p>
            <div>
            <a  href='src\assets\f_resume.pdf' download={'f_resume.pdf'} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download cv</a>
            <a href={config.linked_url}  className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Linked-in</a>
            </div>
        </div>

        
        <img className='animate-custom-bounce ' src={profilpic} alt="" width={300} height={300}/>
    </div>
 
  )
}

export default Hero