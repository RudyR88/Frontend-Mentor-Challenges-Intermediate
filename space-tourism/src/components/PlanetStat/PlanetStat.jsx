import React from 'react'

export default function PlanetStat({title, stat}) {
  return (
    <div className='planet-stat flex-col'>
        <span className='subheading2'>{title}</span>
        <span className='subheading1'>{stat}</span>
    </div>
  )
}