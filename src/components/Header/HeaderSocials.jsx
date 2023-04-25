import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsSpotify} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/claygibsonmusic/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://open.spotify.com/album/2HDQEp8pYA9RNLSPAriKyJ" target="_blank" rel="noreferrer"><BsSpotify/></a>
        <a href="https://www.facebook.com/claygibsonmusic" target="_blank" rel="noreferrer"><AiOutlineFacebook/></a>
    </div>
  )
}

export default HeaderSocials