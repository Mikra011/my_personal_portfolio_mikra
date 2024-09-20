import React, { useState } from 'react';
import projectImages from '../assets/projectImages'

export default function ProjectsImageGallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Function to handle going to the previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
        )
    }

    // Function to handle going to the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
        )
    }

    // Function to handle dot click
    const goToImage = (index) => {
        setCurrentImageIndex(index)
    }

    return (
        <div className="relative text-center">
            <div className='flex '>
                {/* Left arrow button */}
                <button
                    onClick={prevImage}
                    className="absolute self-center bg-amethyst-900 bg-opacity-30 text-spring-100 p-2 cursor-pointer text-sm md:text-lg z-10 left-2.5"
                >
                    ❮
                </button>

                {/* Display the current image */}
                <div className="">
                    <img
                        src={projectImages[currentImageIndex]}
                        alt={`Slide ${currentImageIndex + 1}`}
                        className='h-[200px] md:h-[300px] lg:h-[400px]'
                    />
                </div>

                {/* Right arrow button */}
                <button
                    onClick={nextImage}
                    className="absolute self-center bg-amethyst-900 bg-opacity-30 text-spring-100 p-2 cursor-pointer text-sm md:text-lg z-10 right-2.5"
                >
                    ❯
                </button>
            </div>


            {/* Dots for navigation */}
            <div className="mt-4">
                {projectImages.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`inline-block h-3 w-3 rounded-full mx-1 cursor-pointer transition duration-300 ease-in-out ${currentImageIndex === index ? 'bg-scarlet-500' : 'bg-oasis-400'}`}
                    ></span>
                ))}
            </div>
        </div>
    )
}

