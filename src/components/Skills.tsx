"use client";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: "fa-desktop",
    skills: [
      { name: "HTML & CSS3", width: "95%" },
      { name: "JavaScript / TypeScript", width: "90%" },
      { name: "React / Next.js", width: "88%" },
    ],
  },
  {
    title: "Backend & Tools",
    icon: "fa-server",
    skills: [
      { name: "Node.js", width: "85%" },
      { name: "Python", width: "80%" },
      { name: "Git & GitHub", width: "92%" },
    ],
  },
  {
    title: "Design & Other",
    icon: "fa-palette",
    skills: [
      { name: "UI/UX Design", width: "78%" },
      { name: "Cybersecurity Basics", width: "75%" },
      { name: "AI/ML Tools", width: "82%" },
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
