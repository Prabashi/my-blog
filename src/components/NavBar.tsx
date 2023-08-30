import React, {useEffect, useState} from 'react';
import '../styles/navbar.css';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isChangeHeaderBgColor, setIsChangeHeaderBgColor] = useState(false);

    const handleMenuIconClick = () => {
        setIsShowMenu(!isShowMenu);
    }

    const handleHeaderBgColorChange = () => {
        setIsChangeHeaderBgColor(window.screenY >= 100);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleHeaderBgColorChange)
    }, [])

  return (
    <div className={isChangeHeaderBgColor ? 'nav-header nav-header-bg' : 'nav-header'}>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>
        <ul className={isShowMenu ? 'nav-menu active' : 'nav-menu'}>
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
        <div className='hamburger'>
            {isShowMenu ?
                <FaTimes size={20} style={{color: 'grey'}} onClick={handleMenuIconClick} />
            :
                <FaBars size={20} style={{color: 'grey'}} onClick={handleMenuIconClick} />
        }
        </div>
    </div>
  )
}

export default NavBar