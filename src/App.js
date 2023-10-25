import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(0) 
  // const [winner, setWinner] = useState([
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  // ]) 
  // const WinnerWinner = () => {
  //   if (
      
  //   )
  // }

  const restartGame = () => {
    let defaultBoard = (Array(9).fill(null))
    setSquares(defaultBoard) 
  }

const exAndOh = (index) => {
  if (player ===0 && squares[index] === null){
    let updatedBoard = [...squares];
    updatedBoard[index] = "☠️";
    setSquares(updatedBoard);
    setPlayer(1);
  }else if (player === 1 && squares[index] === null){
    let updatedBoard = [...squares];
    updatedBoard[index] = "🎃";
    setSquares(updatedBoard);
    setPlayer(0)
  }
}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className='toeBoard'>
      {squares.map((value, index) => {
        return (
          <Square 
          value={value}
          key={index}
          index={index}
          exAndOh={exAndOh}
        />
        )
      })}
      <button className='restartButton' onClick={restartGame}>Restart💀</button>
      </div>
    </>
  )
}

export default App