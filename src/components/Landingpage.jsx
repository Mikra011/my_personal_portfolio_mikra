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
            <section id='welcome-section' className='h-screen'>
                <div className='h-[70vh] flex flex-col justify-between items-center '>
                    <div className="m-0 p-0 flex justify-center items-center h-40 text-center">
                        <h1 className="animated-welcome">Welcome To My Portfolio</h1>
                    </div>
                    <button onClick={routeToSite} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                        Continue as Guest
                    </button>
                    <div>
                        <h1>Or</h1>
                    </div>
                </div>
                <div>
                    <a href='#login-section' className="arrow-down-button">
                        <div className="arrow-down">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                    </a>
                </div>
            </section>
            <section id='login-section' className='h-screen flex justify-center items-center'>
                <p>THIS IS THE LOGIN SECTION</p>
            </section>
        </div>
    )
}