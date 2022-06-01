import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ClassRoom from './Components/ClassRoom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Professor from './Components/Professor';
import StudentGroup from './Components/StudentGroup';

function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/professor' element={<Professor />} />
        <Route path='/classRoom' element={<ClassRoom />} />
        <Route path='/studentGroup' element={<StudentGroup />} />
        <Route path="*" element={<div>Not Found</div>} />

      </Routes>
    </BrowserRouter>


  </>
}

export default App;
