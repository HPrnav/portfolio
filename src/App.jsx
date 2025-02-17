 import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from "./components/Project"
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Element } from 'react-scroll'

function App() {

  return (
    <div>
      <div className=' overflow-x-hidden flex flex-col gap-16'>
      <Navbar/>

        <Element name='about'> <Hero /> </Element>
        <hr className='text-white' />

        <Element name='portfolio'> <Skills /></Element>
        <hr className='text-white' />

        <Projects />
        <hr className='text-white' />

        <Element name='contact'><Contact /></Element>
        <Footer></Footer>
 
      </div>
    </div>
  )
}

export default App
