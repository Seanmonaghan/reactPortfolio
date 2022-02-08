import React from "react";
import lyrichord from "../images/lyrichord.PNG"
import gambit from "../images/gambit.PNG"
import playerbank from "../images/playerbank.PNG"
import workout from "../images/workout.PNG"


export default function Project () {

    return (
        <main className = "bg-gradient-to-b from-blue-800 to-blue-500 relative flex-auto justify-center min-h-screen pt-12 pb-12 lg:pt-20 lg:pb-20 px-8">
            <section className = "container mx-auto">
                <h1 className = "text-6xl lg:text-7xl flex justify-center mb-12 text-white homepage">Portfolio</h1>
                <section className = "grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2">

                    {/* LyriChord Project */}
                    <article className = "transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105">
                        <h3 className = "text-white text-3xl font-bold mb-2 hover:text-blue-700">
                            <a href="https://github.com/Seanmonaghan/LyriChord" alt = "LyriChord" target = "_blank" rel="noopener noreferrer">LyriChord</a>
                        </h3>
                        <div className = "text-gray-200 text-xs">
                            <p><span>
                                <strong className = "font-bold">Location</strong>:{" "}
                                Stamford, CT
                            </span>
                            </p>
                            <p><span>
                                <strong className = "font-bold">Type</strong>:{"  "}
                                Academic
                            </span>
                            </p>
                            <img src={lyrichord} className = "p-4" alt="LyriChord" />
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                                This app is designed for someone looking for a convenient place to find both the lyrics and chords to a song. 
                                The app will generate lyrics on one side of the screen, and on the other provide the user with a link to the 
                                musical chords as well as suggest a variety of other chords by the same artist.
                            </p>
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                                The app was developed with HTML5, CSS3, Bootstrap and jQuery.  It also features Spotify integration so that the user can easily click on a link to open the song they
                                were searching for on Spotify.
                            </p>
                            <a href= "https://github.com/Seanmonaghan/LyriChord"
                            alt = "LyriChord" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-blue-500 font-bold text-base hover:underline hover:text-blue-400"
                            > Github Repository{" "}<br></br>
                            </a>
                            <a href= "https://seanmonaghan.github.io/LyriChord/"
                            alt = "LyriChord Deployed" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-blue-500 font-bold text-base hover:underline hover:text-blue-400"
                            > Deployed Project{" "}
                            </a>
                        </div>
                    </article>

                    {/* Player Bank */}
                    <article className = "transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105">
                        <h3 className = "text-white text-3xl font-bold mb-2 hover:text-blue-700">
                            <a href="https://github.com/Seanmonaghan/Character_Generator" alt = "Player Bank" target = "_blank" rel="noopener noreferrer">Player Bank</a>
                        </h3>
                        <div className = "text-gray-200 text-xs">
                        <p>
                            <span>
                            <strong className = "font-bold">Location</strong>:{" "}
                                Stamford, CT
                            </span>
                        </p>
                        <p>
                            <span>
                                <strong className = "font-bold">Type</strong>:{"  "}
                                Academic
                            </span>
                        </p>
                        <img src={playerbank} className = "p-4" alt="Character Generator" />
                        <p className="my-6 text-lg text-gray-200 leading-relaxed">
                            This application is designed to help game developers store game concepts and add either custom or randomly generated characters 
                            into them to help populate the game world. Players can keep track of their own games and characters this way,
                             while also viewing the works of other developers to get inspiration.
                        </p>
                        <p className="my-6 text-lg text-gray-200 leading-relaxed">
                            The application is built using Javascript, HTML5, CSS, Express.js, Handlebars and the database created using Sequelize and MySQL.
                            DotENV was used to secure information on the github repository. The new technology that we used in this application was Charts.js
                            to render the character attribute information in a way that the viewer can more easily process.
                        </p>
                        <a 
                            href= "https://github.com/Seanmonaghan/Character_Generator"
                            alt = "Player Bank Github" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-blue-500 font-bold hover:underline text-base hover:text-blue-400"
                            > Github Repository{" "}{<br />}
                        </a>
                        <a 
                            href= "https://agile-peak-22805.herokuapp.com/"
                            alt = "Player Bank Deployed" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-blue-500 font-bold hover:underline text-base hover:text-blue-400"
                            > Deployed Project{" "}
                        </a>
                        </div>
                    </article>

                    {/* Trek Gambit */}
                    <article className = "transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105">
                        <h3 className = "text-white text-3xl font-bold mb-2 hover:text-blue-700">
                            <a href="https://github.com/Seanmonaghan/React_Employee_Directory" alt = "Employee Directory" target = "_blank" rel="noopener noreferrer">Trek Gambit</a>
                        </h3>
                        <div className = "text-gray-200 text-xs">
                        <p><span>
                                <strong className = "font-bold">Location</strong>:{" "}
                                Dallas, TX
                            </span>
                            </p>
                            <p><span>
                                <strong className = "font-bold">Type</strong>:{"  "}
                                Academic
                            </span>
                            </p>
                            <img src={gambit} className = "p-4" alt="Trek Gambit Image" />
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                            This is a social media application that utilizes the National Park Services API.  Users can log create an
                            account where they can share their experiences at various national parks or view the experiences of others
                            to help them plan their own trip.  
                            
                            </p>
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                            This is a MERN stack application that utilizes React components to dynamically render national park information
                            based on the user's search terminology.  The front end was styled and made responsive utilizing Material UI 
                            and custom CSS.  
                            </p>
                            <a href= "https://github.com/Seanmonaghan/Trek-Gambit"
                            alt = "Trek Gambit" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-blue-500 font-bold hover:underline text-base text-hover:text-blue-400"
                            > Github Repository{" "}{<br />}
                            </a>
                            <a href= "https://quiet-harbor-96544.herokuapp.com/"
                            alt = "Trek Gambit Deployed" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-blue-500 font-bold hover:underline text-base hover:text-blue-400"
                            > Deployed Project{" "}
                            </a>
                        </div>
                    </article>

                    {/* Fitness Tracker */}
                    <article className = "transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105">
                        <h3 className = "text-white text-3xl font-bold mb-2 hover:text-blue-700">
                            <a href="https://github.com/Seanmonaghan/WorkoutTracker" alt = "Fitness Tracker" target = "_blank" rel="noopener noreferrer">Fitness Tracker</a>
                        </h3>
                        <div className = "text-gray-200 text-xs">
                        <p><span>
                                <strong className = "font-bold">Location</strong>:{" "}
                                Stamford, CT
                            </span>
                            </p>
                            <p><span>
                                <strong className = "font-bold">Type</strong>:{"  "}
                                Academic
                            </span>
                            </p>
                            <img src={workout} className = "p-4" alt="Workout Tracker" />
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                            This app is designed for a user that is interested in keeping track of their exercises so they can monitor progress 
                            and continue to improve. The app was developed using HTML, CSS, Javascript, Express.js, and MongoDB. 
                            It is hosted using Heroku and AtlasDB.
                            </p>
                            <p className="my-6 text-lg text-gray-200 leading-relaxed">
                            Chart.js is used to provide the user a stylish and efficient way of viewing their progress both in terms of the duration 
                            of their workouts and the amount of weight they lifted during them. The dashboard will show the user the last 7 exercises 
                            they have performed so they can continue to monitor their progress.
                            </p>
                            <a href= "https://github.com/Seanmonaghan/WorkoutTracker"
                            alt = "Fitness Tracker" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-blue-500 font-bold hover:underline text-base hover:text-blue-400"
                            > Github Repository{" "}{<br />}
                            </a>
                            <a href= "https://gentle-meadow-37672.herokuapp.com/"
                            alt = "Workout Tracker Deployed" 
                            target = "_blank" 
                            rel="noopener noreferrer"
                            className = "text-blue-500 font-bold hover:underline text-base hover:text-blue-400"
                            > Deployed Project{" "}
                            </a>
                        </div>
                    </article>
                </section>
            </section>
        </main>
    );
};
