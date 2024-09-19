import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import LandingPage from './Landingpage';
import Home from './Home';
import About from "./About";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Navbar from './Navbar';
import '../styles/index.css';
import { useDarkMode } from './hooks/useDarkMode';
import Footer from './Footer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function App() {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionKey, setTransitionKey] = useState(location.key);
    const navigate = useNavigate();

    // Handle page transition effect and location change
    useEffect(() => {
        // Start the animation
        setTransitionKey(location.key);

        // Delay the location change
        const timer = setTimeout(() => {
            setDisplayLocation(location);
        }, 501); // Delay in milliseconds

        // Cleanup timer
        return () => clearTimeout(timer);
    }, [location]);

    useEffect(() => {
        // Scroll to top after the location is updated
        const scrollTimer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 501);

        return () => clearTimeout(scrollTimer);
    }, [displayLocation]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-spring-100 dark:bg-amethyst-900 text-amethyst-900 dark:text-spring-100">
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <TransitionGroup>
                    <CSSTransition
                        key={transitionKey}
                        classNames="tile"
                        timeout={1000} // Adjust timeout to match animation duration
                    >
                        <div className="page-container">
                            <div className="page-overlay bg-spring-100 dark:bg-amethyst-900"></div>
                            <div className="page-content">
                                <Routes location={displayLocation}>
                                    <Route path='/' element={<LandingPage />} />
                                    <Route path='home' element={<Home />} />
                                    <Route path='about' element={<About />} />
                                    <Route path='projects' element={<Projects />} />
                                    <Route path='contacts' element={<Contacts />} />
                                </Routes>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        </div>
    );
}
