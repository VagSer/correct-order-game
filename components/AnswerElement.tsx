

export default function AnswerElement(props: any) {
  
  return (
    <div 
      onDragLeave={e => props.dragEndHandler(e)} /* Вышли за пределы другой*/
      onDragEnd={e => props.dragEndHandler(e)} /* Отпустили */
      onTouchEnd={e => props.dropHandler(e, props.card)}
      onDragOver={e => props.dragOverHandler(e)} /* Находимся над другой карточкой */
      onDrop={e => props.dropHandler(e, props.card)} /* Действие, когда отпустили*/
      className="Answer">
        <h2 className="Object__Text">
          {props.card.visibleValue}
        </h2>
    </div>
  )
}
