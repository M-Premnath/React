import React, { useState } from 'react';
import './list.css';

const Birthday = () => {
  const [data, setdata] = useState([
    { name: "Sham roy", age: 29, img: "https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_640.jpg" },
    { name: "Raj sheaker", age: 32, img: "https://cdn.pixabay.com/photo/2024/02/02/04/20/men-8547227_640.png" },
    { name: "Emma watson", age: 36, img: "https://cdn.pixabay.com/photo/2021/02/22/16/34/portrait-6040876_1280.jpg" },
    { name: "Sipla shetty", age: 34, img: "https://cdn.pixabay.com/photo/2023/05/27/11/00/ai-generated-8021270_1280.jpg" },
    { name: "Manoj Kumar", age: 29, img: "https://cdn.pixabay.com/photo/2024/07/05/07/40/woman-8874102_960_720.jpg" },
    { name: "Nithish Kumar", age: 26, img: "https://cdn.pixabay.com/photo/2024/01/20/12/12/ai-generated-8520972_960_720.png" }
  ]);

  return (
    <div className='main'>
      <div className='card'>
        <h1>{data.length} Birthdays Today</h1>
        {data.map((item, index) => {
          return (
            <div key={index} className='birthday-item'>
              <img src={item.img} className='birthday-image' />
              <div className="person-details">
              <span className="name">{item.name}</span>
              <span className='age'>{item.age} Years</span>
              </div>
            </div>
          );
        })}
        <button className='btn' onClick={() => setdata([])}>Clear All</button>
      </div>
    </div>
  );
};

export default Birthday;
