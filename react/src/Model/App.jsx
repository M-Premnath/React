import React, { useState } from 'react'

const App = () => {
    const [open, setOpen]= useState(false);
  return (
    <div>
      <button onClick={()=> setOpen(true)}>Open</button>
      {open &&(
        <div>
            <h1>Hello</h1>
            <button onClick={()=> setOpen(false)}>❌</button>
        </div>
      )}
    </div>
  )
}

export default App
