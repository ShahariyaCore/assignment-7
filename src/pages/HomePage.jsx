import React from 'react'
import FriendsDashboard from '../components/FriendsDashboard'

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Assignment 7</h1>
      <p className="text-lg text-center">This is the home page of your React application.</p>
      <FriendsDashboard></FriendsDashboard>
    </div>
  )
}

export default HomePage