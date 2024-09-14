import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './Landingpage'
import Home from './Home'
import About from "./About"
import Projects from "./Projects"
import Contacts from "./Contacts"
import Navbar from './Navbar'
import '../styles/index.css'
import { useDarkMode } from './hooks/useDarkMode'
import Footer from './Footer'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function App() {
    const [darkMode, setDarkMode] = useDarkMode(false)
    const location = useLocation()

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-spring-100 dark:bg-amethyst-900 text-amethyst-900 dark:text-spring-100">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={2000}
                    >
                        <div className="page-container">
                            <Routes location={location}>
                                <Route path='/' element={<LandingPage />} />
                                <Route path='home' element={<Home />} />
                                <Route path='about' element={<About />} />
                                <Route path='projects' element={<Projects />} />
                                <Route path='contacts' element={<Contacts />} />
                            </Routes>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    )
}


