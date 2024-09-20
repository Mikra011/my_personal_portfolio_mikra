// src/pages/About.js
import React, { useState, useEffect } from "react"
import ImageGrid from "../components/ImageGrid"
import ImageImporter from "../components/ImageImporter"
import '../styles/parallaxpictures.css'
import CallToContact from "./CallToContact";
import Skills from "./Skills";
import AnimatedInView from "./AnimatedInView";
import ChangingText from "./ChangingText";
import { useNavigate } from 'react-router-dom';

export default function About() {
    const [images, setImages] = useState([])

    const navigate = useNavigate()

    const handleContactClick = () => {
        navigate('/contacts')
    }

    const handleProjectsClick = () => {
        navigate('/projects')
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const elements = document.querySelectorAll('[data-speed]')

            elements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-speed')) || 0
                el.style.transform = `translateX(${scrollY * speed}px)`
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll(); // Call once to set initial positions

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
                        className="
                        text-4xl md:text-7xl lg:text-9xl font-thin 
                        mb-4 font-play tracking-widest mr-16 md:mr-32"
                        data-speed="-0.1">
                        <span>Consistently</span>
                    </div>

                    <div
                        className="flex flex-row items-center"
                        data-speed="0.15">
                        <div className="flex flex-col font-dancing">
                            <span
                                className="
                            text-3xl md:text-6xl lg:text-6xl 
                            ml-8 md:ml-40 lg:ml-96">
                                pushing boundaries</span>
                        </div>
                    </div>

                    <div
                        className="
                        flex flex-col items-center font-alex text-sm 
                        md:text-xl lg:text-4xl mr-32 lg:mr-4"
                        data-speed="0.25">
                        <span>and</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span
                            className="
                            text-3xl md:text-7xl lg:text-9xl font-semibold 
                            mb-4 font-play mr-24 md:mr-40"
                            data-speed="-0.15">
                            embracing
                        </span>
                        <div className="flex flex-row items-center ml-8 md:ml-40">
                            <span
                                className="font-dancing text-sm md:text-xl 
                                lg:text-4xl mr-4 mt-2 md:mt-4 lg:mt-8"
                                data-speed="0.1">
                                new
                            </span>
                            <span
                                className="font-play text-lg md:text-3xl 
                                lg:text-7xl font-semibold"
                                data-speed="0.1">
                                challenges.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="
                p-4 md:p-20 flex flex-col lg:flex-row 
                space-y-8 lg:space-x-16 justify-center items-center">
                <div>
                    <div className="border w-[200px] md:w-[400px] h-[200px] md:h-[400px]"></div>
                </div>
                <div
                    className="
                    p-4 m-4 w-[300px] md:w-[600px] lg:w-[750px] font-kurale 
                    text-sm md:text-md lg:text-lg rounded-xl 
                    bg-spring-200 dark:bg-amethyst-800 text-justify">
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

            <section className="h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col items-center mr-48 md:mr-24 lg:mr-48">
                    <div
                        className="
                        flex flex-col items-center font-alex text-lg 
                        md:text-2xl lg:text-6xl ml-96 md:ml-32 lg:mr-32"
                        data-speed="-0.1">
                        <span>I am a</span>
                    </div>

                    <div
                        className="flex flex-row items-center"
                        data-speed="0.15">
                        <div className="flex flex-col font-play">
                            <span
                                className="
                                text-3xl md:text-6xl lg:text-8xl font-thin 
                                mb-4 font-play tracking-widest mr-48 md:mr-32">
                                curious
                                <span className="text-2xl md:text-5xl lg:text-6xl font-dancing"> soul,</span>
                            </span>
                        </div>
                    </div>

                    <div
                        className="
                        text-3xl md:text-6xl lg:text-8xl font-thin 
                        mb-4 font-play tracking-widest mr-96 md:mr-64"
                        data-speed="0.25">
                        <span>learning </span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span
                            className="
                            text-3xl md:text-7xl lg:text-9xl font-semibold 
                            mb-4 font-play ml-[500px] md:ml-[750px] lg:mr-40 min-w-[170px] md:min-w-[700px]"
                            data-speed="-0.15">
                            <span
                                className="
                                font-dancing text-sm md:text-xl
                                lg:text-4xl mr-4 mt-2 md:mt-4 lg:mt-8">
                                and
                            </span> growing
                        </span>
                        <div className="flex flex-row items-center md:mr-8 lg:ml-96">
                            <span
                                className="font-play text-lg md:text-3xl lg:text-7xl font-semibold mr-1"
                                data-speed="0.1">
                                every
                            </span>
                            <span
                                className="font-dancing text-sm md:text-xl lg:text-4xl mr-4 mt-2 lg:mt-8"
                                data-speed="0.1">
                                day.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-4 pt-12" >
                <Skills />
            </section>

            <section
                className="
                p-4 h-screen flex flex-col md:flex-row space-y-8 md:space-x-8 
                justify-center items-center">
                <AnimatedInView
                    baseClass="animated-drop-grow"
                    animationClass="animate-dg"
                    threshold={0.2}>
                    <h1
                        className="
                        p-4 font-play text-3xl md:text-4xl lg:text-6xl font-semibold 
                        w-[300px] md:w-[400px] lg:w-[600px] font-play">
                        On a personal note:</h1>
                </AnimatedInView>

                <AnimatedInView
                    baseClass="animated-grow"
                    animationClass="animate-g"
                    threshold={0.2}>
                    <p
                        className="
                        p-4 font-kurale text-md lg:text-xl w-[300px] lg:w-[400px]
                        rounded-xl bg-spring-200 dark:bg-amethyst-800 text-justify">
                        I&apos;m a proud father of a little girl, and our family includes a &apos;really good boy&apos; (our dog!). Outside of coding, I love to make music, woodworking, hiking, and traveling, although most of my free time lately has been dedicated to coding and development.
                    </p>
                </AnimatedInView>
            </section>

            <section className="h-vh-50 md:h-screen ">
                <ImageImporter onImagesLoaded={setImages} />
                <ImageGrid images={images} />
            </section>

            <section className="p-8 pt-48 flex justify-center items-center">
                <div
                    className="
                        flex flex-col justify-canter items-center
                        text-xl md:text-2xl lg:text-4xl text-center">

                    <AnimatedInView
                        baseClass="animated-left"
                        animationClass="animate-l"
                        threshold={0.2}>
                        <p
                            className="
                            p-8 font-kurale">
                            I&apos;m excited to join a <span className="font-bold font-alfa">collaborative</span> team where I can:
                        </p>
                    </AnimatedInView>

                    <ChangingText />

                    <div
                        className="
                            p-8 font-kurale">

                        <AnimatedInView
                            baseClass="animated-right"
                            animationClass="animate-r"
                            threshold={0.2}>
                            <p>Feel free to explore</p>
                        </AnimatedInView>

                        <AnimatedInView
                            baseClass="animated-grow"
                            animationClass="animate-g"
                            threshold={0.2}>
                            <div className="m-4">
                                <button
                                    onClick={handleProjectsClick}
                                    className="
                                    rounded-full p-2 bg-scarlet-400
                                    hover:bg-oasis-600 text-sm md:text-lg
                                    font-play font-medium">
                                    my work
                                </button>
                            </div>
                        </AnimatedInView>

                        <AnimatedInView
                            baseClass="animated-left"
                            animationClass="animate-l"
                            threshold={0.2}>
                            <p>and</p>
                        </AnimatedInView>

                        <AnimatedInView
                            baseClass="animated-grow"
                            animationClass="animate-g"
                            threshold={0.2}>
                            <div className="m-4">
                                <button
                                    onClick={handleContactClick}
                                    className="
                                    rounded-full p-2 bg-scarlet-400
                                    hover:bg-oasis-600 text-sm md:text-lg
                                    font-play font-medium">
                                    reach out
                                </button>
                            </div>
                        </AnimatedInView>

                        <AnimatedInView
                            baseClass="animated-right"
                            animationClass="animate-r"
                            threshold={0.2}>
                            <p>
                                I&apos;d love to connect and discuss how I can contribute to your team!
                            </p>
                        </AnimatedInView>
                    </div>
                </div>




            </section>

            <CallToContact />

        </div>
    )
}

