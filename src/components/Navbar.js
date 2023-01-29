import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
      <nav class=" flex justify-center align-center bg-gray-800 h-20">
      <Link to="/"  >
        <a  class="text-white p-2">
          Home
        </a>
        </Link>
        
        <Link to="/register">
        <a class="text-white p-2">
          Register
        </a>
        </Link>

        <Link to="/login">
        <a class="text-white p-2">
          Login
        </a>
        </Link>


      </nav>
    </div>
  );
};

export default Navbar;
