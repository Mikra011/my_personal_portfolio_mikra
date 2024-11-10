import React from "react"
import CallToContact from "./CallToContact"
import ProjectData from "./ProjectData"
import projectData from '../assets/projectData';

export default function Projects() {
    const projects = projectData

    return (
        <div id="projects">
            <section className="h-screen flex justify-center items-center text-center mt-8">
                <div>
                    <ProjectData project={projects[1]} />
                </div>
            </section>

            <section className="h-screen flex justify-center items-center text-center mt-8">
                <div>
                    <ProjectData project={projects[0]} />
                </div>
            </section>

            <CallToContact />
        </div>
    )
}