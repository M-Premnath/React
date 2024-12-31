import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  const [value, setvalue] = useState("");

  function handleAdd(){
setData([...data,value]);
setvalue("");
  }

  function handleRemove(index){
    setData(data.filter((item, i)=> i !== index))
  }
  return (
    <div>
      <input value={value} onChange={(e)=> setvalue(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      {data.map((item,index)=>{
        return(
          <div key={index}>
            <span>{item}</span>
            <button onClick={(e)=>handleRemove(index)}>Remove</button>
          </div>
        )
      })

      }
    </div>
  )
}

export default App