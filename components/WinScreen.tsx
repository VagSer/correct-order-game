import React from 'react'

export default function WinScreen(props) {
  return (
    <div>
        Игра выиграна!
        <button
            onClick={() => props.restartGame()}
        >Заново</button>
    </div>
  )
}
