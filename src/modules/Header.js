import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function Header() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container className="text-center">
          <Navbar.Brand to="/">
            <img
              alt=""
              src="/harLogo.PNG"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Marian's Hair Salon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{color: "linear-gradient(to right, #00ffc8, #e41bb1, #00ffc8)" }}>Home</Nav.Link>
              <NavDropdown
                title="More Information"
                id="collasible-nav-dropdown"
                className="text-center"
              >
                <NavDropdown.Item href="/services">Services</NavDropdown.Item>
                <NavDropdown.Item href="contact">Contact</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://www.vagaro.com/hairbymarian">
                  Schedule Appointment
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
