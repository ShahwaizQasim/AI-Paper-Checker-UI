import React from 'react'
import './heroSection.css'
export default function HeroSection() {
    return (
        <section className="text-gray-600 body-font section-one">
            <div className="container px-20 py-10 mx-auto flex md:flex-row flex-col items-center section-one-childOne">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        AI-Powered OMR Grading System
                        <br className="hidden lg:inline-block" />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Upload your OMR sheet and let AI grade it instantly with high accuracy!
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-4 section-one-childTwo">
                    <div className="img"></div>
                </div>
            </div>
        </section>

    )
}
