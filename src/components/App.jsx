import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Landingpage'
import Home from './Home'
import About from "./About"
import Projects from "./Projects"
import Contacts from "./Contacts"
import Navbar from './Navbar'
import '../styles/index.css'
import { useDarkMode } from './hooks/useDarkMode'

export default function App() {
    const [darkMode, setDarkMode] = useDarkMode(false)

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-spring-100 dark:bg-amethyst-900 text-amethyst-900 dark:text-spring-100">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='home' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='contacts' element={<Contacts />} />
                </Routes>
            </div>
        </div>
    )
}


