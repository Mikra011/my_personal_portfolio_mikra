import React from "react"
import RingText from "./RingText"
import CallToContact from "./CallToContact"

export default function Home() {
    return (
        <div className="p-6">
            <section className="h-screen text-center content-center">
                <h1 className="font-play text-4xl md:text-6xl">
                    Turning Ideas into <span className="font-alfa">Interactive</span> Experiences
                </h1>
                <p className="font-kurale">
                    for your <span className="text-3xl">business</span>
                </p>
            </section>

            <section className="
            max-h-150vh md:h-screen 
            flex justify-center items-center">
                <div className="
                flex-column sm:flex justify-between 
                gap-x-10 items-center">
                    <div className="w-60 md:w-96" >
                        <p className="
                        p-6 text-base md:text-xl text-left font-kurale
                        rounded-xl bg-spring-200 dark:bg-amethyst-800">
                            I&apos;m Robert, a passionate and dedicated aspiring <span className="font-alfa">Full Stack Developer</span>. I specialize in creating dynamic and responsive web applications using technologies like <span className="font-alfa">JavaScript, React and Node.js</span>. I&apos;m eager to bring my skills and enthusiasm to a forward-thinking development team.
                        </p>
                    </div>
                    <div className="p-6">
                        <RingText
                            text="-SHOW MORE-SHOW MORE"
                            btnText="About Me"
                            href="about"
                            font="font-dancing" />
                    </div>
                </div>
            </section>

            <section className="
            h-72 truncate mt-36 sm:mt-0 
            text-center content-center">
                <div className="font-play text-4xl sm:text-7xl lg:text-9xl">
                    <span>My Portfolio</span>
                </div>
            </section>

            <section className="
            flex flex-col flex-1
            justify-center items-center">
                <div className="size-32 border-2 border-scarlet-400 rounded-xl bg-spring-200 dark:bg-amethyst-800">

                </div>
                <div className="size-32 border-2 border-scarlet-400 rounded-xl bg-spring-200 dark:bg-amethyst-800">

                </div>
                <div className="size-32 border-2 border-scarlet-400 rounded-xl bg-spring-200 dark:bg-amethyst-800">

                </div>
                <div className="p-6">
                    <RingText
                        text="-SHOW MORE-SHOW MORE"
                        btnText="Projects"
                        to="projects"
                        font="font-dancing" />
                </div>
                <div className="h-24">

                </div>
            </section>

            <CallToContact />

        </div>

    )
}