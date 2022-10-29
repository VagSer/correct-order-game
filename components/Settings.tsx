import { useState } from "react"

export default function Settings() {
    const [howMany, setHowMany] = useState(2)
    const [numbers, setNumbers] = useState(0)
    const [isReverse, setIsReverse] = useState(false)

  return (
    <div className="card">
        <h2 className="paramName">Кол-во предметов</h2>
        <div className='wrapper'>
            <div className="options">
                <h3>2</h3>
                <h3>3</h3>
                <h3>4</h3>
                <h3>5</h3>
            </div>
            <input 
                className="appRange"
                type='range'
                min={2}
                step={1}
                max={5}
                value={howMany}
                onChange={e => setHowMany(Number(e.target.value))}
            />
        </div>
        <h2 className="paramName">Значения</h2>
        <div className='wrapper'>
            <div className="options">
                <h3>А</h3>
                <h3>9</h3>
                <h3>19</h3>
                <h3>50</h3>
                <h3>99</h3>
                <h3>999</h3>
            </div>
            <input 
                className="appRange"
                type='range'
                min={0}
                step={1}
                max={5}
                value={numbers}
                onChange={e => setNumbers(Number(e.target.value))}
            />
        </div>
        <div className="wrapper">
            <div className="options">
                <button
                    className={!isReverse? "selectedOrder" : 'order'}
                    disabled={!isReverse? true : false}
                    onClick={() => setIsReverse(!isReverse)}
                >
                    По возрастанию
                </button>
                <button
                    className={isReverse? "selectedOrder" : 'order'}
                    disabled={isReverse? true : false}
                    onClick={() => setIsReverse(!isReverse)}
                >
                    По убыванию
                </button>
            </div>
        </div>
        <button>
            Играть
        </button>
    </div>
  )
}
