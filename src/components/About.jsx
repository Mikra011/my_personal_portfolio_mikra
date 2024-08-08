// src/pages/About.js
import React, { useState } from "react"
import ImageGrid from "../components/ImageGrid"
import ImageImporter from "../components/ImageImporter"
import '../styles/parallaxpictures.css'
import CallToContact from "./CallToContact";

export default function About() {
    const [images, setImages] = useState([]);

    return (
        <div id="about">
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>
            <section className="h-vh-50 md:h-screen overflow-hidden">
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

