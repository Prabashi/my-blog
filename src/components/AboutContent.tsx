import React from 'react'
import {Link} from 'react-router-dom';
import AboutImg1 from '../assets/react-1.png';
import AboutImg2 from '../assets/react-2.png';
import '../styles/aboutContent.css'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I'm a full stack developer with experience in React | Express</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='image-container'>
                <div className='img-stack top'>
                    <img src={AboutImg1} className='img' alt='img-1' />
                </div>
                <div className='img-stack bottom'>
                    <img src={AboutImg2} className='img' alt='img-1' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent