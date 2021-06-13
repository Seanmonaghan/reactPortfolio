import React from "react"
import photo from "../images/photo.png";

export default function Home () {
    return (
        <main className = "bg-gradient-to-b from-blue-800 to-blue-500 relative flex-auto justify-center min-h-screen pt-12 pb-12 lg:pt-20 lg:pb-20 px-8 text-center">
            <section className = "bg-gradient-to-t from-gray-800 to-gray-500 rounded-lg shadow-2xl lg:flex lg:items-center p-20 justify-center container mx-auto">
                <img src = {photo} className = "w-32 h-32 lg:w-64 lg:h-64 mr-8 inline-block" alt = "Sean Monaghan Photo"/>
                <div  className = "text-lg flex flex-col justify-center">
                    <h1 className = "cursive text-4xl lg:text-5xl xl:text-6xl text-blue-400 mb-4 ">Hello! I'm {" "}
                    <span className = "text-white justify-center flex  homepage text-5xl lg:text-7xl">Sean Monaghan</span>
                    </h1>
                    <div className = "prose lg:prose-xl text-white whitespace-pre-line">
                   {`
Currently I am earning a Certificate in Fullstack Web Development through the University of Connecticut.  I have a passion for learning and implementing new technologies into my projects.

I am open to fulltime employment or freelance opportunities, and would love for you to check out my portfolio and get in touch if you are interested!

I'm also eager for any opportunity to engage in collaborative development so please reach out if you are interested in that as well.  
                    `}
                    </div>
                </div>
            </section>
            
        </main>
        
    )
}