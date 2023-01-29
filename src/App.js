import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";

const url = "http://localhost:3000/profile";

function App() {
  const [user, setUser] = useState(null);
  // const token = localStorage.getItem("jwt");

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  });

  return (
    <div className="App">
      <Navbar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home  user={user}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login  setUser={setUser}/>} />
      </Routes>
    </div>
  );
}

export default App;
