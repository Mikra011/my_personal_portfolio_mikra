import React, { useEffect } from "react";
import gsap from "gsap";
import '../styles/interactivetext.scss'

export default function InteractiveText() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            translate(x, y);
        };

        const handleTouchMove = (e) => {
            const x = e.targetTouches[0].clientX;
            const y = e.targetTouches[0].clientY;
            translate(x, y);
        };

        const translate = (x, y) => {
            const xTranslate = (window.innerWidth / 2 - x) / 20;
            const yTranslate = (window.innerHeight / 2 - y) / 20;

            gsap.to(".interactive-text", {
                textShadow: `
                    ${xTranslate}px ${yTranslate}px 2px rgba(0,0,0,0.01),
                    ${xTranslate}px ${yTranslate}px 10px rgba(0,0,0,0.15),
                    ${-xTranslate}px ${-yTranslate}px 20px rgba(255,255,255, 0.5)`,
                fontVariationSettings: `'wght' ${(x / window.innerWidth) * 700}`,
                "--x-translate": window.innerWidth / 2 - x,
                "--y-translate": window.innerHeight / 2 - y,
                ease: "expo.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <span className="
            interactive-text text-5xl md:text-7xl lg:text-9xl mb-2">
            INTERACTIVE
        </span>
    )
}