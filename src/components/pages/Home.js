import React from 'react'

const Home = ({user}) => {
  console.log(user.username)
  return (
    <div>
        <h1 >Welcome, <span className='text-red-600'>{`${user.username}`}</span> </h1>
    </div>
  )
}

export default Home