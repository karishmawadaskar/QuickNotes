import React from 'react'

function Card({img,info}) {
  return (
    <div>                   
        <div><img src={img} alt='img'/></div>
        <p>{info}</p>

    </div>
  )
}

export default Card