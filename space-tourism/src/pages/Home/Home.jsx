import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className='home'>
            <main className='home__content container'>
                <div className='home__content__txt'>
                    <span className='uppercase eyebrow'>so, you want to travel to</span>
                    <h1 className='uppercase'>space</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely 
                        go to outer space and not hover kind of on the edge of it. Well sit back, 
                        and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <span className='idk uppercase'>explore</span>
            </main>
        </div>
    )
}