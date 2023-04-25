import React from 'react'
import "./music.css"
import fullBand from '../../assets/full-band-bluelight.jpg'
import AudioPlayer from '../Player/AudioPlayer'

const Music = () => {
  return (
    <section id='music'>
      <h5>Check it out</h5>
      <h2>New Music</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={fullBand} alt="Clay Gibson Band"/>
          </div>

        </div>
        <div className='about__content'>
          <AudioPlayer/>
          </div>
        </div>

      
    </section>
  )
}

export default Music