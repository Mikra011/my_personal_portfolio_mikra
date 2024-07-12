import React from 'react';
import { useNavigate } from "react-router-dom"
import '../styles/landingpage/arrow.css'
import '../styles/landingpage/textanimation.css'

export default function LandingPage() {
    const navigate = useNavigate()

    const routeToSite = () => {
        navigate('home')
    }
    return (
        <div className="landing-page">
            <section id='welcome-section' className=''>
                <div className="text-container">
                    <h1 className="animated-welcome">Welcome To My Portfolio</h1>
                </div>
                <button onClick={routeToSite}>
                    Continue as Guest
                </button>
                <h1>Or</h1>
                <button className="arrow-down-button">
                    <div className="arrow-down">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                </button>
            </section>
            <section id='login-section'>

            </section>
        </div>
    )
}