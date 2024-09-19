import React from 'react';
import { skillsData } from '../assets/skills';
import AnimatedInView from './AnimatedInView';

const Skills = () => {
    return (
        <div className="flex flex-col space-y-4 justify-center">

            <div className="flex flex-col space-y-4 justify-center">
                <AnimatedInView>
                    <h2
                        className="text-2xl font-semibold font-alfa text-center mb-4">
                        Technical Skills
                    </h2>
                </AnimatedInView>

                <div 
                className="
                flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 
                justify-center items-center md:items-start">
                    <AnimatedInView
                        baseClass="animated-left"
                        animationClass="animate-l">
                        <div 
                        className='
                        rounded-xl bg-spring-200 dark:bg-amethyst-800 pt-4
                        w-[300px] md:w-[300px] lg:w-[500px]'>
                            <h2
                                className="text-xl font-semibold font-play text-center">
                                Frequent
                            </h2>
                            <div
                                className="
                                    p-6 flex flex-wrap justify-center
                                    mx-auto text-md font-medium font-kurale">
                                {skillsData.technical.frequent.map((skill, index) => (
                                    <AnimatedInView
                                        baseClass="animated-grow"
                                        animationClass="animate-g"
                                        key={index}>
                                        <div
                                            className="
                                                text-md font-medium text-center border-2 p-2 
                                                rounded-full border-oasis-600 m-2 min-w-[60px] 
                                                bg-spring-100 dark:bg-amethyst-900">
                                            {skill}
                                        </div>
                                    </AnimatedInView>
                                ))}
                            </div>
                        </div>
                    </AnimatedInView>

                    <AnimatedInView
                        baseClass="animated-right"
                        animationClass="animate-r">
                        <div className='
                        rounded-xl bg-spring-200 dark:bg-amethyst-800 pt-4
                        w-[300px] md:w-[500px]'>
                            <h2
                                className="text-xl font-semibold font-play text-center">
                                Ocassional
                            </h2>
                            <div
                                className="
                                    p-6 flex flex-wrap justify-center 
                                    mx-auto text-md font-medium font-kurale"
                            >
                                {skillsData.technical.occasional.map((skill, index) => (
                                    <AnimatedInView
                                        baseClass="animated-grow"
                                        animationClass="animate-g"
                                        key={index}>
                                        <div
                                            className="
                                                text-md font-medium text-center border-2 p-2 
                                                rounded-full border-oasis-600 m-2 min-w-[60px] 
                                                bg-spring-100 dark:bg-amethyst-900">
                                            {skill}
                                        </div>
                                    </AnimatedInView>
                                ))}
                            </div>
                        </div>
                    </AnimatedInView>
                </div>
            </div>

            <div>
                <AnimatedInView>
                    <h2
                        className="text-2xl font-semibold font-alfa text-center mb-4">
                        Soft Skills
                    </h2>
                </AnimatedInView>

                <AnimatedInView
                    baseClass="animated-left"
                    animationClass="animate-l">
                    <div
                        className="
                            p-6 flex flex-wrap justify-center w-[300px] md:w-[500px] 
                            mx-auto text-md font-medium font-kurale
                            rounded-xl bg-spring-200 dark:bg-amethyst-800">
                        {skillsData.softSkills.map((skill, index) => (
                            <AnimatedInView
                                baseClass="animated-grow"
                                animationClass="animate-g"
                                key={index}>
                                <div
                                    className="
                                        text-md font-medium text-center border-2 p-2 
                                        rounded-full border-oasis-600 m-2 min-w-[100px] 
                                        bg-spring-100 dark:bg-amethyst-900">
                                    {skill}
                                </div>
                            </AnimatedInView>
                        ))}
                    </div>
                </AnimatedInView>
            </div>



        </div >
    );
};

export default Skills;
