import React, { useEffect } from "react"
import '../styles/about/parallaxpictures.css'

export default function About() {

    return (
        <div>
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>
            <section className="h-screen overflow-hidden">
                    <div className="grid">
                        <div className="row">
                            <img src="https://picsum.photos/500/300?random=2-1" alt="" />
                            <img src="https://picsum.photos/500/300?random=2-2" alt="" />
                            <img src="https://picsum.photos/500/300?random=2-3" alt="" />
                            <img src="https://picsum.photos/500/300?random=2-4" alt="" />
                            <img src="https://picsum.photos/500/300?random=2-5" alt="" />
                            <img src="https://picsum.photos/500/300?random=2-6" alt="" />
                            <img src="https://picsum.photos/500/300?random=2-7" alt="" />
                        </div>
                        <div className="row">
                            <img src="https://picsum.photos/500/300?random=3-1" alt="" />
                            <img src="https://picsum.photos/500/300?random=3-2" alt="" />
                            <img src="https://picsum.photos/500/300?random=3-3" alt="" />
                            <img src="https://picsum.photos/500/300?random=3-4" alt="" />
                            <img src="https://picsum.photos/500/300?random=3-5" alt="" />
                            <img src="https://picsum.photos/500/300?random=3-6" alt="" />
                            <img src="https://picsum.photos/500/300?random=3-7" alt="" />
                        </div>
                        <div className="row">
                            <img src="https://picsum.photos/500/300?random=4-1" alt="" />
                            <img src="https://picsum.photos/500/300?random=4-2" alt="" />
                            <img src="https://picsum.photos/500/300?random=4-3" alt="" />
                            <img src="https://picsum.photos/500/300?random=4-4" alt="" />
                            <img src="https://picsum.photos/500/300?random=4-5" alt="" />
                            <img src="https://picsum.photos/500/300?random=4-6" alt="" />
                            <img src="https://picsum.photos/500/300?random=4-7" alt="" />
                        </div>
                    </div>
            </section>
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>
            <section className="h-screen">
                <p>--------------------------------------------------------------</p>
            </section>
        </div>
    )
}