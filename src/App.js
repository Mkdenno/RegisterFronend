import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { useEffect, useState } from "react";

// const url = "http://localhost:3000/me";
const url = "https://mywebbackend.onrender.com/me";
// https://mywebbackend.onrender.com/

function App() {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    // auto-login
    fetch(`${url}`).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);



  return (
    <div className="App">
      <Navbar setUser={setUser} user={user}/>
      <Routes>

            <Route path="/" element={<Home user={user} />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login  setUser={setUser} />}/>

      </Routes>
    </div>
  );
}

export default App;
