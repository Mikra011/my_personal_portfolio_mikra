// Navbar.js
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/customstyles.css'
import '../styles/index.css'

export default function Navbar() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/'
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { to: '/home', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/contacts', text: 'Contacts' },
  ];

  return (
    <nav className={isLandingPage 
    ? 'hidden' 
    : 'bg-gray-100 md:flex md:justify-between md:items-canter'}>
      <div className='bg-gray-100 px-3 py-3 flex justify-between items-center'>
        <section>
          <h1 
          className="text-lg md:text-xl lg:text-2xl font-bold 
          leading-tight md:leading-none text-center md:text-left">
            <span className="font-handwritten">Robert&apos;s Portfolio Site</span>
          </h1>
        </section>
        <section className="md:hidden">
          <button onClick={toggleIsOpen} 
          className="navbar-burger flex items-center text-blue-400 
          px-3 py-1 hover:text-blue-900 focus:text-yellow-300" >
            <svg className="block h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>
        </section>
      </div>

      {/* Menu for small screens */}
      <ul className={!isOpen ? 'hidden' : "md:block px-3 py-3  md:flex md:items-center md:space-x-6"}>
        {menuItems.map(item => (
          <li key={item.to}>
            <Link to={item.to} className="
            m-1 block rounded py-1 text-sm text-gray-300 
            hover:text-gray-500 hover:bg-blue-100 
            focus:text-yellow-300"
            >{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Menu for medium and larger screens */}
      <ul className="hidden md:block px-3 py-3  md:flex md:items-center md:space-x-2">
        {menuItems.map(item => (
          <li key={item.to}>
            <Link to={item.to} className="
            m-1 block rounded p-2 text-sm text-gray-300 
            hover:text-gray-500 hover:bg-blue-100 
            focus:text-yellow-300"
            >{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}





