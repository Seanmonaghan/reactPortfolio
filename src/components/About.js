import React from "react";
import resume from "../images/resume.pdf"


export default function About () {

    return (
        <main className = "bg-gradient-to-b from-blue-800 to-blue-500 relative flex-auto justify-center min-h-screen pt-12 pb-12 lg:pt-20 lg:pb-20 px-8 text-center">
        <section className = "bg-gradient-to-t from-gray-800 to-gray-500 rounded-lg shadow-2xl lg:flex lg:flex-col lg:items-center p-10 md:p-20 justify-center container mx-auto">

        <h1 className = "text-6xl lg:text-7xl flex justify-center mb-12 text-white homepage">Contact Me!</h1>

            <ul className ="grid gird-cols-1 px-5 w-full">
                {/* Github Link */}
                <li>
                <button class="text-2xl lg:text-4xl w-full bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded my-2">
                <a
                    href="https://github.com/Seanmonaghan" 
                    target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square"></i> Github <i className="fab fa-github-square"></i>
                </a>
                </button>
                </li>

                {/* Linkedin Link */}
                <li>
                <button class="text-2xl lg:text-4xl w-full bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded my-2">
                <a
                    href="https://www.linkedin.com/in/sean-monaghan-8318666b/" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    <i className="fab fa-linkedin"></i> LinkedIn <i className="fab fa-linkedin"></i> 
                </a>
                </button>
                </li>

                {/* Twitter Link */}
                <li>
                <button class="text-2xl lg:text-4xl w-full bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 border-b-4 border-blue-500 hover:border-blue-400 rounded my-2">
                <a
                    href="https://twitter.com/SeanMon83059815" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fab fa-twitter-square"> </i> Twitter <i className="fab fa-twitter-square"></i>
                </a>
                </button>
                </li>

                {/* Resume Link*/}
                <li>
                <button class="text-2xl lg:text-4xl w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-2">
                <a 
                    href= {resume} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fas fa-file"></i> Resume <i className="fas fa-file"></i>
                </a>
                </button>
                </li>

                {/* Facebook Link */}
                <li>
                <button class="text-2xl lg:text-4xl w-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-2">
                <a
                    href="https://www.facebook.com/seanmonaghann/" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    <i className="fab fa-facebook-square"></i> Facebook <i className="fab fa-facebook-square"></i> 
                </a>
                </button>
                </li>

                {/* Email Link */}
                <li>
                <button class="text-2xl lg:text-4xl w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded my-2">
                <a
                    href="mailto:seanryanmonaghan@yahoo.com" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    <i className="fas fa-envelope-square"></i> Email <i className="fas fa-envelope-square"></i> 
                </a>
                </button>
                </li>





                {/*


                <li className="list-group-item list-group-item-action list-group-item-secondary"><a href="./Resume 5_16_2021.pdf">
                    <i className="fas fa-file"></i> Resume <i className="fas fa-file"></i> </a></li>
                <li className="list-group-item list-group-item-action list-group-item-success"><a
                    href="https://www.linkedin.com/in/sean-monaghan-8318666b/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i> LinkedIn <i
                    className="fab fa-linkedin"></i> </a></li>
                <li className="list-group-item list-group-item-action list-group-item-info"><a
                    href="https://twitter.com/SeanMon83059815" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter-square"></i> Twitter <i
                    className="fab fa-twitter-square"></i> </a></li>
                <li className="list-group-item list-group-item-action list-group-item-primary"><a
                    href="https://www.facebook.com/seanmonaghann/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square"></i> Facebook <i
                    className="fab fa-facebook-square"></i> </a></li>
                <li className="list-group-item list-group-item-action list-group-item-danger"><a
                    href="mailto:seanryanmonaghan@yahoo.com" target="_blank" rel="noopener noreferrer"> <i className="fas fa-envelope-square"></i> Email <i
                className="fas fa-envelope-square"></i> </a></li> */}

        </ul>
            </section>

    </main>)
}