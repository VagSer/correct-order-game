import { useState } from "react"


export default function TestComponent() {
    const [cardList, setCardList] = useState([
        {id: 1, value: "3 Карточка"},
        {id: 2, value: "1 Карточка"},
        {id: 3, value: "2 Карточка"},
        {id: 4, value: "4 Карточка"},
    ])
 

    const [currentCard, setCurrentCard] = useState(null)

    const sortCards = (a, b) => {
        if (a.id > b.id) return 1
        else return -1
    }

    const dragStartHandler = (e, card) => {
        console.log('Взяли карточку', card)
        setCurrentCard(card)
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
        console.log('Отпустили карточку ', card)
        setCardList(cardList.sort(sortCards).map(c => {
            if (c.id === card.id) return {...c, value: currentCard.value} /* Если карточка в массиве совпадает с той, на которую мы навели */
            if (c.id === currentCard.id) return {...c, value: card.value} /* Если карточка в массиве совпадает с той, которую мы взяли */
            return c
        }))
        e.target.style.background = 'white'
    }


  return (
    <div>
        <h2>ЭТО ТЕСТОВЫЙ КОМПОНЕНТ</h2>
        <div style={{border: '1px solid black', display:'flex', justifyContent: 'space-around'}}>
            {cardList.map(card => 
                <div 
                    key={card.id} 
                    draggable={true}
                    onDragStart={e => dragStartHandler(e, card)} /* Взяли карточку */
                    onDragLeave={e => dragEndHandler(e)} /* Вышли за пределы другой*/
                    onDragEnd={e => dragEndHandler(e)} /* Отпустили */
                    onDragOver={e => dragOverHandler(e)} /* Находимся над другой карточкой */
                    onDrop={e => dropHandler(e, card)} /* Действие, когда отпустили*/
                    style={{cursor: 'grab', width: '100px', height: '100px', justifyContent: 'center', display: 'flex', border: '2px solid blue', margin: '10px'}}>
                    {card.value}
                </div>)
            }
        </div>
    </div>
  )
}