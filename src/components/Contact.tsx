"use client";

const contacts = [
  { icon: "fa-envelope", label: "Email", value: "sammiahmedsam@gmail.com", href: "mailto:sammiahmedsam@gmail.com" },
  { icon: "fa-github", label: "GitHub", value: "samthe-dev", href: "https://github.com/samthe-dev" },
  { icon: "fa-facebook", label: "Facebook", value: "RexiO", href: "https://facebook.com/RexiO" },
  { icon: "fa-instagram", label: "Instagram", value: "@seiz_1_e", href: "https://instagram.com/seiz_1_e" },
];

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        {contacts.map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
            <i className={`fas ${c.icon}`} />
            <h3 style={{ color: "var(--text-main)", marginBottom: "0.5rem" }}>{c.label}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
