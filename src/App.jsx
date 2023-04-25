import React from 'react'
import Header from "./components/Header/Header"
import Nav from "./components/nav/Nav"
import Music from "./components/music/Music"
import Contact from "./components/contact/contact"
import Shows from "./components/shows/Shows"
import Footer from "./components/footer/Footer"
import Portfolio from "./components/portfolio/Portfolio"


const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Music/>
      <Shows/>
      <Portfolio/>
      <Contact/>
      <Footer/>
       
    </div>
  )
}

export default App