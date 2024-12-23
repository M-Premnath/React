import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData]= useState([]);
  const [search, setSearch]= useState("");
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((d)=> setData(d));
  });
  return (
    <div>
      <input  onChange={(e)=>setSearch(e.target.value)} placeholder='Search Products'  />
      {data
      .filter((item, index)=> item.title.toLowerCase().includes(search))
      .map((item,index)=>{
        return(
          <div key={index}>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App
