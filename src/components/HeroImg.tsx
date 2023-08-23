import React from 'react'
import '../styles/heroImg.css';
import IntroImg from '../assets/intro-bg.jpeg';
import {Link} from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='Intro Img'></img>
        </div>
        <div className='content'>
            <p>React | Express | JS | TS | MySQL | MongoDB | CI/CD | Testing</p>
            <h1>Hi, I'm a Full Stack Developer</h1>
            <div>
                <Link to='/projects' className='btn'>
                    Projects
                </Link>
                <Link to='/contact' className='btn btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg