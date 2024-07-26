import React from "react";

const ImageGrid = ({ images }) => {
    // Divide images into rows of 7
    const rows = [];
    for (let i = 0; i < images.length; i += 7) {
        rows.push(images.slice(i, i + 7))
    }

    return (
        <div className="grid">
            {rows.map((row, rowIndex) => (
                <div className="row h-24 sm:h-36 md:h-52 lg:h-60" key={rowIndex}>
                    {row.map((src, index) => (
                        <img 
                        key={index} src={src} 
                        alt={`image-${rowIndex}-${index}`} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
