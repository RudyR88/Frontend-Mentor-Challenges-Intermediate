import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

export default function Home() {
    return (
        <div className='home'>
            <main className='home__content container'>
                <div className='home__content__txt'>
                    <h5 className='uppercase'>so, you want to travel to</h5>
                    <h1 className='uppercase'>space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely 
                        go to outer space and not hover kind of on the edge of it. Well sit back, 
                        and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link to ='./destination' className='explore uppercase'>explore</Link>
            </main>
        </div>
    )
}