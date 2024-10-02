// Navbar.js
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/index.css'

export default function Navbar(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const isLandingPage = location.pathname === '/'
  const [isOpen, setIsOpen] = useState(false)

  const toggleMode = e => {
    e.preventDefault()
    props.setDarkMode(!props.darkMode)
  }

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const menuItems = [
    { to: '/home', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/contacts', text: 'Contacts' },
  ]

  return (
    <nav className={isLandingPage
      ? 'hidden'
      : 'fixed top-0 w-full z-50 md:flex md:justify-between md:items-center'}>
      <div className='px-3 py-3 flex justify-between items-center'>
        <button
          onClick={toggleMode}
          data-testid="theme-toggle-button"
          className='
          p-1 rounded-full bg-spring-100 dark:bg-amethyst-900'>
          <svg id="theme-toggle-dark-icon" className={props.darkMode ? 'hidden w-5 h-5' : 'w-5 h-5 transition-transform duration-200 hover:scale-125'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
          <svg id="theme-toggle-light-icon" className={props.darkMode ? 'w-5 h-5 transition-transform duration-200 hover:scale-125' : 'hidden w-5 h-5'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path></svg>
        </button>

        <section className="md:hidden">
          <button
            onClick={toggleIsOpen}
            data-testid="navbar-burger"
            className="
            flex items-center rounded-full 
            px-3 py-1 border-transparent border-2
            hover:border-oasis-600 hover:border-2
            bg-spring-100 dark:bg-amethyst-900" >
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
      <ul 
      data-testid="mobile-menu"
      className={!isOpen ? 'hidden' : "px-3 py-3 flex flex-col items-center justify-center min-h-[150px]"}>
        {menuItems.map(item => (
          <li key={item.to}>
            <button onClick={() => navigate(item.to)} className="
            m-1 block rounded-full p-2 py-1 
            text-sm font-play font-medium
            border-2 border-transparent
            hover:border-oasis-600 hover:border-2
            focus:text-amethyst-500
            bg-spring-100 dark:bg-amethyst-900
            w-[200px] h-[50px]">
              {item.text}</button>
          </li>
        ))}
      </ul>

      {/* Menu for medium and larger screens */}
      <ul className="hidden md:block px-3 py-3  md:flex md:items-center md:space-x-2">
        {menuItems.map(item => (
          <li key={item.to}>
            <button onClick={() => navigate(item.to)} className="
            m-1 block rounded-full p-2 text-sm md:text-lg font-play font-medium
            border-2 border-transparent bg-spring-100 dark:bg-amethyst-900
            hover:border-oasis-600 hover:border-2
            focus:text-amethyst-500">
              {item.text}</button>
          </li>
        ))}
      </ul>


    </nav>
  )
}





