import React from 'react'
import widthcounter from "./widthCounter"

const Counter = (props) => {
  return (
    <div>
        <h1>{props.count}</h1>
        <button onClick={props.handleIncrement}>Increment</button>
        <button onClick={props.handleDecrement}>Decrement</button>
    </div>
  )
}

export default widthcounter(Counter);