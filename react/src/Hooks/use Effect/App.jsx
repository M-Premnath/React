import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(()=>{
    document.title = `${count} ${name}`;
    console.log(count);
    let a = document.getElementById("btn1");
    a.addEventListener("click",()=>{
      document.body.style.backgroundColor = "red";
    });
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <input onChange={(e)=> setName(e.target.value)} />
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <button id='btn1'>Click</button>
    </div>
  )
}

export default App
