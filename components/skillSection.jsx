import React from "react";
import "./css/skillSection.css";

const skills = [
  { id: 1, name: "HTML", icon: "🌐" },
  { id: 2, name: "CSS", icon: "🎨" },
  { id: 3, name: "JavaScript", icon: "💻" },
  { id: 4, name: "React", icon: "⚛️" },
  { id: 5, name: "Node.js", icon: "🌿" },
  { id: 6, name: "MongoDB", icon: "🍃" },
  { id: 7, name: "My SQL", icon: "📊" },
  { id: 8, name: "Git hub", icon: "🔧" },
  { id: 9, name: "Responsive Design", icon: "📱" },
  { id: 10, name: "Bootstrap", icon: "⚡" },
];

function SkillsSection  ()  {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h1 className="skillSectionTitle">My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
