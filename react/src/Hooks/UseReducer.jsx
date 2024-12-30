import React, { useReducer } from 'react'

const App = () => {
  const initilizatializerArg = 0;
  const [state, dispatch]= useReducer(reducer, initilizatializerArg);
  function reducer (state, action){
    switch(action){
      case "increment":
        return state + 1 ;
      case "decrement":
        return state - 1;
      case "Multi":
        return state * 2;
      default:
        return state;
    }
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=> dispatch("increment")}>Increment</button>
      <button onClick={()=> dispatch("decrement")}>Decrement</button>
      <button onClick={()=> dispatch("Multi")}>Multi</button>
    </div>
  )
}

export default App
