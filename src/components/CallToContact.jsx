import React from "react";
import { useNavigate } from 'react-router-dom';
import AnimatedInView from "./AnimatedInView";

export default function CallToContact() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contacts');
    };


    return (
        <section className="h-screen flex flex-col items-center justify-center pt-16">

            <div className="flex flex-col items-center">
                <div className="flex flex-row items-start ">
                    <div className="
                        flex flex-col items-center mr-4 mt-6 lg:mt-10 
                        font-alex text-lg md:text-2xl lg:text-4xl">
                        <span>
                            Let&apos;s
                        </span>
                        <span>
                            create
                        </span>
                    </div>
                    <div className="flex flex-col pt-6 font-dancing ">
                        <p className="text-4xl md:text-6xl lg:text-8xl">
                            Something
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <span className="
                        text-3xl md:text-7xl lg:text-9xl
                        font-bold mb-4 font-alfa">
                        MEANINGFUL
                    </span>
                    <span className="text-xl md:text-3xl lg:text-7xl font-semibold font-play">
                        TOGETHER
                    </span>
                </div>
            </div>

            <AnimatedInView
                baseClass="animated-drop-grow"
                animationClass="animate-dg"
                threshold={0.2}>
                <div className="mt-24 relative mb-16">
                    <button
                        onClick={handleClick}
                        className="
                        rounded-full p-2 bg-scarlet-300 dark:bg-scarlet-400
                        hover:bg-oasis-600 text-sm md:text-lg
                        font-play font-medium">
                        Contact Me Here
                    </button>
                </div>
            </AnimatedInView>

        </section>
    )
}
