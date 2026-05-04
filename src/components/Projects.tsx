"use client";

import Image from "next/image";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "SijanList",
    status: "Active",
    link: "https://sijanlist.pro.bd/",
    description: "A professional bookmark dashboard that transforms your Chrome New Tab into a high-performance productivity hub.",
    details: "SijanList is a privacy-first Chromium extension built for power users. It features a stunning glassmorphism UI, customizable boards, and multiple tab pages (Home, Work, Personal). With zero tracking and offline capability, it's the fastest way to organize your digital life.",
    features: ["Custom Boards", "Privacy Blur Mode", "Multiple Tab Pages", "Glass UI", "Offline Mode"],
    tags: ["Vanilla JS", "Extension APIs", "Productivity"],
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
    status: "Coming Soon",
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

export default function Projects({ onSelectProject }: { onSelectProject: (p: any) => void }) {
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

              <div className="project-actions" style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                <button 
                  onClick={() => onSelectProject(project)}
                  className="btn btn-outline" 
                  style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
                >
                  <i className="fas fa-info-circle" /> Details
                </button>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary" 
                    style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
                  >
                    <i className="fas fa-external-link-alt" /> Visit
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
