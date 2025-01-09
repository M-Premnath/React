import React from 'react'
import Child from "./Render Props/Child"

const App = () => {
  return (
    <div>
      <Child
      render ={(name)=>{
        return (
          <div>
            <h1>Hello {name}</h1>
          </div>
        )
      }}
      />
    </div>
  )
}

export default App