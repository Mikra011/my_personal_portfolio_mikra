import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import LandingPage from './Landingpage'
import Home from './Home'
import About from "./About"
import Projects from "./Projects"
import Contacts from "./Contacts"
import '../styles/customstyles.css'

function App() {
  const location = useLocation()
  const isLandingPage = location.pathname === '/';

  return (
    <div>
      <nav className={isLandingPage ? 'hide-nav' : ''}>
        <h1>Mikra Portfolio Site</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`items-list`) */}
          <Link to='home' >Home</Link>
          <Link to='about' >About</Link>
          <Link to='projects' >Projects</Link>
          <Link to='contacts' >Contacts</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contacts />} />
        {/* Add other routes for About, Projects, Contacts if needed */}
      </Routes>
    </div>
  )
}

export default App;
