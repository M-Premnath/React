import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch]= useState("");

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=47811686-888ff7389a6e9b1e8fe8c51c4&q=${search}&image_type=photo`)
    .then((res) => res.json())
    .then((d) => setData(d.hits));
  });
  return (
    <div>
      <input  onChange={(e)=>setSearch(e.target.value)}  placeholder='Search Images' />
      {data.map((item, index)=>{
        return(
          <div key={index}>
            <img src={item.largeImageURL}
            height={item.webformatHeight}
            width={item.webformatWidth}
            alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default App
