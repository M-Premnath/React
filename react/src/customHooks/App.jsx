import React from 'react'
import useModel from './customHooks/useModel'
const App = () => {
  const {open, handleOpen, handleClose} = useModel();
  return (
    <div>
      <button onClick={handleOpen}>Open</button>
      {
        open && (
          <div>
            <h1>Hello kitty</h1>
            <button onClick={handleClose}>Close</button>
          </div>
        )
      }
    </div>
  )
}

export default App