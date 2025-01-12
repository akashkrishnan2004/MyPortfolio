import React from "react";
import "./css/homeSection.css";

import akash from "./images/akash.jpg";

function HomeSection() {
  return (
    <div className="homeSectionBody">
      <section className="home-section">
        <div className="content">
          <div className="text-section">
            <h1>
              Hello, I'm <span className="name">Akash Krishnan</span>
            </h1>
            {/* <p className="tagline">I am a passionate Web Developer</p> */}
            <p className="homeSectionBodyTagline">
              Hi there! I'm <strong>Akash Krishnan</strong>, a passionate web
              developer who loves crafting beautiful and functional websites.
              Explore my projects, learn more about me, and feel free to reach
              out. Let's create something amazing together!{" "}
            </p>
            <div className="homeSectionButtons">
              <a href="#projects" className="cta-button">
                My projects
              </a>
              <a href="#about" className="cta-button">
                About me
              </a>
            </div>
          </div>
          <div className="image-section">
            <img src={akash} alt="Akash Krishnan" className="profile-image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSection;
