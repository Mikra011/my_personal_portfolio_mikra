import React, { useState, useEffect } from 'react';
import '../styles/ringtext.css';


const RingText = ({ text, btnText, href }) => {
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
            <a href={href}>
                <button className="center-button font-play font-medium">{btnText}</button>
            </a>
        </div>
    )
}

export default RingText
