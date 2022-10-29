import { useState } from "react"

export default function Settings() {
    const [howMany, setHowMany] = useState(2)

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
    </div>
  )
}
