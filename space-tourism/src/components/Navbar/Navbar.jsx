import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    return (
        <nav className='navbar flex-between container'>
            <Link to='/'><img className='logo' src='../assets/shared/logo.svg' alt='' /></Link>
            <img className='menu' src='../assets/shared/icon-hamburger.svg' alt='' />
        </nav> 
    )
}