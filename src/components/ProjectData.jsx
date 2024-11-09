import React from 'react';
import ProjectsImageGallery from './ProjectsImageGallery';
import AnimatedInView from './AnimatedInView';

export default function ProjectData({ project }) {

    return (
        <div
            className="
                flex flex-col md:flex-row rounded-xl justify-center 
                space-y-4 md:space-y-0 md:space-x-8 p-4 lg:h-[450px]">
            {/* Left side for images */}

            <AnimatedInView
                baseClass="animated-left"
                animationClass="animate-l"
                threshold={0.2}>
                <div className="flex lg:flex-row space-x-4">
                    <ProjectsImageGallery images={project.images} />
                </div>
            </AnimatedInView>

            {/* Right side for description */}
            <AnimatedInView
                baseClass="animated-right"
                animationClass="animate-r"
                threshold={0.2}>
                <div
                    className="
                        px-4 flex flex-col justify-between text-amethyst-900  bg-spring-200 h-full
                        dark:bg-amethyst-800 dark:text-spring-100 w-[300px] md:w-[400px] rounded-xl">
                    <div>
                        <h2 className="text-2xl font-bold fon-play mb-4 mt-6">{project.name}</h2>

                        <p className="font-kurale text-justify">{project.description}</p>
                    </div>

                    <div className='p-6 flex flex-row justify-between font-play font-bold'>
                        <a
                            href="https://github.com/Mikra011/arcade_clone"
                            rel="noopener noreferrer"
                            target="_blank"
                            className='
                                flex items-center rounded-full 
                                px-3 py-1 border-transparent border-2
                                hover:border-oasis-600 hover:border-2
                                bg-spring-100 dark:bg-amethyst-900'
                        >Github</a>
                        <a
                            href="https://arcade-clone-front.onrender.com"
                            rel="noopener noreferrer"
                            target="_blank"
                            className='
                                flex items-center rounded-full 
                                px-3 py-1 border-transparent border-2
                                hover:border-oasis-600 hover:border-2
                                bg-spring-100 dark:bg-amethyst-900'
                        >Try it</a>
                    </div>
                </div>
            </AnimatedInView>
        </div>
    )
}


