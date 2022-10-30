import Settings from "../components/Settings";
import { useState } from "react";
import ArrayElement from "../components/ArrayElement";



export default function Home() {
  let gameSet: number[] | string[];
  gameSet = [] /* Множество, из которого выбираются элементы*/

  const [game, setGame] = useState([])  /* Множество, которое в игре*/
  const [correct, setCorrect] = useState([]) /* Правильный ответ*/

  const [howMany, setHowMany] = useState(2)
  const [numbers, setNumbers] = useState(0)
  const [isReverse, setIsReverse] = useState(false)

  const getRandomInt = (max: number) => Math.floor(Math.random() * max)

  const startGame = () => {
      setGame([])
      let newGame = []
      switch(numbers) {
        case 0: {
          gameSet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О',
        'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'] 
          break
        }
        case 1: {
          gameSet = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
          break
        }
        case 2: {
          gameSet = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
          break
        }
        case 3: {
          for (let i = 20; i <= 50; i++) {
            gameSet.push(i)
          }
          break
        }
        case 4: {
          for (let i = 51; i <= 99; i++) {
            gameSet.push(i)
          }
          break
        }
        default: {
          for (let i = 100; i <= 999; i++) {
            gameSet.push(i)
          }
          break
        }
      }
      let round = [...gameSet]
      for (let i = 0; i < howMany; i++) {
        let newElement = round[getRandomInt(round.length)]
        newGame.push(newElement)
        round = round.filter(elem => elem != newElement)
      }
      setGame([...newGame])
  }

  return (
    <div>
      <Settings 
        howMany={howMany}
        setHowMany={setHowMany} 
        numbers={numbers} 
        setNumbers={setNumbers}
        isReverse={isReverse}
        setIsReverse={setIsReverse}
        startGame={startGame}
      />
      <div style={{border: '2px solid darkgreen'}}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          {game.map(element => <ArrayElement key={element} value={element}/>)}
        </div>
        <div>
          А тут ответы
        </div>
      </div>
    </div>
  )
}
