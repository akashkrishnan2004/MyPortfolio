
import React, { useState } from "react";
import "./css/navBarSection.css";

function NavbarSection() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navBarBody">
      <div className="navBarSectionBody">
        <nav className="navbar">
          <span className="logo">MyPortfolio</span>
          <ul
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => {
              console.log("Button clicked");
              setIsMobile(!isMobile);
            }}
          >
            {isMobile ? <>&#10005;</> : <>&#9776;</>}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavbarSection;
