import React from "react";
import "./index.css";
// import Home from "./Home";

const Navbar = ({setSearch,search}) => {
  return (
    <nav className="navbar">
      <div className="logo">MovieMania</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Genres</a></li>
        <li><a href="#">Contact</a></li>
        <li><input placeholder="Search Movies" onChange={(e)=>setSearch(e.target.value)} value={search}></input></li>
      </ul>
    </nav>
  );
};

export default Navbar;