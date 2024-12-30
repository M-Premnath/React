import React from 'react'
import Navbar from '../src/Routing/Navbar'
import Home from '../src/Routing/Home';
import Contact from '../src/Routing/Contact';
import Service from '../src/Routing/Service';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/service' element = {<Service/>}/>
        <Route path='*' element = {<h1> 404 Error</h1>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
