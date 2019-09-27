import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ProjectList from "./components/projectList";
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import ProjectDetail from "./components/projectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/details" component={ProjectDetail} />
      </div>
    </BrowserRouter>
  );
}
export default App;
