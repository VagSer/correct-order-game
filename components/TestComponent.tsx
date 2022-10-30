import { useState, useEffect } from "react"


export default function TestComponent(props) {
    const sortValues = (a, b) => {
        if (a.value > b.value) return 1
        else return -1
    }

    const [cardList, setCardList] = useState([...props.game])

    let correctAnswer = props.isReverse? [...cardList].sort(sortValues).reverse() : [...cardList].sort(sortValues)

    const [correctList, setCorrectList] = useState([...correctAnswer])
    const [correctCounter, setCorrectCounter] = useState(0)

    const [currentCard, setCurrentCard] = useState(null)

    const simpleDropHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'white'
    }

    const dragStartHandler = (e, card) => {
        setCurrentCard(card)
    }

    const dragEndHandler = (e) => {
        e.target.style.background = 'white'
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    useEffect(() => {
        if (correctCounter == correctList.length) props.setGameIsWin(!props.gameIsWin)
    })

    const dropHandler = (e, card) => {
        e.preventDefault()
        if (card.id === currentCard.id) {
            setCardList(cardList.map(c => c = c.id === currentCard.id? {...c, value: -10} : {...c}))
            setCorrectList(correctList.map(c => c = c.id === currentCard.id? {...c, visibleValue: currentCard.value} : {...c}))
            setCorrectCounter(correctCounter + 1)
        }
        e.target.style.background = 'white'
    }


  return (
    <div>
        <h2>ЭТО ТЕСТОВЫЙ КОМПОНЕНТ</h2>
        <div style={{border: '1px solid black', display:'flex', justifyContent: 'space-around'}}>
            {cardList.map(card => 
                card.value !== -10 ?
                <div 
                    key={card.id} 
                    draggable={true}
                    onDragStart={e => dragStartHandler(e, card)} /* Взяли карточку */
                    onDragLeave={e => dragEndHandler(e)} /* Вышли за пределы другой*/
                    onDragEnd={e => dragEndHandler(e)} /* Отпустили */
                    onDragOver={e => dragOverHandler(e)} /* Находимся над другой карточкой */
                    onDrop={e => simpleDropHandler(e)} /* Действие, когда отпустили*/
                    style={{cursor: 'grab', width: '100px', height: '100px', justifyContent: 'center', display: 'flex', border: '2px solid blue', margin: '10px'}}>
                    <h2>
                        {card.value}
                    </h2>
                </div>
                :
                <div 
                    key={card.id} 
                    style={{width: '100px', height: '100px', justifyContent: 'center', display: 'flex', border: '2px solid blue', margin: '10px'}}>
                    <h2>
                        {card.visibleValue}
                    </h2>
                </div>
                )
            }
        </div>
        <h3>Отсортируй</h3>
        <div style={{border: '1px solid black', display:'flex', justifyContent: 'space-around'}}>
            {correctList.map(card => 
                <div 
                    key={card.id} 
                    onDragLeave={e => dragEndHandler(e)} /* Вышли за пределы другой*/
                    onDragEnd={e => dragEndHandler(e)} /* Отпустили */
                    onDragOver={e => dragOverHandler(e)} /* Находимся над другой карточкой */
                    onDrop={e => dropHandler(e, card)} /* Действие, когда отпустили*/
                    style={{width: '100px', height: '100px', justifyContent: 'center', display: 'flex', border: '2px solid blue', margin: '10px'}}>
                    <h2>
                        {card.visibleValue}
                    </h2>
                </div>)
            }
        </div>
    </div>
  )
}