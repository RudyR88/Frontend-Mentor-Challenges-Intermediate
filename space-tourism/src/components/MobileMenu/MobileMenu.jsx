import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

export default function MobileMenu() {
    return (
        <div className='mobile-menu'>
            <ul className='uppercase clean-list'>
                <li><Link to='/'><span>00</span>home</Link></li>
                <li><Link to='/destination'><span>01</span>destination</Link></li>
                <li><Link to='/crew'><span>02</span>crew</Link></li>
                <li><Link to='/technology'><span>03</span>technology</Link></li>
            </ul>
        </div>
    )
}
