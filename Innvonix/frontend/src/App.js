import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return <>
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  </>
}

export default App;
