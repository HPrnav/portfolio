import React from 'react'
import config from '../config'
import Section_title from './Section_title'
 
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiTerminal,
  DiHtml5,
  DiGithub,
  DiBootstrap,
  DiMongodb,
  DiMysql
} from 'react-icons/di'

function Skills() {
  return (
    <div className='max-w-[1300] text-gray-200 flex flex-col gap-6 justify-center items-center '>
      <Section_title title={'SKILLS'}/>
      <p>I have worked with </p>
      <div className='max-w-[600px] '>
        <ul className='  flex flex-wrap justify-center gap-5 '>
          <li className='  shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>C++</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>problem_solving</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>DSA</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>React</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>tailwind</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>SQL</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>Prisma</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>NODE_JS</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>MONGO</li>
          <li className=' shadow-md hover:shadow-red-500 hover:border-red-600 hover:translate-y-1 shadow-yellow-600 p-2 rounded-lg'>Express_js</li>

        </ul>

      </div >


      <div className='diaplay flex gap-6 justify-end  '>

        <a href={config.leetcode_url} className='flex items-center gap-2 font-bold italic text-blue-400'> Leetcode <svg className="w-3 h-3 text-blue-300 opacity-45  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
          <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
          <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
        </svg></a>

        <a href={config.github_url} className='flex items-center gap-2 font-bold italic text-blue-400'> GitHub <svg className="w-3 h-3 text-blue-300 opacity-45  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
          <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
          <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
        </svg></a>


      </div>

      <div className='flex justify-center flex-wrap text-4xl md:text-5xl gap-5'>
        <DiJavascript1 className='text-yellow-600 ' />
        <DiReact className='text-blue-600' />
        <DiNodejs className='text-green-600' />
        <DiTerminal className='text-gray-600' />
        <DiHtml5 className='text-orange-600' />
        <DiGithub className='text-green-600' />
        <DiBootstrap className='text-teal-600' />
        <DiMongodb className='text-lime-600' />
        <DiMysql className='text-blue-600' />

      </div>
    </div>
  )
}

export default Skills