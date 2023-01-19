import React, {useState} from 'react';
import data from '../../json/data.json';
import './Dest.css';

export default function Dest() {
    const [planets, setPlanets] = useState(data.destinations);
  return (
    <div className='dest'>
        <main>
            
        </main>
    </div>
  )
}
