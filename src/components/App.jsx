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

export default function App() {

    return (
        <div>
            <Navbar />
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


