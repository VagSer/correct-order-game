
export default function ArrayElement(props: any) {
  
  return (
    <div
      draggable={true}
      onDragStart={e => props.dragStartHandler(e, props.card)} /* Взяли карточку */
      onTouchStart={e => props.dragStartHandler(e, props.card)}
      onDragLeave={e => props.dragEndHandler(e)} /* Вышли за пределы другой*/
      onDragEnd={e => props.dragEndHandler(e)} /* Отпустили */
      onTouchMove={e => props.dragEndHandler(e)}
      onDragOver={e => props.dragOverHandler(e)} /* Находимся над другой карточкой */
      onDrop={e => props.simpleDropHandler(e)} /* Действие, когда отпустили*/
      onTouchEnd={e => props.simpleDropHandler(e)}
      className={`ObjectSort _${props.card.style}`}
    >
      <h2 className="Object__Text">
          {props.card.value}
      </h2>
    </div>
  )
}
