// src/pages/About.js
import React, { useState, useEffect } from "react"
import ImageGrid from "../components/ImageGrid"
import ImageImporter from "../components/ImageImporter"
import '../styles/parallaxpictures.css'
import CallToContact from "./CallToContact";

export default function About() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const elements = document.querySelectorAll('[data-speed]');

            elements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-speed')) || 0;
                el.style.transform = `translateX(${scrollY * speed}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial positions

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="about" className="p-1 md:p-6">
            <section className="h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col self-start text-xs font-thin">
                        <span>
                            * SPECIALIZING IN FULL-STACK
                        </span>
                        <span>
                            WEB DEVELOPMENT *
                        </span>
                    </div>

                    <div
                        className="text-3xl md:text-7xl lg:text-9xl font-thin mb-4 font-play tracking-widest mr-16 md:mr-32"
                        data-speed="-0.1">
                        <span>Consistently</span>
                    </div>

                    <div
                        className="flex flex-row items-center"
                        data-speed="0.15">
                        <div className="flex flex-col font-dancing">
                            <span className="text-2xl md:text-6xl lg:text-6xl ml-8 md:ml-40 lg:ml-96">pushing boundaries</span>
                        </div>
                    </div>

                    <div
                        className="flex flex-col items-center font-alex text-sm md:text-xl lg:text-4xl mr-32 lg:mr-4"
                        data-speed="0.25">
                        <span>and</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span
                            className="text-2xl md:text-7xl lg:text-9xl font-semibold mb-4 font-play mr-24 md:mr-40"
                            data-speed="-0.15">
                            embracing
                        </span>
                        <div className="flex flex-row items-center ml-8 md:ml-40">
                            <span
                                className="font-dancing text-sm md:text-xl lg:text-4xl mr-4 mt-2 md:mt-4 lg:mt-8"
                                data-speed="0.1">
                                new
                            </span>
                            <span
                                className="font-play text-md md:text-3xl lg:text-7xl font-semibold"
                                data-speed="0.1">
                                challenges.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-screen p-4 md:p-20 flex flex-col lg:flex-row space-y-8 lg:space-x-16 justify-center items-center">
                <div>
                    <div className="border w-[200px] md:w-[400px] h-[200px] md:h-[400px]"></div>
                </div>
                <div className="m-4 w-[300px] md:w-[600px] font-kurale text-xs md:text-sm lg:text-base border">
                    <p className="mb-4">
                        Hello! It&apos;s a pleasure to introduce myself.
                    </p>
                    <p className="mb-4">
                        I&apos;m Robert Tóth-Ludányi, an ambitious full-stack developer actively honing my skills through <span className="font-alfa">daily coding</span>, driven by a passion for building meaningful solutions and creating seamless user experiences.
                        I am currently completing an 18-month program at <span className="font-alfa">Bloomtech Institute</span> (70% finished), where I&apos;ve been honing my skills in software development.
                    </p>
                    <p className="mb-4">
                        In addition to this, I hold a <span className="font-alfa">Bachelor&apos;s</span> Degree in Audio Engineering from <span className="font-alfa">Middlesex University</span>,
                        which has given me a unique perspective on creativity. This background has taught me how to push myself toward achieving innovative solutions while maintaining precision.
                        I understand the importance of recognizing both the limitations and possibilities offered by technology, and I am comfortable navigating mental challenges as they arise.
                    </p>
                    <p>
                        Throughout my development journey, I&apos;ve built several applications and come to understand the value of writing <span className="font-alfa">clean, maintainable, and DRY code</span>.
                        I prioritize <span className="font-alfa">testing and scalability</span>, ensuring the software I develop can adapt to growth and increased demand.
                    </p>
                </div>

            </section>

            <section className="h-screen p-12 ">
                <p>
                    On a personal note, I&apos;m a proud father of a little girl, and our family includes a &apos;really good boy&apos; (our dog!). Outside of coding, I love to make music, woodworking, hiking, and traveling, although most of my free time lately has been dedicated to coding and development.
                </p>
                <p>
                    I&apos;m excited to join a collaborative team where I can continue learning, take on challenges, and benefit from the guidance of experienced professionals.
                    I thrive in environments that value best practices, and I&apos;m eager to contribute to impactful projects.
                    Feel free to explore my work and reach out—I&apos;d love to connect and discuss how I can contribute to your team!
                </p>
            </section>

            <section className="h-vh-50 md:h-screen ">
                <ImageImporter onImagesLoaded={setImages} />
                <ImageGrid images={images} />
            </section>
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>

            <CallToContact />

        </div>
    )
}

