import './App.css';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import CompC from './Components/CompC';
import CompD from './Components/CompD';
import Navbar from './Components/Navbar';

function App() {
  return <>
    <Navbar />
    <CompA />
    <CompB />
    {/* <CompC /> */}
    <CompD />

  </>
}

export default App;
