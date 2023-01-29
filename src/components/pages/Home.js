import React from 'react'

const Home = ({user}) => {
  console.log(user)
  return (
    <div>
        <h1 >Welcome, <span className='text-red-600'>user</span> </h1>
    </div>
  )
}

export default Home