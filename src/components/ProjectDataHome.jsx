import React from 'react';
import ProjectsImageGallery from './ProjectsImageGallery';
import projectData from '../assets/projectData';

export default function ProjectDataHome() {
    const { name, description } = projectData[0];

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-4 md:space-x-8 p-4">
            {/* Left side for images */}
            <div className="p-4 flex lg:flex-row space-x-4">
                <ProjectsImageGallery />
            </div>


            {/* Right side for description */}
            <div className="flex flex-col justify-between p-4 bg-spring-200 text-amethyst-900 dark:bg-amethyst-800 dark:text-spring-100 w-[300px] md:w-[400px] md:h-[372px] lg:h-[472px]">
                <div>
                    <h2 className="text-2xl font-bold fon-play mb-4">{name}</h2>
                    <p className="font-kurale text-justify">{description}</p>
                </div>

                <div className='p-6 flex flex-row justify-between font-play font-bold'>
                    <a href="https://github.com/Mikra011/arcade_clone">Github</a>
                    <a href="https://arcade-clone-front.onrender.com">Try it</a>
                </div>

            </div>
        </div>
    );
}


