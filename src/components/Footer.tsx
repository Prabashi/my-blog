import React from 'react';
import '../styles/footer.css';
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left-content'>
                <div className='location'>
                    <FaHome size='20' style={{color: 'black', marginRight: '2rem'}} />
                    <div>
                        <p>Singapore</p>
                        <p>Singapore</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size='20' style={{color: 'black', marginRight: '2rem'}} />
                        +65 989 466 82
                    </h4>
                    
                </div>
                <div className='email'>
                    <h4>
                        <FaMailBulk size='20' style={{color: 'black', marginRight: '2rem'}} />
                        prabhashi.mm@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right-content'>
                <h4>Let's Connect!</h4>
                <p>Reach me!</p>
                <div className='social'>
                    <FaFacebook size='20' style={{color: 'black', marginRight: '1rem'}} />
                    <FaTwitter size='20' style={{color: 'black', marginRight: '1rem'}} />
                    <FaLinkedin size='20' style={{color: 'black', marginRight: '1rem'}} />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer