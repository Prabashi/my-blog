import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgSecondary from '../components/HeroImgSecondary'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImgSecondary heading='About' text='Learn more about me' />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About