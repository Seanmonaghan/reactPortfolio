import React from "react";


export default function Project () {

    return (
        <main className = "bg-gradient-to-b from-red-700 to-red-400 min-h-screen p-12">
            <section className = "container mx-auto">
                <h1 className = "text-6xl font-bold flex justify-center cursive">MyProjects</h1><br />
                <h2 className = "text-lg text-gray-900 font-bold flex justify-center mb-12">Welcome to my Project Page</h2>
                <section className = "grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2">

                    {/* LyriChord Project */}
                    <article className = "transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105">
                        <h3 className = "text-white text-3xl font-bold mb-2 hover:text-red-700">
                            <a href="https://github.com/Seanmonaghan/LyriChord" alt = "LyriChord" target = "_blank" rel="noopener noreferrer">LyriChord</a>
                        </h3>
                        <div className = "text-gray-200 text-xs space-x-4">
                            <span>
                                <strong className = "font-bold">Location</strong>:{" "}
                                Stamford, CT
                            </span>
                            <span>
                                <strong className = "font-bold">Type</strong>:{"  "}
                                School
                            </span>
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                                This app is designed for someone looking for a convenient place to find both the lyrics and chords to a song. The app will generate lyrics on one side of the screen, and on the other provide the user with a link to the musical chords as well as suggest a variety of other chords by the same artist. The app also features Spotify integration so that the user can easily click on a link to open the song they were searching for on Spotify.
                            </p>
                            <a href= "https://github.com/Seanmonaghan/LyriChord"
                            alt = "LyriChord" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-red-500 font-bold text-base hover:underline hover:text-red-400"
                            > View This Project on Github{" "}
                            </a>
                            <a href= "https://seanmonaghan.github.io/LyriChord/"
                            alt = "LyriChord Deployed" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-red-500 font-bold text-base hover:underline hover:text-red-400"
                            > View This Project Deployed{" "}
                            </a>
                        </div>
                    </article>
                    {/* Player Bank */}
                    <article className = "transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105">
                        <h3 className = "text-white text-3xl font-bold mb-2 hover:text-red-700">
                            <a href="https://github.com/Seanmonaghan/LyriChord" alt = "Player Bank" target = "_blank" rel="noopener noreferrer">Player Bank</a>
                        </h3>
                        <div className = "text-gray-200 text-xs space-x-4">
                            <span>
                                <strong className = "font-bold">Location</strong>:{" "}
                                Stamford, CT
                            </span>
                            <span>
                                <strong className = "font-bold">Type</strong>:{"  "}
                                School
                            </span>
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                            This application is designed to help game developers store game concepts and add either custom or randomly generated characters into them to help populate the game world. Players can keep track of their own games and characters this way, while also viewing the works of other developers to get inspiration. The application is built using Javascript, HTML5, CSS, Express.js, Handlebars and the database created using Sequelize and MySQL. DotENV was used to secure information on the github repository. The new technology that we used in this application was Charts.js to render the character attribute information in a way that the viewer can more easily process.
                            </p>
                            <a href= "https://github.com/Seanmonaghan/Character_Generator"
                            alt = "Player Bank Github" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-red-500 font-bold hover:underline text-base hover:text-red-400"
                            > View This Project on Github{" "}
                            </a>
                            <a href= "https://agile-peak-22805.herokuapp.com/"
                            alt = "Player Bank Deployed" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-red-500 font-bold hover:underline text-base hover:text-red-400"
                            > View This Project Deployed{" "}
                            </a>
                        </div>
                    </article>
                    {/* React Employee Directory */}
                    <article className = "transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105">
                        <h3 className = "text-white text-3xl font-bold mb-2 hover:text-red-700">
                            <a href="https://github.com/Seanmonaghan/LyriChord" alt = "LyriChord" target = "_blank" rel="noopener noreferrer">React Employee Directory</a>
                        </h3>
                        <div className = "text-gray-200 text-xs space-x-4">
                            <span>
                                <strong className = "font-bold">Location</strong>:{" "}
                                Stamford, CT
                            </span>
                            <span>
                                <strong className = "font-bold">Type</strong>:{"  "}
                                School
                            </span>
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                            This is an employee directory application created using React and hosted on Github pages. The application was created using the React.js framework and the user information was imported via a axios API call to the Random User API. The information is tabled using the React-Table package via Node.js which allows the user to access pagination, sort through the user data or filter by columns.
                            </p>
                            <a href= "https://github.com/Seanmonaghan/React_Employee_Directory"
                            alt = "Employee Directory Github" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-red-500 font-bold hover:underline text-base text-hover:text-red-400"
                            > View This Project on Github{" "}
                            </a>
                            <a href= "https://seanmonaghan.github.io/React_Employee_Directory"
                            alt = "Employee Directory Deployed" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-red-500 font-bold hover:underline text-base hover:text-red-400"
                            > View This Project Deployed{" "}
                            </a>
                        </div>
                    </article>

                    <article className = "transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105">
                        <h3 className = "text-white text-3xl font-bold mb-2 hover:text-red-700">
                            <a href="https://github.com/Seanmonaghan/LyriChord" alt = "LyriChord" target = "_blank" rel="noopener noreferrer">LyriChord</a>
                        </h3>
                        <div className = "text-gray-200 text-xs space-x-4">
                            <span>
                                <strong className = "font-bold">Location</strong>:{" "}
                                Stamford, CT
                            </span>
                            <span>
                                <strong className = "font-bold">Type</strong>:{"  "}
                                School
                            </span>
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                                This app is designed for someone looking for a convenient place to find both the lyrics and chords to a song. The app will generate lyrics on one side of the screen, and on the other provide the user with a link to the musical chords as well as suggest a variety of other chords by the same artist. The app also features Spotify integration so that the user can easily click on a link to open the song they were searching for on Spotify.
                            </p>
                            <a href= "https://github.com/Seanmonaghan/LyriChord"
                            alt = "LyriChord" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-red-500 font-bold hover:underline text-base hover:text-red-400"
                            > View This Project on Github{" "}
                            </a>
                            <a href= "https://github.com/Seanmonaghan/LyriChord"
                            alt = "LyriChord Deployed" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-red-500 font-bold hover:underline text-base hover:text-red-400"
                            > View This Project Deployed{" "}
                            </a>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    )
}