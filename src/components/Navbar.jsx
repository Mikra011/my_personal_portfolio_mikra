// Navbar.js
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/customstyles.css'
import '../styles/index.css'

export default function Navbar() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'

  return (
    <nav className={isLandingPage ? 'hidden' : 'bg-gray-100 px-3 py-3 flex justify-between items-center'}>
      <section>
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight md:leading-none text-center md:text-left">
          <span className="font-handwritten">Robert&apos;s Portfolio Site</span>
        </h1>
      </section>
      <section className="md:hidden">
        <button className="navbar-burger flex items-center text-blue-400 p-3 hover:text-blue-900 focus:text-yellow-300" >
          <svg className="block h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </section>
      <ul className="hidden md:flex md:items-center md:space-x-6">
        <li>
          <Link to="/home" className="text-sm text-gray-300 hover:text-gray-500 focus:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-sm text-gray-300 hover:text-gray-500 focus:text-yellow-300">About</Link>
        </li>
        <li>
          <Link to="/projects" className="text-sm text-gray-300 hover:text-gray-500 focus:text-yellow-300">Projects</Link>
        </li>
        <li>
          <Link to="/contacts" className="text-sm text-gray-300 hover:text-gray-500 focus:text-yellow-300">Contacts</Link>
        </li>
      </ul>
    </nav>
  )
}





