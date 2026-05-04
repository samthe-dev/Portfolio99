"use client";

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">Biography</h2>
      <div
        style={{
          background: "var(--glass-bg)",
          border: "1px solid var(--glass-border)",
          borderRadius: "15px",
          padding: "2rem",
          backdropFilter: "blur(10px)",
        }}
      >
        <p>
          <strong style={{ color: "var(--text-main)" }}>Mohammad Sijan</strong> is a Bangladeshi web developer, cybersecurity
          enthusiast, and digital creator specializing in modern AI-powered web applications. He operates at the
          intersection of aesthetic design and robust backend systems. His passion for computers started at an early
          age, and he has developed expertise in various programming languages and tools over the years.
        </p>
      </div>
    </section>
  );
}
