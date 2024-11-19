import React from 'react'
import "./Homebtn.css"
import Homeimg from '../../assets/3d-house.png'
import { Link } from 'react-router-dom'

function Homebtn() {
  return (
    <Link to="/"><img src= {Homeimg} className='home-icon' alt='img'/></Link>
  )
}

export default Homebtn