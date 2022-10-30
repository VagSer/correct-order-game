import { useState } from "react"

export default function ArrayElement(props: any) {

  const dragStartHandler = (e, card) => {
      console.log('Взяли карточку', card)
      setCurrent(card)
  }
  const dragEndHandler = (e) => {
    e.target.style.background = 'white'
  }
  const dragOverHandler = (e) => {
    e.preventDefault()
    e.target.style.background = 'lightgray'
  }
  const dropHandler = (e, card) => {
    e.preventDefault()
    console.log('Опустили карточку', card)
  }
  
  return (
    <div 
      draggable = {true} 
      style={{cursor: 'grab'}}
      onDragStart={e => dragStartHandler(e, props.value)}
      onDragLeave={e => dragEndHandler(e)}
      onDragOver={e => dragEndHandler(e)}
      onDrop={e => dropHandler(e, props.value)}
    >
      <h2>{props.value}</h2>
    </div>
  )
}
