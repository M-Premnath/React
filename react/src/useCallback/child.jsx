import React from 'react'

const child = ({problem}) => {
    console.log("I am from child")
  return (
    <div>child</div>
  )
}

export default React.memo(child)