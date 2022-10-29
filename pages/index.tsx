import Settings from "../components/Settings";
import { useState } from "react";


export default function Home() {
  let gameSet: number[] | string[];
  gameSet = []

  const [game, setGame] = useState([])
  const [correct, setCorrect] = useState([])

  const [howMany, setHowMany] = useState(2)
  const [numbers, setNumbers] = useState(0)
  const [isReverse, setIsReverse] = useState(false)

  const getRandomInt = (max: number) => Math.floor(Math.random() * max)

  const startGame = () => {
      isReverse?
      console.log(`Начали игру. Объектов: ${howMany}, используем множество ${numbers}. Сортировка по убыванию`)
      :
      console.log(`Начали игру. Объектов: ${howMany}, используем множество ${numbers}. Сортировка по возрастанию`)
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
      console.log(gameSet)
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
        <div className="field">
          Тут будет игровое поле
        </div>
        <div>
          А тут ответы
        </div>
      </div>
    </div>
  )
}
