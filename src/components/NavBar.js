import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="lg:sticky top-0 z-50 relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex flex-col justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
                to = "/"
                className="homepage hover:text-black leading-relaxed inline-block mr-4 py-2 text-2xl lg:text-4xl whitespace-nowrap uppercase text-white"
                activeClassName = "text-white"
            >
              Sean Monaghan
            </NavLink>
            <NavLink 
              to = "/project"
              className = "inline-flex items-center py-1 px-3 my-1 rounded text-blue-200 hover:text-gray-100"
              activeClassName = "text-blue-100 bg-blue-700"
            >
            Projects
            </NavLink>
            <NavLink 
              to = "/skills"
              className = "inline-flex items-center py-1 px-3 my-1 rounded text-blue-200 hover:text-gray-100"
              activeClassName = "text-blue-100 bg-blue-700"
            >
            Skills
            </NavLink>
            <NavLink 
              to = "/about"
              className = "inline-flex items-center py-1 px-3 my-1 rounded text-blue-200 hover:text-gray-100"
              activeClassName = "text-blue-100 bg-blue-700"
            >
            Contact
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex flex-auto justify-evenly items-center py-2 px-2 my-3" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >       <SocialIcon url = "https://www.linkedin.com/in/sean-monaghan-8318666b/" className = "mr-4 pb-2 " target="_blank" fgColor = "#fff" style = {{ height : 35, width: 35 }} />
                  <SocialIcon url = "https://github.com/Seanmonaghan" className = "mr-4" target="_blank" fgColor = "#fff" style = {{ height : 35, width: 35 }} />
                  <SocialIcon url = "https://twitter.com/SeanMon83059815" className = "mr-4" target="_blank" fgColor = "#fff" style = {{ height : 35, width: 35 }} />
          </div>
        </div>
      </nav>
    </>
  );
}