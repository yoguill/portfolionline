import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import Typewriter from 'typewriter-effect';


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey ! je suis</h5>
        {/* <h1>Guillaume Roche</h1> */}
        <h1><Typewriter className="Typewriter" options={{strings: ['Guillaume Roche'], autoStart: true, loop: true,}}/></h1>
        <h5 className="text-light">Développeur FrontEnd/BackEnd</h5>
        <CTA />      
        <HeaderSocial />     
        
        <div className="me">
          <img src={ME} alt="me" />        
        </div>  

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header