import React from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Image } from "react-bootstrap";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <Navbar className="navbar" fixed="top" sticky="top" collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">
        <Image src={logo} className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav me-auto">
          <Nav.Link className="nav-link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-link" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="nav-link" href="#courses">
            courses
          </Nav.Link>
          <Nav.Link className="nav-link" href="#testimonial">
            reviews
          </Nav.Link>
          <Nav.Link className="nav-link" href="#contact">
            contact us
          </Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
