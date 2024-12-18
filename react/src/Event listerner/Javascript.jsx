// import React from 'react'

const Javascript = () => {
    function handleClick(){
        alert("Hello")
    }
    function handleKeyup(){
        let a=document.body;
        a.style.background="Green";
    }
    return (
    <div>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleKeyup}>Keyup</button>
    </div>
  )
}

export default Javascript
