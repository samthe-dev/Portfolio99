"use client";

export default function Hero() {
  return (
    <section id="hero" className="visible" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", padding: "80px 20px 40px" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <p className="lead-paragraph" style={{ color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", fontSize: "1rem", marginBottom: "1rem" }}>
          Hello, World. I&apos;m
        </p>
        <h1>Mohammad Sijan</h1>
        <p style={{ fontSize: "1.5rem", color: "var(--text-muted)", marginBottom: "2rem", fontWeight: 300 }}>
          Web Developer &amp; Cybersecurity Expert
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-envelope" /> Contact Sijan
          </a>
          <a href="#projects" className="btn" style={{ border: "1px solid var(--glass-border)" }}>
            <i className="fas fa-code" /> View Work
          </a>
        </div>
      </div>
    </section>
  );
}
