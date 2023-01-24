import React, { useState } from 'react';
import {nanoid} from 'nanoid';
import data from '../../json/data.json';
import PlanetStat from '../../components/PlanetStat/PlanetStat';
import PlanetTab from '../../components/PlanetTab/PlanetTab';
import './Dest.css';

export default function Dest() {
    const [planet, setPlanet] = useState(data.destinations[0]);

    const switchPlanet = (planet) => {
      setPlanet(data.destinations[data.destinations.findIndex(item => item.name===planet)])
    }

    const {name, images, description : desc, distance : dist, travel : trav} = planet;
    const planetTabs = data.destinations.map(dest => <PlanetTab key={nanoid()} name={dest.name} switchPlanet={switchPlanet}/>);

  return (
    <div className='dest'>
        <main className='dest__content container'>
            <h5 className='uppercase'><span className='numb'>01</span>pick your destination</h5>
            <div className='dest__content__item'>
              <img src={images.png} alt='' aria-hidden='true'/>
              <div>
                <div className='tabs'>
                  {planetTabs}
                </div>
                <h2 className='uppercase'>{name}</h2>
                <p>{desc}</p>
                <hr />
                <div className='dest__content__stat uppercase'>
                  <PlanetStat
                    title='avg. distance'
                    stat={dist} 
                  />
                  <PlanetStat
                    title='est. travel time'
                    stat={trav} 
                  />
                </div>
              </div>
            </div>
        </main>
    </div>
  )
}
