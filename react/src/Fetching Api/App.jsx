import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData]= useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((d)=> setData(d));
  });
  return (
    <div>
      {data.map((item,index)=>{
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
