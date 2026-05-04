"use client";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: "fa-desktop",
    skills: [
      { name: "HTML & CSS3", width: "95%" },
      { name: "JavaScript / ES6+", width: "90%" },
      { name: "React / Next.js", width: "88%" },
      { name: "TailwindCSS / Framer Motion", width: "90%" },
    ],
  },
  {
    title: "Cybersecurity & Tools",
    icon: "fa-shield-halved",
    skills: [
      { name: "Network Security", width: "80%" },
      { name: "Linux / Terminal", width: "85%" },
      { name: "AI Prompt Engineering", width: "95%" },
      { name: "Git & Version Control", width: "88%" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h3>
              <i className={`fas ${category.icon}`} /> {category.title}
            </h3>
            {category.skills.map((skill) => (
              <div key={skill.name} className="skill-bar-container">
                <div className="skill-bar-info">
                  <span>{skill.name}</span>
                  <span>{skill.width}</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: skill.width }} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
