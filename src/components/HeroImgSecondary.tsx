import React from 'react';
import HeroImg from '../assets/intro-bg.jpeg';
import '../styles/heroImgSecondary.css';

type HeroImgSecondaryType = {
    heading: string
    text: string
}

const HeroImgSecondary = ({heading, text}: HeroImgSecondaryType) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1 >{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImgSecondary