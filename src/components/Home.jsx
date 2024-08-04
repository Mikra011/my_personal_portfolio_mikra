import React from "react"
import RingText from "./RingText"

export default function Home() {
    return (
        <div className="">
            <section className="h-screen text-center content-center">
                <h1 className="p-6 font-play">
                    Turning Ideas into <span className="font-alfa">Interactive</span> Experiences
                </h1>
                <p className="font-kurale">
                    for your <span className="text-3xl">business</span>
                </p>
            </section>
            <section className="h-screen flex justiy-between space-x-4 items-center m-14">
                <div className="p-6 border-2 border-amethyst-500">
                    <p className="text-lg text-left font-kurale">
                        I&apos;m Robert, a passionate and dedicated aspiring <span className="font-alfa">Full Stack Developer</span>. I specialize in creating dynamic and responsive web applications using technologies like <span className="font-alfa">JavaScript, React and Node.js</span>. I&apos;m eager to bring my skills and enthusiasm to a forward-thinking development team.
                    </p>
                </div>
                <div className="p-6">
                    <button>
                        <RingText text="-SHOW MORE-SHOW MORE"/>
                    </button>
                </div>
            </section>
            <section className="h-screen">
                <p>------------------</p>
            </section>
        </div>

    )
}