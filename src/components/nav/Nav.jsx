import React from 'react'
import "./nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {FiMusic} from 'react-icons/fi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineCamera} from 'react-icons/ai'
import {BsTicketPerforated} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
      <AiOutlineHome/>
      </a>
      <a href='#music' onClick={() => setActiveNav('#music')} className={activeNav === '#music' ? 'active' : ''}><FiMusic/></a>
      <a href='#shows' onClick={() => setActiveNav('#shows')} className={activeNav === '#shows' ? 'active' : ''}><BsTicketPerforated/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineCamera/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav