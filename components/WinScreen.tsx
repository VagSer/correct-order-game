import React from 'react'

export default function WinScreen(props) {
  return (
    <div className='WinScreen'>
      <div className='WinScreenContent'>
        <h1 className='Victory'>Победа!</h1>
          <h3 className='WinText'>Молодец! Ты успешно справился с заданием!</h3>
          <button
              className='Reset'
              onClick={() => props.restartGame()}
          >Заново</button>
      </div>
    </div>
  )
}
