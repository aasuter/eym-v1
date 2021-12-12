import React from 'react';
import logoLarge from '../assets/logo.jpg';
import logoSmall from '../assets/Memes.jpg';
import ig from '../assets/ig.png'
import spotify from '../assets/spot.png'

const Header = () => {

    return (
        <div>
            <div className='logo-container'>
                <img src={logoLarge} className='logo-large'></img>
                <img src={logoSmall} className='logo-small'></img>
            </div>
            <div className='social-media-container'>
               
                    
                    <a href='https://www.instagram.com/'><img src={ig} alt="" className='sm-logo'/></a>
                    <a href='https://www.spotify.com/us/'><img src={spotify} alt="" className='sm-logo'/></a>
                
            </div>
        </div>
        
        
    )
};

export default Header
