import React, { useState, useEffect } from 'react';
import '../styles/ringtext.css';


const RingText = ({ text, btnText, href, font }) => {
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
            <a href={href}>
                <button className="
                rounded-full p-2
                center-button font-play font-medium 
                border-2 border-transparent
                hover:border-oasis-600 hover:border-2"
                >{btnText}</button>
            </a>
        </div>
    )
}

export default RingText
