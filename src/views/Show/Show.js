import React, { useEffect, useState } from 'react'
import './Show.css'
import book from '../Home/homeimages/book.png'
import Homebtn from '../../components/Homebtn/Homebtn'

import Savenote from '../../components/Savenotes/Savenote';

function Show() {

  const [notes,setnotes]= useState([]);

  useEffect(()=>{
    const savenotes = JSON.parse(localStorage.getItem("noties")) || [];
   setnotes(savenotes);
  },[])
  return (
    <div>
          <h1 className='text-center web-title'> <img src={book} className='img' alt='img'/> Show Note </h1>
          <div className='save-note-continer'>
          {
            notes.map((note,index)=>{ 
              const{title,description,category,emoji} = note;
              return(
             <Savenote
             index={index}
             title={title}
             description={description}
             category={category}
             emoji={emoji}
             />
              )
            })
          }
       </div>

          <Homebtn/>
    </div>
  )
}

export default Show