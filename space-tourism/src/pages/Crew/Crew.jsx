import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import './Crew.css';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

export default function Crew({data}) {
    const [crewmember, setCrewmember] = useState(data[0]);
    const {bio, images, name, role} = crewmember;

    const changeCrew = (index) => {
      setCrewmember(data[index])
    }

    const crewControls = Object.keys(data).map((index) => <span className='dot' key={nanoid()} onClick={()=>{changeCrew(index)}}></span>)
    
  return (
    <div className='crew'>
      <main className='crew__content container'>
        <SectionTitle
          num='02'
          title='meet your crew'
        />
        <div className='crew__content__item'>
          <img src={images.png} alt='' aria-label={`image of ${role} ${name}`}/>
          <hr />
          <div className='crew__content__item__info'>
            <div className='controls'>
              {crewControls}
            </div>
            <div className='crew__content__item__info__txt'>
                <span className='eyebrow uppercase'>{role}</span>
                <h4 className='uppercase'>{name}</h4>
                <p>{bio}</p>
            </div>
          </div>
        </div>
        </main>
    </div>
  )
}
