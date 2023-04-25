import React from 'react'
import "./shows.css"
import Widget from './Widget'

const Shows = () => {
  return (
    <section id='shows'>
      
        <h5>Catch a show </h5>
        <h2>Upcoming Performances</h2>
      
      <div className='container experience__container'>
        <Widget/>
      </div>
      
    </section>
  )
}

export default Shows