import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../header/navbar.css";

function Navbar() {
  const [viewLinks, setViewLinks] = useState(true);

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setViewLinks(!viewLinks);
    } else {
      setViewLinks(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewLinks(false);
      } else {
        setViewLinks(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <h3 className="logo">Mathieu Delcourt</h3>
        <i className="fa-solid fa-bars burger" onClick={toggleMenu}></i>
        {viewLinks && (
          <ul className="nav-links ">
            <li onClick={toggleMenu}>
              <Link to="/">
                <span className="letter">A</span>ccueil
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <a href="#Apropos">
                <span className="letter">A</span>Propos
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#compétences">
                <span className="letter">C</span>ompétences
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#projets">
                <span className="letter">P</span>rojets
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contact">
                <span className="letter">C</span>ontact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;