import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState("");

  function handleClick(e){
    e.preventDefault();
    console.log(value);
  }
  
  return (
    <div>
      <input value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App