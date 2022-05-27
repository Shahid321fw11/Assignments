import React from 'react'
// import ReactDOM from 'react-dom'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Logout from './Components/Logout';
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  const user = localStorage.getItem("token");
  return <>
    <Navbar />
    {/* <Logout /> */}
    <Routes>
      {user && <Route path="/" exact element={<Logout />} />}
      <Route path="/" element={<HomePage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  </>
}

export default App;
