// Skill Section Logo
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import jsLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "../assets/tech_logo/bootstrap.png";
import materialuiLogo from "../assets/tech_logo/materialui.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import firebaseLogo from "../assets/tech_logo/firebase.png";
import cLogo from "../assets/tech_logo/c.png";
import cppLogo from "../assets/tech_logo/cpp.png";
import javaLogo from "../assets/tech_logo/java.png";
import pythonLogo from "../assets/tech_logo/python.png";
import typescriptLogo from "../assets/tech_logo/typescript.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";
import vercelLogo from "../assets/tech_logo/vercel.png";

// Project Images
import CinemaPeddika from "../assets/project_images/Cinema_Peedika.png";
import MaveliNadu from "../assets/project_images/Maveli_Nadu.png";
import ExamPortal from "../assets/project_images/exam_portal_img.png";
import WeatherApp from "../assets/project_images/weather_app.png";
import NationView from "../assets/project_images/NationView1.png";

import {
  Code2,
  Database,
  Layers3,
  Mail,
  Rocket,
  Server,
  Wrench,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// Logo.jsx
// Footer.jsx
export const logo = {
  title: "Akash Krishnan",
  accent: ".",
};

// NavBar.jsx
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  // { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
];

// About.jsx
export const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and reusable code with modern development practices.",
  },
  {
    icon: Layers3,
    title: "Full Stack",
    description:
      "Building complete applications from responsive interfaces to backend APIs.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Turning ideas and problems into practical digital solutions.",
  },
];

// Skills.jsx
export const skillCategories = [
  {
    id: 0,
    title: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: 1,
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST API", "JWT"],
  },
  {
    id: 2,
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MongoDB Atlas", "Firebase", "Firestore"],
  },
  {
    id: 3,
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Vite", "Netlify", "VS Code"],
  },
];

// export const skillCategories = [
//   {
//     id: 0,
//     title: "Frontend",
//     icon: Code2,
//     skills: [
//       { id: 0, label: "HTML", icon: htmlLogo },
//       { id: 1, label: "CSS", icon: cssLogo },
//       { id: 2, label: "JavaScript", icon: jsLogo },
//       { id: 3, label: "React", icon: reactjsLogo },
//       { id: 4, label: "Tailwind CSS", icon: tailwindcssLogo },
//       { id: 5, label: "Bootstrap", icon: bootstrapLogo },
//     ],
//   },
//   {
//     id: 1,
//     title: "Backend",
//     icon: Server,
//     skills: [
//       { id: 0, label: "NOde.js", icon: nodejsLogo },
//       { id: 1, label: "Express.js", icon: expressjsLogo },
//       { id: 2, label: "REST API", icon: null },
//       { id: 3, label: "JWT", icon: null },
//     ],
//   },
//   {
//     id: 2,
//     title: "Database",
//     icon: Database,
//     skills: [
//       { id: 0, label: "MongoDB", icon: mongodbLogo },
//       { id: 1, label: "MongoDB Atlas", icon: null },
//       { id: 2, label: "Firebase", icon: firebaseLogo },
//       { id: 3, label: "Firestore", icon: null },
//     ],
//   },
//   {
//     id: 3,
//     title: "Tools",
//     icon: Wrench,
//     // skills: ["Git", "GitHub", "Postman", "Vite", "Netlify", "VS Code"],
//     skills: [
//       {id: 0, label: "Git", icon: gitLogo},
//       {id: 1, label: "GitHub", icon: githubLogo},
//       {id: 2, label: "Postman", icon: postmanLogo},
//       {id: 3, label: "Vite", icon: null},
//       {id: 4, label: "Netlify", icon: netlifyLogo},
//       {id: 5, label: "VS Code", icon: vscodeLogo}
//     ]
//   },
// ];

// Projects.jsx

