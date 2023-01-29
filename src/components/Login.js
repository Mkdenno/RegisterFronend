import React from 'react'

const Login = () => {
  return (
    <div className='container grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
      <img src="./images/login.gif" alt="GIF" />
      </div>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto p-8 shadow-2xl px-8 rounded-lg'>
          <h2 className='text-4xl font-bold text-center'>Sign In</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label className=''>Username</label>
            <input type='text' name='username' className='rounded-lg bg-gray-200 mt-2  p-2 focus:border-blue-500 focus:outline-none'/>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label className=''>Password</label>
            <input type='password' name='username' className='rounded-lg bg-gray-200 mt-2  p-2 focus:border-blue-500 focus:outline-none '/>
          </div>
          <div className='flex justify-between text-gray-40 py-2'>
            <p><input type="checkbox" className="mr-2"/>Remember me</p>
            <p>Forgot password</p>
          </div>
          <button className='w-full my-5 bg-blue-400 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/30 text-white rounded-lg p-2'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default Login