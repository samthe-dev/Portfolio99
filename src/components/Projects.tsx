"use client";

const projects = [
  {
    title: "FZS Sports Platform",
    status: "Live",
    description: "A comprehensive sports platform built with modern web technologies. Features real-time updates, user dashboards, and interactive elements.",
    image: "/fzs_sports.png",
    tags: ["React", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title: "RexiO AI Companion",
    status: "Active",
    description: "Bangladesh-local AI companion with multi-agent system. Features voice interaction, natural language processing, and personalized responses.",
    image: "/preview.png",
    tags: ["AI", "Python", "NLP"],
    featured: false,
  },
  {
    title: "Portfolio Website",
    status: "Live",
    description: "Personal portfolio website showcasing skills, projects, and experience. Built with modern web technologies and optimized for performance.",
    image: "/sijan2.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`project-card ${project.featured ? "featured-project" : ""}`}
          >
            <img src={project.image} alt={project.title} className="project-thumbnail" />
            <div className="project-content">
              <h3 className="project-title">
                {project.title}
                <span className="project-status">{project.status}</span>
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>
                {project.description}
              </p>
              <div className="tech-stack">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
