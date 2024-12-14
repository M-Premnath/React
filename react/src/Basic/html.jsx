// import React from 'react'
 import "./Html.css";
 const Html = () => {
   return (
     <div className='box0'>
       <nav className="navbar">
       <article className="art">
        <div className="box1">
            {/* <img src="https://summitsoft.com/wp-content/uploads/2016/07/Bentley-logo.jpg" alt="logo" /> */}
        </div>
       
        <div className="box2">
            <ul className="list">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Gallery</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Services</a></li>
            </ul>
        </div>
        <div className="box3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>
       </article>
    </nav>

    <div className="hero">
        <p className="p1">Powerful Fun and</p>
        <h1 className="h12">FIERCE TO</h1>
        <h1 className="h13">DRIVE</h1>
        <p className="p2">Real Poise, Real Power, Real Perfomance.</p>
        <button className="btn1">BOOK A TEST RIDE</button>
    </div>


     </div>
   )
 }
 
 export default Html