import React from "react"
import RingText from "./RingText"
import '../styles/decortext.css'

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

            <section className="max-h-150vh md:h-screen flex justify-center items-center">
                <div className="flex-column sm:flex justify-between gap-x-10 items-center">
                    <div className="w-60 md:w-96" >
                        <p className="
                        p-6 text-base md:text-xl text-left font-kurale
                        rounded-xl border-2 border-scarlet-400 bg-spring-200 dark:bg-amethyst-800"
                        >
                            I&apos;m Robert, a passionate and dedicated aspiring <span className="font-alfa">Full Stack Developer</span>. I specialize in creating dynamic and responsive web applications using technologies like <span className="font-alfa">JavaScript, React and Node.js</span>. I&apos;m eager to bring my skills and enthusiasm to a forward-thinking development team.
                        </p>
                    </div>
                    <div className="p-6">
                        <RingText text="-SHOW MORE-SHOW MORE" btnText="About Me" href="about" />
                    </div>
                </div>

            </section>

            <section className="h-72 truncate mt-36 sm:mt-0 text-center content-center">
                <div className="font-play text-2xl sm:text-4xl lg:text-6xl">
                    <h1>My Portfolio</h1>
                </div>
            </section>

            <section className="h-screen flex flex-col justify-center items-center">
                <div className="size-32 border-2 border-scarlet-400 rounded-xl bg-spring-200 dark:bg-amethyst-800">

                </div>
                <div className="size-32 border-2 border-scarlet-400 rounded-xl bg-spring-200 dark:bg-amethyst-800">

                </div>
                <div className="size-32 border-2 border-scarlet-400 rounded-xl bg-spring-200 dark:bg-amethyst-800">

                </div>
            </section>

            {/* <section className="h-52 truncate mt-36 sm:mt-0">
                <div className="grid-text">
                    <div className="row-text font-alex text-lg sm:text-2xl">
                        <span>Descipline Commitment Resiliance Passion Dedication Creativity Collaboration Precision Efficiency Integrity Descipline Commitment Resiliance Passion Dedication Creativity Collaboration Precision Efficiency Integrity  Descipline Commitment Resiliance Passion Dedication Creativity Collaboration Precision Efficiency Integrity</span>
                    </div>
                    <div className="row-text font-dancing text-2xl sm:text-4xl lg:text-6xl">
                        <span>My Portfolio - My Portfolio - My Portfolio - My Portfolio - My Portfolio - My Portfolio - My Portfolio - My Portfolio - My Portfolio</span>
                    </div>
                    <div className="row-text font-alex text-lg sm:text-2xl">
                        <span> Passion Dedication Creativity Collaboration Precision Efficiency Integrity Descipline Commitment Resiliance  Passion Dedication Creativity Collaboration Precision Efficiency Integrity Descipline Commitment Resiliance </span>
                    </div>
                </div>
            </section> */}
        </div>

    )
}