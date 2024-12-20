import React, {useState} from 'react'

const App = () => {
  const [data, setdata] = useState(["Prem", "Vickey","Manoj", "Nithin"]);
  return (
    <div>
      <h1>Total {data.length}</h1>
      { data.map((item, index)=>{
          return <div key={item}>{item}</div>;
        })}
      <button onClick={()=> setdata([])}>Clear</button>
    </div>
  );
};

export default App
