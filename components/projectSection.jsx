import React from "react";
import "./css/projectSection.css";

import exam from "./images/exam_portal_img.png";
import youtube from "./images/youtube_img.png"

const projects = [
  {
    id: 1,
    title: "YouTube Clone",
    description:
      "A static web page replicating the design of YouTube's interface using only HTML and CSS. This project showcases my ability to create visually appealing and responsive layouts, including elements like a navigation bar, video thumbnails, and a structured content grid, focusing on clean and functional design.",
    link: "https://yt-clone-akash.netlify.app/",
    image: youtube,
  },
  {
    id: 2,
    title: "Online Exam Portal",
    description:
      "A comprehensive Online Exam Portal to streamline exam creation and management. The portal allows users to register as Students or Instructors with secure authentication. Instructors can create dynamic exams with multiple questions, each offering four options and the ability to select correct answers. Students can seamlessly attempt exams, with their results stored for further analysis.",
    link: "https://example.com/exam-portal",
    image: exam,
  },
  // {
  //   id: 3,
  //   title: "E-commerce Website",
  //   description:
  //     "A dynamic e-commerce platform with product listings, cart, and checkout features.",
  //   link: "https://example.com/e-commerce",
  //   image: "./image/exam_portal_img.png",
  // },
  
];

function ProjectSection() {
  return (
    <div className="ProjectSectionBody">
      <section className="projects-section" id="projects">
        <div className="projects-container">
          <h1 className="ProjectSectiontTitle">My Projects</h1>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectSection;
