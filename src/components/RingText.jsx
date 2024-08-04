import React, { useState, useEffect } from 'react';
import '../styles/ringtext.css';


const TextRing = ({ text }) => {
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY / 4)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="text-ring-container">
            <div className="text-ring font-dancing font-bold">
                {text.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{
                            transform: `rotate(${index * (360 / text.length)}deg) rotate(${rotation}deg)`
                        }}
                    >
                        {char}
                    </span>
                ))}
            </div>
            <button className="center-button font-play font-medium">About Me</button>
        </div>
    )
}

export default TextRing
