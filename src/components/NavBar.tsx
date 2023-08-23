import React from 'react';
import '../styles/navbar.css';
import {Link} from 'react-router-dom';
import Home from '../pages/Home';

const NavBar = () => {
  return (
    <div className='header'>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>
        <ul>
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/projects'>
                    Projects
                </Link>
            </li>
            <li>
                <Link to='/about'>
                    About
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                    Contact
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar