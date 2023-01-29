import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <nav class=" flex justify-center align-center bg-gray-800 h-20">
        <Link to="/">
          <a class="text-white p-2">Home</a>
        </Link>

        {user ? (
          <button className="text-red-600 p-3 " onClick={handleLogoutButton}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <a class="text-white p-2">Login</a>
            </Link>
            <Link to="/register">
              <a class="text-white p-2">Register</a>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
