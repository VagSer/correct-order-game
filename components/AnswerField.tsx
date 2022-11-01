

export default function AnswerField(props: any) {
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
      onDragStart={e => dragStartHandler(e, props.value)}
      onDragLeave={e => dragEndHandler(e)}
      onDragOver={e => dragOverHandler(e)}
      onDrop={e => dropHandler(e, props.value)}
      style={{width: '100px', height: '100px', background: 'grey'}}
    >
    </div>
  )
}
