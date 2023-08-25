import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgSecondary from '../components/HeroImgSecondary'
import ProjectsContainer from '../components/ProjectsContainer'

const Projects = () => {
  return (
    <div>
      <NavBar />
      <HeroImgSecondary heading='Projects' text='View my Projects' />
      <ProjectsContainer />
      <Footer />
    </div>
  )
}

export default Projects