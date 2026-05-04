"use client";

export default function Hero() {
  return (
    <section id="hero" className="visible hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          AI SPECIALIST & FULL-STACK DEVELOPER
        </div>
        <h1>Mohammad Sijan</h1>
        <p className="lead-paragraph">
          <strong>Mohammad Sijan</strong> is a Bangladeshi AI Architect, full-stack developer, 
          and the creator of **RexiO**. He specializes in building autonomous AI agents, agentic workflows, 
          and premium digital experiences that push the boundaries of human-AI interaction.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-envelope" /> Contact Sijan
          </a>
          <a href="#projects" className="btn btn-outline">
            <i className="fas fa-code" /> View Work
          </a>
        </div>
      </div>
    </section>
  );
}
