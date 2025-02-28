import React, { useEffect, useState } from "react";
import "./css/aboutSection.css";

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`about-section ${isVisible ? "visible" : ""}`} id="about">
      <div className="about-container">
        <div className="about-text">
          <h1 className="aboutHead1">About Me</h1>
          <p className="aboutPara1">
            Hi, I'm Akash Krishnan, a passionate web developer with a keen
            interest in creating responsive and dynamic websites. With a
            background in front-end and back-end technologies, I aim to create
            efficient, user-friendly, and accessible web applications.
          </p>
          <a href="#contact" className="aboutCtaButton">
            Contact with Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
