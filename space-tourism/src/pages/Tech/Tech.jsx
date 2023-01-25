import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TecBtn from '../../components/TechBtn/TecBtn';
import './Tech.css';

export default function Tech({data}) {
    const [tech, setTech] = useState(data[0]);
    const {description: desc, images, name} = tech;

    const changeTech = (value) => {
        setTech(data[value - 1]);
    };

    const techBtns = data.map((item, index) => <TecBtn key={nanoid()} value={index + 1} switchTech={changeTech}/>)

  return (
    <div className='tech'>
        <main className='container'>
            <SectionTitle
                num='03'
                title='space launch 101'
            />
            <div className='content'>
                <img src={images.landscape} alt='' aria-hidden='true'/>
                <div className='content__info'>
                    <div className='controls'>
                        {techBtns}
                    </div>
                    <span className='uppercase eyebrow2'>the terminology...</span>
                    <h4 className='uppercase'>{name}</h4>
                    <p>{desc}</p>
                </div>
            </div>

        </main>
    </div>
  )
}
