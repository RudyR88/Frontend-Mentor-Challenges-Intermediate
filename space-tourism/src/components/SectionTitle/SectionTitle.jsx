import React from 'react';
import './SectionTitle.css';

export default function SectionTitle({num, title}) {
  return (
    <h5 className='uppercase section-title'><span className='numb'>{num}</span>{title}</h5>
  )
}