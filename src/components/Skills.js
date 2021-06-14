import React from "react";


export default function Home () {
    return (
        <main className = "bg-gradient-to-b from-blue-800 to-blue-500 relative flex-auto justify-center min-h-screen pt-12 pb-12 lg:pt-20 lg:pb-20 px-8 text-center">
            <h1 className = "text-6xl lg:text-7xl flex  justify-center mb-12 text-white homepage">Technical Skills</h1>
            <section className = "bg-gradient-to-t from-gray-800 to-gray-500 rounded-lg shadow-2xl flex flex-col lg:items-center p-20 justify-center container mx-auto">
                <div className = "grid grid-flow-row xl:grid-flow-col grid-cols-1 gap-20">
                    
                    {/* Front End */}
                    
                    <div>
                        <h2 className = "text-3xl font-bold text-white mb-8">Front End</h2>
                        <section className = "border bg-gray-400 p10 grid grid-cols-1 md:grid-cols-5 rounded-full w-full flex items-center justify-center font-bold">
                            
                            {/* First */}
                            <div>
                    
                            </div>
                            
                            {/* Second */}
                            <div>
                                <a className = "flex p-2 flex-col hover:text-gray-200" href = "https://www.javascript.com/" target = "_blank" >
                                    <i className="fab fa-js-square text-6xl"></i> Javascript
                                </a>
                                <a className = "flex p-2 flex-col hover:text-gray-200" href = "https://tailwindcss.com/" target = "_blank" >
                                    <i className="fas fa-wind text-6xl"></i> Tailwind CSS
                                </a>  
                            </div>
                            
                            {/* Third */}
                            <div>
                                <a className = "flex p-2 flex-col hover:text-gray-200" href = "https://www.w3.org/TR/CSS/#css" target = "_blank">
                                    <i className="fab fa-css3-alt text-6xl"></i> CSS3
                                </a>
                                <a className = "flex p-2 flex-col hover:text-gray-200" href = "https://reactjs.org/" target = "_blank">
                                    <i class="fab fa-react text-6xl"></i> React.js
                                </a> 
                                <a className = "flex p-2 flex-col hover:text-gray-200" href = "https://www.w3.org/TR/html52/" target = "_blank">
                                    <i className="fab fa-html5 text-6xl"></i> HTML5
                                </a>  
                            </div>
                            
                            {/* Fourth */}
                            <div>
                                <div className = "flex p-2 flex-col hover:text-gray-200">
                                    <i class="fas fa-universal-access text-6xl"></i> UX / UI
                                </div>
                                <a className = "flex p-2 flex-col" href = "https://getbootstrap.com/" target = "_blank">
                                    <i class="fab fa-bootstrap text-6xl hover:text-gray-200"></i> Bootstrap
                                </a> 
                            </div>    
                            
                            {/* Fifth */}
                            <div>

                            </div> 
                        </section>
                    </div>
                    

                    {/* Back End */}

                    <div>
                        <h2 className = "text-3xl font-bold text-white mb-8">Back End</h2>
                        <section className = "border bg-gray-400 p10 grid grid-cols-1 md:grid-cols-5 rounded-full w-full flex items-center justify-center font-bold">
                                
                                {/* First */}
                                <div>

                                </div>
                                {/* Second */}
                                <div>
                                    <a className = "flex p-2 flex-col" href = "https://www.mysql.com/" target = "_blank">
                                        <i class="fas fa-database text-6xl hover:text-gray-200"></i> MySQL
                                    </a> 
                                    <a className = "flex p-2 flex-col" href = "http://sequelize.org/" target = "_blank">
                                        <i class="fas fa-table text-6xl hover:text-gray-200"></i> Sequelize
                                    </a> 
                                </div>

                                {/* Third */}
                                <div>
                                    <a className = "flex p-2 flex-col" href = "https://git-scm.com/" target = "_blank">
                                        <i class="fas fa-code-branch text-6xl hover:text-gray-200"></i> Git
                                    </a>
                                    <a className = "flex p-2 flex-col" href = "https://nodejs.org/en/" target = "_blank">
                                        <i className="fab fa-node text-6xl hover:text-gray-200"></i> Node.js
                                    </a>  
                                    <a className = "flex p-2 flex-col"  href = "https://www.python.org/" target = "_blank">
                                        <i class="fab fa-python text-6xl hover:text-gray-200"></i> Python
                                    </a>
                                </div>

                                {/* Fourth */}
                                <div>
                                    <a className = "flex p-2 flex-col" href = "https://www.mongodb.com/" target = "_blank">
                                        <i class="fas fa-database text-6xl hover:text-gray-200"></i> MongoDB
                                    </a>
                                    <a className = "flex p-2 flex-col" href = "https://mongoosejs.com/" target = "_blank">
                                        <i class="fas fa-otter text-6xl hover:text-gray-200"></i> Mongoose
                                    </a> 
                                </div>
                                <div>

                                </div>
                        </section>
                    </div>
                </div>
            
            
            
            
            </section>
            
        </main>
        
    );
};