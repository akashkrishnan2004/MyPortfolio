import React from "react";
import exam from "./images/exam_portal_img.png";
import youtube from "./images/youtube_img.png";
import weather_app from "./images/weather_app.png"

import "./css/projectSection.css";

const projects = [
  {
    id: 1,
    title: "Online Exam Portal",
    description:
      "A comprehensive Online Exam Portal to streamline exam creation and management. The portal allows users to register as Students or Instructors with secure authentication. Instructors can create dynamic exams with multiple questions, each offering four options and the ability to select correct answers. Students can seamlessly attempt exams, with their results stored for further analysis.",
    link: "https://github.com/akashkrishnan2004/Online-exam-portal",
    image: exam,
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "A full-stack weather application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The app allows users to search for real-time weather conditions and a 5-day hourly forecast by entering a city name. It integrates the OpenWeatherMap API to fetch data like temperature, humidity, wind speed, weather icons, and local time based on timezone. The frontend features a clean, responsive UI with animated transitions for a better user experience, while the backend manages API requests and logs recent city searches to MongoDB. The project emphasizes API integration, secure environment configuration, React state management, and full-stack deployment on Render.",
    link: "https://github.com/akashkrishnan2004/Weather-App-Project",
    image: weather_app,
  },
  {
    id: 3,
    title: "YouTube Clone",
    description:
      "A static web page replicating the design of YouTube's interface using only HTML and CSS. This project showcases my ability to create visually appealing and responsive layouts, including elements like a navigation bar, video thumbnails, and a structured content grid, focusing on clean and functional design.",
    link: "https://github.com/akashkrishnan2004/YouTube-Clone",
    image: youtube,
  },

  //
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
