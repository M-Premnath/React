import React, { useState } from 'react';
import './list.css';

const Birthday = () => {
  const [data, setdata] = useState([
    { name: "Sham roy", age: 29, img: "../Birthday list/Assets/person1.png" },
    { name: "Raj sheaker", age: 32, img: "https://placehold.co/600x400@2x.png" },
    { name: "Emma watson", age: 36, img: "https://placehold.co/600x400@2x.png" },
    { name: "Sipla shetty", age: 34, img: "https://placehold.co/600x400@2x.png" },
    { name: "Manoj Kumar", age: 29, img: "https://placehold.co/600x400@2x.png" },
    { name: "Nithish Kumar", age: 26, img: "https://placehold.co/600x400@2x.png" }
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
