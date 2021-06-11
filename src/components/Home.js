import React from "react"
import image from "../images/computer.png"

export default function Home () {
    return (
        <main>
            <img 
            src = {image} 
            alt = "Banner" 
            className = "absolute object-cover w-full h-full" 
            />
            <section className = "relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 text-center">
                <h1 className = "text-6xl homepage text-red-800 fond-bold leading-none lg:leading-tight home-name">
                    Sean Monaghan<br />
                    Fullstack Developer
                </h1> 
            </section>
        </main>
    )
}