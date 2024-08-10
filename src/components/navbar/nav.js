import React, { useState } from 'react'
import '../navbar/nav.css'
// import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'
import About from '../about/about'
import Home from '../home/home'
import Skill from '../skills/skill'
import Work from '../work/work'
import Contact from '../contact/contact'
import Footer from '../footer/footer'
import menu from '../assets/menu-icon.png'



function Navbar() {
  const [hide, setHide]= useState(false)
  
  const menuBtn=()=>{
    hide ? setHide(false):setHide(true)

  }

  return (
    <div className='parent-container'>

    <div className='nav-parent'>
        <div className='nav-left'>
         <h1 className='logo'>{"<Syed Shaheer/>"}</h1>
        </div>
        <div className='nav-right'>
            <ul className={hide ? "" : "menu-hide"}>
                <li><Link to='home' offset={-150} duration={500} smooth={true}>Home</Link></li>
                <li><Link to='about' offset={-150} duration={500} smooth={true}>About</Link></li>
                <li><Link to='skills' offset={-150} duration={500} smooth={true}>Skills</Link> </li>
                <li> <Link to='works' offset={-150} duration={500} smooth={true}>Works</Link></li>
                <li><Link to='contact' offset={-100} duration={500} smooth={true}>Contact</Link></li>
            </ul>
            <img src={menu} alt='' className='menu-icon' onClick={menuBtn}/>

        </div>
      
    </div>

    <div id='home'>
      <Home/>
    </div>

        <div id='about'>
          <About/>
        </div>

        <div id='skills'>
          <Skill/>
        </div>

        <div>
          <Work/>
        </div>

        <div>
          <Contact/>
        </div>

        <div>
          <Footer/>
        </div>

    </div>
  )
}

export default Navbar
