import React from 'react';
import './PlanetTab.css';

export default function PlanetTab({name, switchPlanet}) {
  return (
    <button className='uppercase planet-tab btn btn__transparent' onClick={()=>{switchPlanet(name)}}>{name}</button>
  )
}
