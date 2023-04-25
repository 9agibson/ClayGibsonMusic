import React from 'react'
import "./footer.css"
import {BsInstagram} from 'react-icons/bs'
import {BsSpotify} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'

const Footer = () => {
   
  return (
    <footer>
      <a href='#' className='footer__logo'>Clay Gibson</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#music">About</a></li>
        <li><a href="#shows">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.instagram.com/claygibsonmusic/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://open.spotify.com/album/2HDQEp8pYA9RNLSPAriKyJ" target="_blank" rel="noreferrer"><BsSpotify/></a>
        <a href="https://www.facebook.com/claygibsonmusic" target="_blank" rel="noreferrer"><AiOutlineFacebook/></a>
    </div>

      <div className='footer__copyright'>
        <small>&copy; Aaron Gibson Dev {new Date().getFullYear()}</small>
      </div>
    </footer>
  )
}

export default Footer