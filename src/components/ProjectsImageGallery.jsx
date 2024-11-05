import React, { useState, useEffect, useRef } from 'react';
import projectData from '../assets/projectData';

export default function ProjectsImageGallery() {
    const project = projectData[0]
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const containerRef = useRef(null)

    // Function to handle scrolling for small screens
    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
            const maxScrollableDistance = scrollWidth - clientWidth
            const scrollFraction = scrollLeft / maxScrollableDistance
            const newImageIndex = Math.round(scrollFraction * (project.images.length - 1))
            setCurrentImageIndex(newImageIndex)
        }
    }

    // Handle dot click for small screens
    const handleDotClick = (index) => {
        if (containerRef.current) {
            const container = containerRef.current
            const imageWidth = container.clientWidth
            const scrollTo = imageWidth * index
            container.scrollTo({
                left: scrollTo,
                behavior: 'smooth'
            })
        }
    }

    // Functions for large screen navigation
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        )
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const goToImage = (index) => {
        setCurrentImageIndex(index)
    }

    // Effect to handle scroll behavior on small screens
    useEffect(() => {
        const container = containerRef.current
        if (container) {
            container.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll)
            }
        }
    })

    return (
        <div className="relative text-center">
            {/* Render for small screens */}
            <div
                className="
                flex overflow-x-scroll scrollbar-hide snap-x w-[300px] md:hidden"
                ref={containerRef}
                style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' }}>
                {project.images.map((image, index) => (
                    <div key={index} className="snap-center flex-shrink-0" style={{ width: '100%' }}>
                        <img src={image} alt={`Slide ${index + 1}`} className='w-[300px]' />
                    </div>
                ))}
            </div>

            {/* Render for larger screens */}
            <div className="hidden md:flex">
                <button
                    onClick={prevImage}
                    className="
                    absolute self-center bg-amethyst-900 bg-opacity-30 
                    text-spring-100 p-2 cursor-pointer text-sm md:text-lg z-10 left-2.5">
                    ❮
                </button>
                <div className="md:w-[400px] lg:w-[600px] md:h-[266px] lg:h-[400px] overflow-hidden">
                    <img
                        src={project.images[currentImageIndex]}
                        alt={`Slide ${currentImageIndex + 1}`}
                        className='h-full w-full object-cover' />
                </div>
                <button
                    onClick={nextImage}
                    className="
                        absolute self-center bg-amethyst-900 bg-opacity-30 text-spring-100 p-2
                        cursor-pointer text-sm md:text-lg z-10 right-2.5">
                    ❯
                </button>
            </div>

            {/* Dots for navigation */}
            <div className="mt-4">
                {project.images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => {
                            if (window.innerWidth < 768) {
                                handleDotClick(index) // Small screens
                            } else {
                                goToImage(index) // Large screens
                            }
                        }}
                        data-testid="dot"
                        className={`
                            inline-block h-3 w-3 rounded-full mx-1 cursor-pointer transition duration-300 
                            ease-in-out ${currentImageIndex === index ? 'bg-scarlet-500' : 'bg-oasis-400'}`}
                    ></span>
                ))}
            </div>
        </div>
    )
}
