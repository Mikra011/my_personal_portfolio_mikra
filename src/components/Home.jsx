import React from "react"
import RingText from "./RingText"
import CallToContact from "./CallToContact"

export default function Home() {
    return (
        <div className="p-6">
            <section className="h-screen text-center content-center">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row items-start ">
                        <div className="
                        flex flex-col items-center mr-4 mt-6 lg:mt-10 
                        font-alex text-lg md:text-2xl lg:text-4xl">
                            <span>
                                Turning
                            </span>
                            <span>
                                Ideas
                            </span>
                        </div>
                        <div className="flex flex-col pt-6 font-dancing ">
                            <p className="text-4xl md:text-6xl lg:text-8xl">
                                into
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="
                        text-5xl md:text-7xl lg:text-9xl
                        font-bold mb-2 font-alfa">
                            Interactive
                        </span>
                        <span className="font-play text-4xl md:text-6xl lg:text-8xl mb-2">
                            Experineces
                        </span>
                        <span className="text-sm md:text-xl lg:text-2xl font-kurale font-semibold">
                            for your <span className="text-xl md:text-2xl lg:text-4xl">business</span>
                        </span>
                    </div>
                </div>
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
                <div className="font-play font-bold text-4xl sm:text-7xl lg:text-9xl">
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
                        href="projects"
                        font="font-dancing" />
                </div>
                <div className="h-24">

                </div>
            </section>

            <CallToContact />

        </div>

    )
}