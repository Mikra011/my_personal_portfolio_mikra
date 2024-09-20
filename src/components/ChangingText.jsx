import React, { useState, useEffect } from 'react';
import '../styles/changingtext.css'

export default function ChangingTex() {
    const texts = ["CONTINUE LEARNING", "CONTRIBUTE TO IMPACTFUL PROJECTS", "BENEFIT FROM THE GUIDANCE OF EXPERIENCED PROFESSIONALS"]
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowText(false); // Start sliding up
            setTimeout(() => {
                setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
                setShowText(true); // Start sliding down
            }, 500); // Match this with your CSS animation duration
        }, 4000); // Change text every 2 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [texts.length]);

    return (
        <div 
        className={`
        p-8 m-4 ${showText ? 'flip-in' : 'flip-out'}
        font-play bg-amethyst-900 text-spring-100 dark:bg-spring-100 dark:text-amethyst-900`}>
            <p>
                {texts[currentTextIndex]}
            </p>
        </div>
    );
}


