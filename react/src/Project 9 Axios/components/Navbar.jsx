import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
    <h1>Crud App</h1>
    <Link to="/"> <button>Home</button> </Link>
    <Link to="/create"> <button>Add +</button> </Link>
</nav>
  )
}

export default Navbar