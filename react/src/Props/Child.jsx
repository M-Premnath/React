import React from 'react'

const Child = ({name, profession, click}) => {
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>I am a {profession}</h1>
      <button onClick={click}>Click</button>
    </div>
  )
}

export default Child
