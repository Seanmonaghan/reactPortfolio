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
                                <div className = "flex p-2 flex-col">
                                    <i className="fab fa-js-square text-6xl"></i> Javascript
                                </div>  
                                <div className = "flex p-2 flex-col">
                                    <i className="fas fa-wind text-6xl"></i> Tailwind CSS
                                </div>  
                            </div>
                            
                            {/* Third */}
                            <div>
                             <div className = "flex p-2 flex-col">
                                <i className="fab fa-css3-alt text-6xl"></i> CSS3
                            </div>
                            <div className = "flex p-2 flex-col">
                                    <i class="fab fa-react text-6xl"></i> React.js
                                </div> 
 
                             <div className = "flex p-2 flex-col">
                                <i className="fab fa-html5 text-6xl"></i> HTMl5
                            </div>  
                            </div>
                            
                            {/* Fourth */}
                            <div>
                                <div className = "flex p-2 flex-col">
                                    <i class="fas fa-universal-access text-6xl"></i> UX / UI
                                </div>
                                <div className = "flex p-2 flex-col">
                                <i class="fab fa-bootstrap text-6xl"></i> Bootstrap
                            </div> 
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
                                    <div className = "flex p-2 flex-col">
                                        <i class="fas fa-database text-6xl"></i> MySQL
                                    </div> 
                                    <div className = "flex p-2 flex-col">
                                        <i class="fas fa-table text-6xl"></i> Sequelize
                                    </div> 
                                </div>

                                {/* Third */}
                                <div>
                                    <div className = "flex p-2 flex-col">
                                        <i class="fas fa-code-branch text-6xl"></i> Git
                                    </div>
                                    <div className = "flex p-2 flex-col">
                                        <i className="fab fa-node text-6xl"></i> Node.js
                                    </div>  
                                    <div className = "flex p-2 flex-col">
                                        <i class="fab fa-python text-6xl"></i> Python
                                    </div>
                                </div>

                                {/* Fourth */}
                                <div>
                                    <div className = "flex p-2 flex-col">
                                        <i class="fas fa-database text-6xl"></i> MongoDB
                                    </div>
                                    <div className = "flex p-2 flex-col">
                                        <i class="fas fa-otter text-6xl"></i> Mongoose
                                    </div> 
                                </div>
                                <div>

                                </div>
                        </section>
                    </div>
                </div>
            
            
            
            
            </section>
            
        </main>
        
    )
}