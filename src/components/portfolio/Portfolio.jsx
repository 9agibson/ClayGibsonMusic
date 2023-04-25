import React, {useState} from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/clay-blue-light.jpg'
import IMG2 from '../../assets/clay1.jpg'
import IMG3 from '../../assets/clay2.jpg'
import IMG4 from '../../assets/clay3.jpg'
import IMG5 from '../../assets/clay4.jpg'
import IMG6 from '../../assets/clay5.jpg'

const Portfolio = () => {
  const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];
  

  

  return (
    <section id='portfolio'>
      

      <div className='container portfolio__container'>
        {images.map(image => 
        <article className='portfolio__item'>
          <div className='portfolio__item-image'><img  src={image} id={image} alt=""/> </div>
        </article>
        )}
      </div>
    </section>
  )
}

export default Portfolio