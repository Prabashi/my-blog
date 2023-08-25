import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgSecondary from '../components/HeroImgSecondary'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImgSecondary heading='Contact' text='Cotact me' />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact