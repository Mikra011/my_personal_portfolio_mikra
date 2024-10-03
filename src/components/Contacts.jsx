import React from "react"

export default function Contacts() {
    return (
        <div>
            <section
                id="contacts"
                className="h-screen flex justify-center items-center text-center">
                <div
                    className="
                    container flex flex-col mx-auto md:flex-row justify-center 
                    items-center max-w-[1200px] md:w-4/5 py-7">
                    <div
                        className="
                        flex flex-col justify-center items-center md:items-start 
                        w-5/6 md:w-full lg:w-1/2">
                        <p
                            className="
                            font-bold font-play text-xl sm:text-2xl md:text-2xl 
                            lg:text-3xl w-3/5 md:w-3/5 py-5 md:text-justify">
                            CONTACT ME
                        </p>
                        <a
                            href="mailto:roberttothmails@yahoo.com"
                            className="
                            font-italic font-kurale text-sm md:text-xl lg:text-2xl 
                            w-3/5 md:w-3/5 py-5 md:text-justify">
                            roberttothmails@yahoo.com
                        </a>
                    </div>
                    <div className="flex flex-col w-5/6 md:full lg:w-2/3 xl:w-3/5 text-left">
                        <form
                            data-testid="contact-form"
                            action="https://formsubmit.co/e2d8d9b38ef71ec97d9ad027740160a0"
                            method="POST">
                            <div className="flex flex-col py-2">
                                <label htmlFor="name" className="font-kurale">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                    className="
                                        p-2 shadow-lg shadow-scarlet-400 hover:shadow-oasis-600 
                                        dark:text-amethyst-900 focus:outline-none focus:ring-2 
                                        focus:ring-amethyst-500"/>
                            </div>
                            <div className="flex flex-col py-2">
                                <label htmlFor="email" className="font-kurale">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    required
                                    className="
                                        p-2 shadow-lg shadow-scarlet-400 hover:shadow-oasis-600 
                                        dark:text-amethyst-900 focus:outline-none focus:ring-2 
                                        focus:ring-amethyst-500"/>
                            </div>
                            <div className="flex flex-col py-2 max-h-52 md:max-h-64">
                                <label htmlFor="about" className="font-kurale">
                                    Message
                                </label>
                                <textarea
                                    type="text"
                                    name="message"
                                    placeholder="Type your message here"
                                    required
                                    className="
                                        p-2 shadow-lg shadow-scarlet-400 hover:shadow-oasis-600 
                                        dark:text-amethyst-900 focus:outline-none focus:ring-2 
                                        focus:ring-amethyst-500"/>
                            </div>
                            <div className="relative">
                                <button
                                    type="submit"
                                    data-testid="send-btn"
                                    className="
                                    rounded-full p-2 px-4 mt-4 
                                    bg-scarlet-300 dark:bg-scarlet-400
                                    hover:bg-oasis-600
                                    font-play font-medium">
                                    Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}