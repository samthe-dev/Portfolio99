"use client";

const contacts = [
  { icon: "fas fa-envelope", label: "Email", value: "contact@sijan.pro.bd", href: "mailto:contact@sijan.pro.bd" },
  { icon: "fab fa-github", label: "GitHub", value: "Seizmann", href: "https://github.com/Seizmann" },
  { icon: "fab fa-facebook", label: "Facebook", value: "FakeSijan", href: "https://facebook.com/FakeSijan" },
  { icon: "fab fa-instagram", label: "Instagram", value: "@seiz_1_e", href: "https://instagram.com/seiz_1_e" },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        {contacts.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
            <i className={c.icon} />
            <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>{c.label}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
