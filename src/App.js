import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={ <Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
