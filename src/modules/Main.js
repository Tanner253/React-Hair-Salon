import React, { Component } from "react";
import Header from "./Header.js";
import About from "./About.js";
import Splash from "./Splash.js";
import Services from "./Services.js";
import Contact from "./Contact.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

class Main extends Component {
  render() {
    return (
      <Container className="text-center">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Container>
    );
  }
}

export default Main;
