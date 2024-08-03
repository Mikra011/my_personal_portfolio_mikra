import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import '../styles/landingpage/textanimation.css'

export default function LandingPage() {
    const navigate = useNavigate()
    const [showWelcome, setShowWelcome] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setShowWelcome(false);
            }, 1000); // Match this with the duration of the fade-out animation
        }, 4500); // 4.5 seconds to match the animation duration

        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }, []);

    const routeToSite = () => {
        navigate('home')
    }
    return (
        <div className="">
            <section id='welcome-section' className='h-screen'>
                {showWelcome && (
                    <div className={`welcome-container bg-spring-100 m-0 p-0 flex justify-center items-center text-center text-lg font-alfa${fadeOut ? 'fade-out' : ''}`}>
                        <h1 className="animated-welcome">WELCOME TO MY PORTFOLIO</h1>
                    </div>
                )}
                <div className='h-[70vh] flex flex-row justify-around items-center'>
                    <button onClick={routeToSite} className='bg-amethyst-400 hover:bg-amethyst-500 text-white font-bold py-2 px-4 rounded-full'>
                        Continue as Guest
                    </button>
                    {/* <div>
                        <h1>Or</h1>
                    </div>
                    <a href='#login-section'>
                        <button
                            className='bg-amethyst-400 hover:bg-amethyst-500 text-white font-bold py-2 px-4 rounded-full'>Sign Up / Register
                        </button>
                    </a> */}
                </div>
                {/* <div>
                    <a href='#login-section' className="arrow-down-button">
                        <div className="arrow-down">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                    </a>
                </div> */}
            </section>
            {/* <section id='login-section' className='h-screen flex justify-center items-center'>
                <p>THIS IS THE LOGIN SECTION</p>
            </section> */}
        </div>
    )
}