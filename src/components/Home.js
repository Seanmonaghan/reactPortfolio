import React from "react"
import photo from "../images/photo.png";

export default function Home () {
    return (
        <main className = "bg-gradient-to-b from-red-700 to-red-400 relative flex-auto justify-center min-h-screen pt-12 pb-12 lg:pt-20 lg:pb-20 px-8 text-center">
            <section className = "bg-gradient-to-t from-gray-800 to-gray-500 rounded-lg shadow-2xl lg:flex lg:items-center p-20 justify-center container mx-auto">
                <img src = {photo} className = "w-32 h-32 lg:w-64 lg:h-64 mr-8 inline-block" alt = "Sean Monaghan Photo"/>
                <div  className = "text-lg flex flex-col justify-center">
                    <h1 className = "cursive text-4xl lg:text-5xl xl:text-6xl text-red-400 mb-4 ">Hello! I'm {" "}
                    <span className = "text-red-500 justify-center flex text-center">Sean Monaghan</span>
                    </h1>
                    <div className = "prose lg:prose-xl text-white whitespace-pre-line">
                   {`
I'm Sean, a Full Stack Web Developer with a passion for learning new technologies.

I'm currently earning a Certificate in Fullstack Web Development through the University of Connecticut focusing on the following skills: HTML5, CSS, JavaScript, jQuery, Bootstrap, Bulma, Express.js, React.js, Node.js, MongoDB, MySQL, Mongoose, agile methodology, database theory, and progressive web applications.\n
Always excited to start new endeavors so feel free to reach out to collaborate!
                    `}
                    </div>
                </div>
            </section>
            
        </main>
        
    )
}