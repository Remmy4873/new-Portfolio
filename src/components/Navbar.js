import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  const [navColour, setNavColour] = useState(false);

  // Function to update navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };

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
            <a href="https://blogg-articles.vercel.app/" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
