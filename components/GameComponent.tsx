import { useState, useEffect } from "react"


export default function GameComponent(props: any) {
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
    }

    const dragStartHandler = (e, card) => {
        setCurrentCard(card)
    }

    const dragEndHandler = (e) => {
        e.target.style.background = 'rgba(0, 0, 0, 0.06)'
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
            e.target.style.background = 'lightgreen'
            setCorrectList(correctList.map(c => c = c.id === currentCard.id? {...c, visibleValue: currentCard.value} : {...c}))
            setCorrectCounter(correctCounter + 1)
        }
        else e.target.style.background = 'rgba(0, 0, 0, 0.06)'
    }


  return (
    <div className = 'Game'>
        <div className="Game__Field">
            {cardList.map(card => 
                card.value !== -10 ?
                <div 
                    key={card.id} 
                    draggable={true}
                    onDragStart={e => dragStartHandler(e, card)} /* Взяли карточку */
                    onTouchStart={e => dragStartHandler(e, card)}
                    onDragLeave={e => dragEndHandler(e)} /* Вышли за пределы другой*/
                    onDragEnd={e => dragEndHandler(e)} /* Отпустили */
                    onTouchMove={e => {dragEndHandler(e) }}
                    onDragOver={e => dragOverHandler(e)} /* Находимся над другой карточкой */
                    onDrop={e => simpleDropHandler(e)} /* Действие, когда отпустили*/
                    onTouchEnd={e => simpleDropHandler(e)}
                    className='ObjectSort'
                >
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
        <h3
            style={props.isReverse? {display: 'flex', justifyContent: 'flex-end', margin: '20px 50px'}
            :
            {display: 'flex', justifyContent: 'flex-start', margin: '20px 50px'}
            }
        >{props.isReverse? 'По убыванию' : 'По возрастанию'}</h3>
        <div 
        className="Answer__Field"
        >
            {correctList.map(card => 
                <div 
                    key={card.id} 
                    onDragLeave={e => dragEndHandler(e)} /* Вышли за пределы другой*/
                    onDragEnd={e => dragEndHandler(e)} /* Отпустили */
                    onTouchEnd={e => dropHandler(e, card)}
                    onDragOver={e => dragOverHandler(e)} /* Находимся над другой карточкой */
                    onDrop={e => dropHandler(e, card)} /* Действие, когда отпустили*/
                    className="Answer">
                    <h2>
                        {card.visibleValue}
                    </h2>
                </div>)
            }
        </div>
    </div>
  )
}