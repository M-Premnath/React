import React, { useState } from 'react'
import './App.css'
const App = () => {

  const images = [
    "https://cdn.pixabay.com/photo/2022/09/29/03/17/baby-7486419_640.jpg",
    "https://cdn.pixabay.com/photo/2024/03/02/07/09/car-8607713_640.jpg",
    "https://cdn.pixabay.com/photo/2023/04/24/06/08/bottlebrushes-7947303_640.jpg",
  ];
  const [activeIndex, setActiveIndex]= useState(0);

  const handleNext = () =>{
    setActiveIndex((activeIndex + 1 + images.length) % images.length);
  };
  const handlePrev = ()=> {
    setActiveIndex((activeIndex - 1 -images.length) % images.length);
  };
  return (
    <div className='App'>
      <div className='img'>
      <img src={images[activeIndex]} alt="" />
      </div>
      <div className='btn'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}
export default App
