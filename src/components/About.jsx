// src/pages/About.js
import React, { useState } from "react"
import ImageGrid from "../components/ImageGrid"
import ImageImporter from "../components/ImageImporter"
import '../styles/parallaxpictures.css'

const About = () => {
    const [images, setImages] = useState([]);

    return (
        <div id="about">
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>
            <section className="h-screen overflow-hidden">
                <ImageImporter onImagesLoaded={setImages} />
                <ImageGrid images={images} />
            </section>
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>
        </div>
    );
};

export default About;
