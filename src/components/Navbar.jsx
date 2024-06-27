// Navbar.js
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/customstyles.css'
import '../styles/index.css'

export default function Navbar() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  return (
    <nav className={isLandingPage ? 'hide-nav' : 'relative px-4 py-4 flex justify-between items-center'}>
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight md:leading-none text-center md:text-left">
        <span className="font-handwritten">Mikra Portfolio Site</span>
      </h1>
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-blue-600 p-3">
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul className="hidden lg:flex lg:items-center lg:space-x-6">
        <li>
          <Link to="/home" className="text-sm text-gray-400 hover:text-gray-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-sm text-gray-400 hover:text-gray-500">About</Link>
        </li>
        <li>
          <Link to="/projects" className="text-sm text-gray-400 hover:text-gray-500">Projects</Link>
        </li>
        <li>
          <Link to="/contacts" className="text-sm text-gray-400 hover:text-gray-500">Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}





