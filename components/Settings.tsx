

export default function Settings(props: any) {

  return (
    <div className="card">
        <div className="cardContent">
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
                    value={props.howMany}
                    onChange={e => props.setHowMany(Number(e.target.value))}
                />
            </div>
            <h2 className="paramName">Значения</h2>
            <div className='wrapper_width'>
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
                    value={props.numbers}
                    onChange={e => props.setNumbers(Number(e.target.value))}
                />
            </div>
            <div className="wrapper_width">
                <div className="options">
                    <button
                        className={!props.isReverse? "selectedOrder" : 'order'}
                        disabled={!props.isReverse? true : false}
                        onClick={() => props.setIsReverse(!props.isReverse)}
                    >
                        По возрастанию
                    </button>
                    <button
                        className={props.isReverse? "selectedOrder" : 'order'}
                        disabled={props.isReverse? true : false}
                        onClick={() => props.setIsReverse(!props.isReverse)}
                    >
                        По убыванию
                    </button>
                </div>
            </div>
            <button
                className="Start"
                onClick={() => props.startGame()}
            >
                Играть
            </button>
        </div>
    </div>
  )
}
