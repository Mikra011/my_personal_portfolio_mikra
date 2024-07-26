// src/components/ImageImporter.js
import React, { useEffect } from "react";

// Import all images dynamically
const imageFiles = import.meta.glob('../assets/about_img_gallery/*.jpg');

const ImageImporter = ({ onImagesLoaded }) => {
    useEffect(() => {
        const loadImages = async () => {
            const images = await Promise.all(
                Object.keys(imageFiles).map(async (key) => {
                    const module = await imageFiles[key]();
                    return { src: module.default, key };
                })
            );

            // Sort images by filename
            images.sort((a, b) => {
                const aIndex = parseInt(a.key.match(/(\d+)\.jpg$/)[1], 10);
                const bIndex = parseInt(b.key.match(/(\d+)\.jpg$/)[1], 10);
                return aIndex - bIndex;
            });

            onImagesLoaded(images.map(img => img.src));
        };

        loadImages();
    }, [onImagesLoaded]);

    return null; // This component does not render anything itself
};

export default ImageImporter;
