import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(0)

// const handleGamePlay = (index) => {
  // alert(index)
const exAndOh = (index) => {
  if (player ===0 && squares[index] === null){
    let updatedBoard = [...squares];
    updatedBoard[index] = "❌";
    setSquares(updatedBoard);
    setPlayer(1);
  }else if (player === 1 && squares[index] === null){
    let updatedBoard = [...squares];
    updatedBoard[index] = "⭕️";
    setSquares(updatedBoard);
    setPlayer(0)
  }
}
  


// if (updatedBoard[index] === null) {
//   updatedBoard[index] = "⭕"; // Switch from X to O
// } else if(updatedBoard[index] === null){
//   updatedBoard[index] = "❌"; // Switch from O to X
// }
// setSquares(updatedBoard)

// }




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
          // handleGamePlay={handleGamePlay}
          exAndOh={exAndOh}
        />
        )
      })}
      </div>
    </>
  )
}

export default App