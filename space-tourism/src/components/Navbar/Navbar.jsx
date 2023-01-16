import React from 'react';
import { Link } from 'react-router-dom';
import Navlinks from '../Navlinks/Navlinks';
import './Navbar.css';

export function Navbar({toggled, toggleMenu}) {
    const hamburgerUrl = '../assets/shared/icon-hamburger.svg';
    const xUrl = '../assets/shared/icon-close.svg';
    return (
        <header className='header flex-between'>
                <Link to='/'><img className='logo' src='../assets/shared/logo.svg' alt='logo home link' /></Link>
                <hr className='decor' />
                <div className='nav-links'>
                    <Navlinks />
                </div>
                <img className='menu' onClick={toggleMenu} src={!toggled ? hamburgerUrl : xUrl} alt='menu hamburger' />
        </header>
    )
}