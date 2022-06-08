import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Post from './Components/Post';

function App() {
  return <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </>;
}

export default App;
