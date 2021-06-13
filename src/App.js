import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <HashRouter >
    <NavBar />
      <Switch>
        <Route component = {Home} path = "/" exact />
        <Route component = {About} path = "/about" />
        <Route component = {Project} path = "/project" />
        <Route component = {Skills} path = "/skills" />
      </Switch>
    <Footer />
    </HashRouter>
  )
}

export default App;
