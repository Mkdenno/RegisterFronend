import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// const url="http://localhost:3000/signup"
const url = "https://mywebbackend.onrender.com/signup";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();



  const handleSubmit=(e)=>{
    e.preventDefault()
    const inputData={
      username,
      email,
      password,
      password_confirmation: passwordConfirmation
    }

    console.log(inputData)
    fetch(`${url}`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'      },
      body: JSON.stringify(inputData),
    })
    .then((response) => {

      if (response.ok) {

        response.json().then((user) => {
          console.log(user)
        });
        navigate("/login");
      } else {
        response.json().then((errorData) => {
          console.log(errorData)

          setErrors(errorData.errors)
        });
      }
    });
    setUsername("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  };

  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img src="./images/register.gif" alt="GIF" />
      </div>
      <div className="flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto p-8 shadow-2xl px-8 rounded-lg">
          <h2 className="text-4xl font-bold text-center">Sign Up</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-lg bg-gray-200 mt-2  p-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg bg-gray-200 mt-2  p-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg bg-gray-200 mt-2  p-2 focus:border-blue-500 focus:outline-none "
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label className=""> Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}

              className="rounded-lg bg-gray-200 mt-2  p-2 focus:border-blue-500 focus:outline-none "
            />
          </div>
          <div className="flex justify-between text-gray-40 py-2">
            <p>Already have account?</p>
            <Link to="/login"><p>Login</p></Link>
          </div>
          <button className="w-full my-5 bg-blue-400 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/30 text-white rounded-lg p-2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
