import React from 'react'

const Square = (props) => {
  const handleClick = () => {
    props.exAndOh(props.index)
  }
  return (
    <div className="square" onClick={handleClick}>{props.value}</div>
  )
}
export default Square
