import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai'
import  {Link}  from 'react-scroll'
import Skills from './Skills';

function Navbar() {
    const [nav,setnav]=useState(false);

    const togglenav=()=>{
        setnav(!nav);
    }
    const[color,setcolor]=useState(0);
    const change_color=()=>{
        if(window.scrollY>=1000){
            setcolor(0);
        }
        else{
            setcolor(1);
        }
    }
    window.addEventListener('scroll',change_color);

    const closenav=()=>{
        setnav(false);
    }

  return (
    <div className={color?'bg-gradient-to-r from-yellow-400 to-red-400 rounded-lg sticky top-0 z-50':'bg-gradient-to-r from-red-400 to-lime-400 rounded-lg sticky top-0 z-50'}>

    <div  className={'z-50  flex justify-between text-gray-100 text-xl w-screen md:w-full max-w-[1300px] mb-5 p-4 shadow-inner drop-shadow-sm shadow-gray-700 mx-auto items-center'}>
        <Link to="contact"> <img className='h-9' src="src\assets\profilpic.png"  alt="" /> </Link>

        <ul className='hidden md:flex gap-12 z-10cursor-pointer'>
            <li className='relative group'>
                <Link  to="about" smooth={true} offset={50} duration={500} >ABOUT</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
            </li>
            <li className='relative group'>
                <Link  to="portfolio" smooth={true} offset={50} duration={500} >PORTFOLIO</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
            </li>
            <li className='relative group'>
                <Link  to="contact" smooth={true} offset={50} duration={500} >CONTACT</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
            </li>
        </ul>

        <div onClick={togglenav} className='md:hidden z-30'>
            {nav?<AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
        </div>

        <div className={nav?'text-center z-20 fixed h-full w-full left-0 top-0 bg-gray-600':'fixed left-[-100%]'}>
        < ul className='font-semibold text-4xl flex flex-col gap-12 pt-32' >
            
            <li className='relative group'>
                <Link  to="about" smooth={true} offset={50} duration={500} >ABOUT</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-yellow-600 transform scale-x-0 group-hover:scale-x-50 transition-transform duration-300 ease-in-out'></span>
            </li>           
            <li className='relative group'>
                <Link  to="portfolio" smooth={true} offset={50} duration={500} >PORTFOLIO</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-yellow-600 transform scale-x-0 group-hover:scale-x-50 transition-transform duration-300 ease-in-out'></span>
            </li>           
            <li className='relative group'>
                <Link  to="contact" smooth={true} offset={50} duration={500} >CONTACT</Link>
                <span className='absolute bottom-0 left-0 w-full h-1 bg-yellow-600 transform scale-x-0 group-hover:scale-x-50 transition-transform duration-300 ease-in-out'></span>
            </li>           
        </ul>

        </div>

    </div>
    </div>
  )
}

export default Navbar