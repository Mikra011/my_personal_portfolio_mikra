import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/landingpage/textanimation.css';

export default function LandingPage() {
    const navigate = useNavigate();
    const [showWelcome, setShowWelcome] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setShowWelcome(false);
                navigate('home'); // Navigate to home after hiding the welcome message
            }, 1000); // Match this with the duration of the fade-out animation
        }, 4500); // 4.5 seconds to match the animation duration

        return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }, [navigate]);

    return (
        <div className="">
            <section id='welcome-section' className='h-screen'>
                {showWelcome && (
                    <div className={`welcome-container bg-spring-100 m-0 p-4 flex justify-center items-center text-center text-4xl md:text-6xl lg:text-8xl font-alfa${fadeOut ? 'fade-out' : ''}`}>
                        <h1 className="animated-welcome ">
                            <div className='flex flex-col' >
                                <span>
                                    ROBERT&apos;S
                                </span>
                                <span>
                                    PORTFOLIO
                                </span>
                            </div>

                        </h1>
                    </div>
                )}
            </section>
        </div>
    );
}
