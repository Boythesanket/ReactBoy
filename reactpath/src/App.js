import React from "react";
import About from "./About.js";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Contact from "./Contact.js";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      </Router>
    </>
  );
}

export default App;