export const projects = [
  {
    id: 0,
    title: "Cinema Peedika",
    description:
      "A modern movie discovery platform built with React and the TMDB API.",
    image: CinemaPeddika,
    technologies: ["React", "Tailwind CSS", "TMDB API", "Lucide React"],
    category: "Frontend",
    liveUrl: "https://cinemapeedika.netlify.app/",
    githubUrl: "https://github.com/akashkrishnan2004/Cinema-Web-App",
  },

  {
    id: 1,
    title: "Maveli Nadu",
    description:
      "An interactive Onam themed web experience with animations and modern UI.",
    image: MaveliNadu,
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    liveUrl: "https://maveli-nadu-admin-page.netlify.app/",
    githubUrl: "https://github.com/akashkrishnan2004/onam-web-app",
  },
  {
    id: 2,
    title: "Nation View",
    description:
      "A responsive country explorer built with React. Features live search, region-based filtering, and detailed country pages with population, capital, languages, currencies, and more. Data is loaded from JSON and displayed in a clean, card-based UI.",
    image: NationView,
    technologies: [],
    category: "Frontend",
    liveUrl: "https://nation-view.netlify.app/",
    githubUrl: "https://github.com/akashkrishnan2004/Nation-View",
  },
  {
    id: 3,
    title: "Online Exam Portal",
    description:
      "A full-stack examination platform with student and instructor roles.",
    image: ExamPortal,
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/akashkrishnan2004/Online-exam-portal",
  },

  {
    id: 4,
    title: "Weather App",
    description:
      "A responsive weather application that displays real-time weather information.",
    image: WeatherApp,
    technologies: ["React", "API", "CSS"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "https://github.com/akashkrishnan2004/Weather-App-Project",
  },

  // {
  //   id: ,
  //   title: "",
  //   description:
  //     "",
  //   image: "",
  //   technologies: [],
  //   category: "Frontend",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
];

// Experience.jsx
export const experience = [
  {
    id: 1,
    type: "Experience",
    year: "2024 - 2025",
    title: "MERN Stack Intern",
    organization: "Synnefo Solutions",
    location: "Eranakulam, Kerala",
    description:
      "Worked on full-stack web applications using React, Node.js, Express.js and MongoDB. Developed responsive interfaces, REST APIs and database-driven features.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },

  {
    id: 2,
    type: "Leadership",
    year: "2025 - Present",
    title: "Technical Co-Lead",
    organization: "MuLearn UCEK",
    location: "Thiruvananthapuram, Kerala",
    description:
      "Contributing to technical activities, coordinating development initiatives and helping members learn and work with modern technologies.",
    technologies: ["React", "JavaScript", "Git", "GitHub"],
  },
];

// Education.jsx
export const education = [
  {
    id: 1,
    year: "2025 - Present",
    degree: "B.Tech in Information Technology",
    institution: "University College of Engineering, Kariavattom",
    location: "Thiruvananthapuram, Kerala",
    description:
      "Currently pursuing B.Tech in Information Technology with a focus on software engineering, web development and modern computing technologies.",
  },

  {
    id: 2,
    year: "2021 - 2024",
    degree: "Diploma in Computer Engineering",
    institution: "IPT & GPTC Shoranur",
    location: "Palakkad, Kerala",
    description:
      "Completed Diploma in Computer Engineering with a strong foundation in programming, web development, databases and computer technologies.",
  },
];

// Contact.jsx
export const MailId = [
  {
    id: 0,
    label: "akashkrishnan806@gmail.com",
    href: "#",
  },
];

// Footer.jsx
export const SocialLinks = [
  {
    id: 0,
    href: "https://github.com/akashkrishnan2004",
    label: "GitHub",
    icon: <FaGithub size={18} />,
  },
  {
    id: 1,
    href: "https://www.linkedin.com/in/akash-krishnan2004/",
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
  },
  {
    id: 3,
    href: "akashkrishnan806@gmail.com",
    label: "Mail",
    icon: <Mail size={18} />,
  },
  {
    id: 4,
    href: "https://www.instagram.com/ak_a_sh_krishnan/",
    label: "Instagram",
    icon: <FaInstagram size={18} />
  }
];
