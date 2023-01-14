import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export function Navbar({toggled, toggleMenu}) {
    const hamburgerUrl = '../assets/shared/icon-hamburger.svg';
    const xUrl = '../assets/shared/icon-close.svg';
    return (
        <nav className='navbar flex-between container'>
            <Link to='/'><img className='logo' src='../assets/shared/logo.svg' alt='' /></Link>
            <img className='menu' onClick={toggleMenu} src={!toggled ? hamburgerUrl : xUrl} alt='' />
        </nav> 
    )
}