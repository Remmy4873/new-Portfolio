import React, { useState, useEffect } from "react";
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

  // Attach scroll event listener safely with useEffect
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar fixed="top" expand="md" className={navColour ? "sticky navbar" : "navbar"}>
      <Container>
        {/* Navigation Links */}
        <Nav className="navbar-nav-custom" role="navigation">
          <Nav.Item className="nav-item-custom first-item">
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

          <Nav.Item className="nav-item-custom last-item">
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
