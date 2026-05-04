"use client";

import Image from "next/image";

const projects = [
  {
    title: "SijanList",
    status: "Active",
    description: "A modern utility platform and browser extension for efficient digital content management. Features real-time sync and structured backend.",
    tags: ["JavaScript", "Supabase", "Extension APIs"],
    featured: true,
  },
  {
    title: "FZS Sports",
    status: "Newest",
    description: "A comprehensive sports social platform with player stats, tournament management, and real-time interaction.",
    tags: ["React", "PHP", "Supabase"],
    featured: true,
  },
  {
    title: "RexiO AI Companion",
    status: "Active",
    description: "Bangladesh-local AI companion with multi-agent system. Features voice interaction and personalized neural memory.",
    tags: ["AI", "Python", "NLP"],
    featured: false,
  },
  {
    title: "Spritex Platform",
    status: "Terminated",
    description: "Advanced digital platform with futuristic UI, focused on high-performance tools and services.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Notable Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`project-card ${project.featured ? "featured-project" : ""}`}
          >
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
              {project.title === "FZS Sports" && (
                <div className="project-features-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "1rem" }}>
                  <div><i className="fas fa-id-card" style={{ color: "var(--accent-cyan)", marginRight: "8px" }} /> Player Stats</div>
                  <div><i className="fas fa-trophy" style={{ color: "var(--accent-cyan)", marginRight: "8px" }} /> Tournaments</div>
                  <div><i className="fas fa-users" style={{ color: "var(--accent-cyan)", marginRight: "8px" }} /> Community</div>
                  <div><i className="fas fa-bolt" style={{ color: "var(--accent-cyan)", marginRight: "8px" }} /> Real-time</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
