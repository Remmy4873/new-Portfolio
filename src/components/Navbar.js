import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const NavBar = () => {
  const [navColour, setNavColour] = useState(false);

  // Function to update navbar background on scroll
  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={navColour ? "navbar sticky" : "navbar"}>
      <div className="navbar-container">
        {/* Navigation Links */}
        <ul className="nav-links">
          <li className="nav-item first-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/project">Projects</Link>
          </li>
          <li className="nav-item last-item">
            <Link to="https://blogg-articles.vercel.app/" target="_blank" rel="noreferrer">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
