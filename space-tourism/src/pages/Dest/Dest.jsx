import React, { useState } from 'react';
import {nanoid} from 'nanoid';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import PlanetStat from '../../components/PlanetStat/PlanetStat';
import PlanetTab from '../../components/PlanetTab/PlanetTab';
import './Dest.css';

export default function Dest({data}) {
    const [planet, setPlanet] = useState(data[0]);
    const {name, images, description : desc, distance : dist, travel : trav} = planet;

    const switchPlanet = (planet) => {
      setPlanet(data[data.findIndex(item => item.name===planet)])
    }

    const planetTabs = data.map(dest => <PlanetTab key={nanoid()} name={dest.name} switchPlanet={switchPlanet}/>);
  return (
    <div className='dest'>
      <main className='dest__content container'>
        <SectionTitle
          num='01'
          title='pick your destination'
        />
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
