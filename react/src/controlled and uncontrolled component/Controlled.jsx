import React, { useRef } from 'react'

const App = () => {
  const inputRef = useRef();

  function handleClick() {
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <input  ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App