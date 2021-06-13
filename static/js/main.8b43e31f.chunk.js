(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{130:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),o=r(42),s=r.n(o),l=(r(50),r(12)),c=r(3),i=r(0);function h(){return Object(i.jsx)("main",{className:"w-auto",children:Object(i.jsx)("section",{className:"bg-gradient-to-b from-red-700 to-red-400 relative flex-auto justify-center min-h-screen pt-12 lg:pt-64 px-8 text-center",children:Object(i.jsxs)("h1",{className:"text-6xl lg:text-9xl homepage text-gray-900 fond-bold leading-tight lg:leading-tight",children:["Sean Monaghan",Object(i.jsx)("br",{}),"Fullstack Developer"]})})})}var d=r(16),x=r(43),b=r.n(x)()({projectId:"sm3yoykj",dataset:"production"}),j=(r.p,r(24)),g=r.n(j),m=r(44),p=r.n(m),f=g()(b);function u(){var e,t=Object(a.useState)(null),r=Object(d.a)(t,2),n=r[0],o=r[1];return Object(a.useEffect)((function(){b.fetch('*[_type == "author"]{\n            name,\n            bio,\n            "authorImage": image.asset-> url\n        }').then((function(e){return o(e[0])})).catch(console.error)}),[]),n?Object(i.jsx)("main",{className:"relative bg-gradient-to-b from-red-700 to-red-400",children:Object(i.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(i.jsxs)("section",{className:"bg-gradient-to-t from-gray-800 to-gray-500 rounded-lg shadow-2xl lg:flex p-20",children:[Object(i.jsx)("img",{src:(e=n.authorImage,f.image(e)).url(),className:"rounded w-32 h-32 lg:w-64 lg:h-64 mr-8",alt:n.name}),Object(i.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(i.jsxs)("h1",{className:"cursive text-6xl text-red-400 mb-4",children:["Hello! I'm "," ",Object(i.jsx)("span",{className:"text-red-500",children:n.name})]}),Object(i.jsx)("div",{className:"prose lg:prose-xl text-white",children:Object(i.jsx)(p.a,{blocks:n.bio,projectId:"sm3yoykj",dataset:"production"})})]})]})})}):Object(i.jsx)("div",{children:"Loading..."})}function y(){return Object(i.jsx)("main",{className:"bg-gradient-to-b from-red-700 to-red-400 min-h-screen p-12",children:Object(i.jsxs)("section",{className:"container mx-auto",children:[Object(i.jsx)("h1",{className:"text-6xl font-bold flex justify-center cursive",children:"MyProjects"}),Object(i.jsx)("br",{}),Object(i.jsx)("h2",{className:"text-lg text-gray-900 font-bold flex justify-center mb-12",children:"Welcome to my Project Page"}),Object(i.jsxs)("section",{className:"grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2",children:[Object(i.jsxs)("article",{className:"transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105",children:[Object(i.jsx)("h3",{className:"text-white text-3xl font-bold mb-2 hover:text-red-700",children:Object(i.jsx)("a",{href:"https://github.com/Seanmonaghan/LyriChord",alt:"LyriChord",target:"_blank",rel:"noopener noreferrer",children:"LyriChord"})}),Object(i.jsxs)("div",{className:"text-gray-200 text-xs space-x-4",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{className:"font-bold",children:"Location"}),":"," ","Stamford, CT"]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{className:"font-bold",children:"Type"}),":","  ","School"]}),Object(i.jsx)("p",{className:"my-6 text-lg text-gray-200 leading-relaxed",children:"This app is designed for someone looking for a convenient place to find both the lyrics and chords to a song. The app will generate lyrics on one side of the screen, and on the other provide the user with a link to the musical chords as well as suggest a variety of other chords by the same artist. The app also features Spotify integration so that the user can easily click on a link to open the song they were searching for on Spotify."}),Object(i.jsxs)("a",{href:"https://github.com/Seanmonaghan/LyriChord",alt:"LyriChord",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 font-bold text-base hover:underline hover:text-red-400",children:[" View This Project on Github"," "]}),Object(i.jsxs)("a",{href:"https://seanmonaghan.github.io/LyriChord/",alt:"LyriChord Deployed",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 font-bold text-base hover:underline hover:text-red-400",children:[" View This Project Deployed"," "]})]})]}),Object(i.jsxs)("article",{className:"transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105",children:[Object(i.jsx)("h3",{className:"text-white text-3xl font-bold mb-2 hover:text-red-700",children:Object(i.jsx)("a",{href:"https://github.com/Seanmonaghan/LyriChord",alt:"Player Bank",target:"_blank",rel:"noopener noreferrer",children:"Player Bank"})}),Object(i.jsxs)("div",{className:"text-gray-200 text-xs space-x-4",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{className:"font-bold",children:"Location"}),":"," ","Stamford, CT"]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{className:"font-bold",children:"Type"}),":","  ","School"]}),Object(i.jsx)("p",{className:"my-6 text-lg text-gray-200 leading-relaxed",children:"This application is designed to help game developers store game concepts and add either custom or randomly generated characters into them to help populate the game world. Players can keep track of their own games and characters this way, while also viewing the works of other developers to get inspiration. The application is built using Javascript, HTML5, CSS, Express.js, Handlebars and the database created using Sequelize and MySQL. DotENV was used to secure information on the github repository. The new technology that we used in this application was Charts.js to render the character attribute information in a way that the viewer can more easily process."}),Object(i.jsxs)("a",{href:"https://github.com/Seanmonaghan/Character_Generator",alt:"Player Bank Github",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 font-bold hover:underline text-base hover:text-red-400",children:[" View This Project on Github"," "]}),Object(i.jsxs)("a",{href:"https://agile-peak-22805.herokuapp.com/",alt:"Player Bank Deployed",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 font-bold hover:underline text-base hover:text-red-400",children:[" View This Project Deployed"," "]})]})]}),Object(i.jsxs)("article",{className:"transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105",children:[Object(i.jsx)("h3",{className:"text-white text-3xl font-bold mb-2 hover:text-red-700",children:Object(i.jsx)("a",{href:"https://github.com/Seanmonaghan/LyriChord",alt:"LyriChord",target:"_blank",rel:"noopener noreferrer",children:"React Employee Directory"})}),Object(i.jsxs)("div",{className:"text-gray-200 text-xs space-x-4",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{className:"font-bold",children:"Location"}),":"," ","Stamford, CT"]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{className:"font-bold",children:"Type"}),":","  ","School"]}),Object(i.jsx)("p",{className:"my-6 text-lg text-gray-200 leading-relaxed",children:"This is an employee directory application created using React and hosted on Github pages. The application was created using the React.js framework and the user information was imported via a axios API call to the Random User API. The information is tabled using the React-Table package via Node.js which allows the user to access pagination, sort through the user data or filter by columns."}),Object(i.jsxs)("a",{href:"https://github.com/Seanmonaghan/React_Employee_Directory",alt:"Employee Directory Github",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 font-bold hover:underline text-base text-hover:text-red-400",children:[" View This Project on Github"," "]}),Object(i.jsxs)("a",{href:"https://seanmonaghan.github.io/React_Employee_Directory",alt:"Employee Directory Deployed",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 font-bold hover:underline text-base hover:text-red-400",children:[" View This Project Deployed"," "]})]})]}),Object(i.jsxs)("article",{className:"transition duration-500 ease-in-out hover:bg-gray-200 transform relative rounded-lg shadow-xl bg-gradient-to-t from-gray-800 to-gray-500 p-16 hover:-translate-y-1 hover:scale-105",children:[Object(i.jsx)("h3",{className:"text-white text-3xl font-bold mb-2 hover:text-red-700",children:Object(i.jsx)("a",{href:"https://github.com/Seanmonaghan/LyriChord",alt:"LyriChord",target:"_blank",rel:"noopener noreferrer",children:"LyriChord"})}),Object(i.jsxs)("div",{className:"text-gray-200 text-xs space-x-4",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{className:"font-bold",children:"Location"}),":"," ","Stamford, CT"]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{className:"font-bold",children:"Type"}),":","  ","School"]}),Object(i.jsx)("p",{className:"my-6 text-lg text-gray-200 leading-relaxed",children:"This app is designed for someone looking for a convenient place to find both the lyrics and chords to a song. The app will generate lyrics on one side of the screen, and on the other provide the user with a link to the musical chords as well as suggest a variety of other chords by the same artist. The app also features Spotify integration so that the user can easily click on a link to open the song they were searching for on Spotify."}),Object(i.jsxs)("a",{href:"https://github.com/Seanmonaghan/LyriChord",alt:"LyriChord",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 font-bold hover:underline text-base hover:text-red-400",children:[" View This Project on Github"," "]}),Object(i.jsxs)("a",{href:"https://github.com/Seanmonaghan/LyriChord",alt:"LyriChord Deployed",target:"_blank",rel:"noopener noreferrer",className:"text-red-500 font-bold hover:underline text-base hover:text-red-400",children:[" View This Project Deployed"," "]})]})]})]})]})})}var O=r(17);function v(e){e.fixed;var t=n.a.useState(!1),r=Object(d.a)(t,2),a=r[0],o=r[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"lg:sticky top-0 z-50 relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-800",children:Object(i.jsxs)("div",{className:"container px-4 mx-auto flex flex-wrap items-center justify-between",children:[Object(i.jsxs)("div",{className:"w-full relative flex flex-col justify-between lg:w-auto lg:static lg:block lg:justify-start",children:[Object(i.jsx)(l.b,{to:"/",className:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white",activeClassName:"text-white",children:"Sean Monaghan"}),Object(i.jsx)(l.b,{to:"/project",className:"inline-flex items-center py-3 px-3 my-4 rounded text-red-200 hover:text-gray-800",activeClassName:"text-red-100 bg-red-700",children:"Projects"}),Object(i.jsx)(l.b,{to:"/about",className:"inline-flex items-center py-3 px-3 my-4 rounded text-red-200 hover:text-gray-800",activeClassName:"text-red-100 bg-red-700",children:"Contact"}),Object(i.jsx)("button",{className:"text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return o(!a)},children:Object(i.jsx)("i",{className:"fas fa-bars"})})]}),Object(i.jsxs)("div",{className:"lg:flex flex-end items-center inline-flex py-2 px-2 my-3"+(a?" flex":" hidden"),id:"example-navbar-danger",children:["       ",Object(i.jsx)(O.SocialIcon,{url:"https://www.linkedin.com/in/sean-monaghan-8318666b/",className:"mr-4 pb-2",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(i.jsx)(O.SocialIcon,{url:"https://github.com/Seanmonaghan",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(i.jsx)(O.SocialIcon,{url:"https://twitter.com/SeanMon83059815",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})})}function w(){return Object(i.jsx)("section",{className:"bg-black relative flex justify-center pt-12 px-8 py-8 text-center",children:Object(i.jsx)("h3",{className:"text-2xl text-gray-100 fond-bold leading-none lg:leading-tight",children:"Created By Sean Monaghan"})})}var N=function(){return Object(i.jsxs)(l.a,{children:[Object(i.jsx)(v,{}),Object(i.jsxs)(c.c,{children:[Object(i.jsx)(c.a,{component:h,path:"/",exact:!0}),Object(i.jsx)(c.a,{component:u,path:"/about"}),Object(i.jsx)(c.a,{component:y,path:"/project"})]}),Object(i.jsx)(w,{})]})};s.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))},50:function(e,t,r){}},[[130,1,2]]]);
//# sourceMappingURL=main.8b43e31f.chunk.js.map