import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Assignment 7</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/About" className="hover:underline">About</Link>
          <Link to="/Contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
