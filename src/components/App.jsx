import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Landingpage'
import Home from './Home'
import About from "./About"
import Projects from "./Projects"
import Contacts from "./Contacts"
import Navbar from './Navbar'
import '../styles/app.css'
import '../styles/index.css'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
    const [darkMode, setDarkMode] = useDarkMode(true)

    return (
        <div className={darkMode ? "bg-spring-100" : "bg-amethyst-900"}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='projects' element={<Projects />} />
                <Route path='contacts' element={<Contacts />} />
            </Routes>
        </div>
    )
}


