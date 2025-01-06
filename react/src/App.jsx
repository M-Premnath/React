import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Project 9 Axios/components/Home.jsx';
import Create from '../src/Project 9 Axios/components/Create.jsx';
import Edit from '../src/Project 9 Axios/components/Edit.jsx';
import '../src/Project 9 Axios/main.css';
import Navbar from '../src/Project 9 Axios/components/Navbar';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;