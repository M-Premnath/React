import React, { useCallback, useState } from 'react'
import Child from "../src/useCallback/child"

const App = () => {
  const [count, setCount] = useState(0);
  const problem = useCallback(()=>{},[]);

  return (
    <div>
      {count}
      <button onClick={()=> setCount(count+1)}>increment</button>
      <Child problem ={problem}/>
    </div>
  )
}

export default App