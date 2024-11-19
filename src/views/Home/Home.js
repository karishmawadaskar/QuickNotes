import React from 'react'
import './Home.css'
import note from './homeimages/noties.png'
import pen from './homeimages/quill-pen.png'
import book from './homeimages/book.png'
import privite from "./homeimages/privacy-settings.png"
import easy from "./homeimages/correct.png"
import like from "./homeimages/heart.png"
import Featurescard from "../../components/Featurescard/Featurescard"
import { Link } from 'react-router-dom'

const FEATURES = [
  {
    img: privite,
    info: 'Note Safe'
  },
  {
    img: easy,
    info: "Easy to Us"
  },
  {
    img: like,
    info: "100K"
  }
]


function Home() {
  return (

    <div>

      <div className='hedding-continer'>

        <h1 className='text-center web-title'> <img src={note} className='img' alt='img'/> Noties </h1>
        <h6 className='text-center title-info'> "Your brain's backup, always ready."</h6>
      </div>
      <div className='features-continer'>

        {
          FEATURES.map(fetures => {
            return (
              <Featurescard
                img={fetures.img}
                info={fetures.info}
              />
            )
          })

        }
      </div>
      <div className='btn-continer'>



       <Link to="/Add"><button className='btn btn-fist'>  Add Note  <img src={pen} className='logo' alt='img'/></button></Link>
       <Link to="/Show"><button className='btn  btn-fist'>  Show Note  <img src={book} className='logo' alt='img'/></button></Link>


      </div>

    </div>
  )
}

export default Home