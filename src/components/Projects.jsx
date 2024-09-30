import React from "react"
import CallToContact from "./CallToContact"
import ProjectDataHome from "./ProjectDataHome"

export default function Projects() {
    return (
        <div id="projects">
            <section className="h-screen flex justify-center items-center text-center mt-8">
                <div>
                    <ProjectDataHome />
                </div>
            </section>

            <CallToContact />
        </div>
    )
}