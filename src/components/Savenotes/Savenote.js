import React from 'react'
import "./Savenote.css"
import close from "../../assets/delete.png"

function titleCase(str){
  return str[0].toUpperCase()+str.slice(1);
}

function DeleteNote(index){
  const savecard = JSON.parse(localStorage.getItem('noties')) || [];
  savecard.splice(index,1);
  localStorage.setItem("noties",JSON.stringify( savecard));
  window.location.reload();
}

function Notecatagery({ category }) {
  const CATEGORY_EMOJI = {
    "shopping": "🛒",
    "work": "👜",
    "personal": "👪",
    "learning": "📘"
  }
  return (
    <div className={`note-card-category bg-${category}`}>
      <span className='note-category-emoji'>{CATEGORY_EMOJI[category]}</span>
    {titleCase(category)}

    </div>
  )
}

function Savenote({index, title, description, category, emoji }) {
  return (
    <div className='note-card'>
      <div className='note-card-emoji'>{emoji}</div>
      <div>
        <h2 className='note-card-title'>{title}</h2>
        <p>{description}</p>
        <Notecatagery category={category} />
      </div>
      
        <img src={close}
         className='delete-card'
         alt='delimg'
         onClick={()=>{
          DeleteNote(index);
         }}
         
         />
    </div>
  )
}

export default Savenote