import React from 'react'
import "./Featurescard.css"

function Featurescard({img,info}) {
  return (
    <div className='features-card'>
    <img src={img}  className='features-logo' alt='img'/>
      <p className='card-info' >{info}</p>

    </div>
  )
}

export default Featurescard