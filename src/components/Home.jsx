import React from "react"
import RingText from "./RingText"

export default function Home() {
    return (
        <div className="p-6">
            <section className="h-screen text-center content-center">
                <h1 className="font-play">
                    Turning Ideas into <span className="font-alfa">Interactive</span> Experiences
                </h1>
                <p className="font-kurale">
                    for your <span className="text-3xl">business</span>
                </p>
            </section>
            <section className="h-screen flex justify-center items-center">
                <div className="flex-column sm:flex justify-between gap-x-10 items-center">
                    <div className="w-60 md:w-96" >
                        <p className="text-base md:text-xl text-left font-kurale">
                            I&apos;m Robert, a passionate and dedicated aspiring <span className="font-alfa">Full Stack Developer</span>. I specialize in creating dynamic and responsive web applications using technologies like <span className="font-alfa">JavaScript, React and Node.js</span>. I&apos;m eager to bring my skills and enthusiasm to a forward-thinking development team.
                        </p>
                    </div>
                    <div className="p-6">
                        <RingText text="-SHOW MORE-SHOW MORE" btnText="About Me" href="about" />
                    </div>
                </div>

            </section>
            <section className="h-screen">
                <p>------------------</p>
            </section>
        </div>

    )
}