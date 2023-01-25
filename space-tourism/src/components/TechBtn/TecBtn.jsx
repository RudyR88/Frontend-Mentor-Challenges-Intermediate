import React from 'react';
import './TechBtn.css';

export default function TecBtn({value, switchTech}) {
  return (
    <span className='tech-btn' onClick={() => {switchTech(value)}}>{value}</span>
  )
}
