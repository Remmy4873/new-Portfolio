import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { ImBlog } from "react-icons/im";
import "./Navbar.css"; // Import the CSS file for styling

function NavBar() {
  const [navColour, updateNavbar] = useState(false);

  // Function to update navbar background on scroll
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar fixed="top" expand="md" className={navColour ? "sticky navbar" : "navbar"}>
      <Container>
        {/* Brand / Logo Section */}
        <Navbar.Brand href="/" className="d-flex">
          <span className="brand-name">B.Remmy</span>
        </Navbar.Brand>

        {/* Navigation Links */}
        <Nav className="navbar-nav-custom ms-auto">
          <Nav.Item className="nav-item-custom">
            <Nav.Link as={Link} to="/">
              <AiOutlineHome className="nav-icon" /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="nav-item-custom">
            <Nav.Link as={Link} to="/about">
              <AiOutlineUser className="nav-icon" /> About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="nav-item-custom">
            <Nav.Link as={Link} to="/project">
              <AiOutlineFundProjectionScreen className="nav-icon" /> Projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="nav-item-custom">
            <Nav.Link href="https://blogg-articles.vercel.app/" target="_blank" rel="noreferrer">
              <ImBlog className="nav-icon" /> Blog
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
