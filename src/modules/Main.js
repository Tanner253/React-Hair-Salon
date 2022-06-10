import React from "react";
import Header from "./Header.js";
import About from "./About.js";
import Splash from "./Splash.js";
import Services from "./Services.js";
import Contact from "./Contact.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';

export default function Main() {
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


