//clone file 
// import React from 'react'
import Child from './Props/Child'
const App = () => {
 const data1 ="Premnath";
 const data2 ="React Developer";
 
 function handleClick(){
  alert("Welcome to React js class");
  let body = document.body;
  body.style.backgroundColor = "black";
  body.style.color = "white";
 }
 
  return (
    <div>
    <Child name={data1} profession={data2} click ={handleClick}  />
    </div>
  )
}

export default App
