import React from 'react'
import "./header.css"
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <h1 className='header__name'>Clay Gibson</h1>
        
        
        <HeaderSocials/>
        
        <CTA/>
        

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
        
      </div>
    </header>
  )
}

export default Header