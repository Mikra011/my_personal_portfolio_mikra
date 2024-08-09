import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/ringtext.css';

export default function RingText({ text, btnText, to, font }) { 
    const [rotation, setRotation] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY / 4)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = () => {
        navigate(to)
    }

    return (
        <div className="text-ring-container text-center">
            <div className={`text-ring ${font}`}>
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{
                            transform: `
                            rotate(${index * (360 / text.length)}deg) 
                            rotate(${rotation}deg)
                            `
                        }}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <button
                onClick={handleClick} // Handle button click
                className="
                rounded-full p-2 bg-scarlet-400
                hover:bg-oasis-600
                center-button font-play font-medium">
                {btnText}
            </button>
        </div>
    );
}
