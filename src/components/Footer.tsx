export default function Footer() {
  return (
    <footer>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Mohammad Sijan. All rights reserved.
      </p>
      {/* 
      <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "1rem" }}>
        <a href="https://github.com/Seizmann" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", fontSize: "1.5rem", transition: "color 0.3s" }}>
          <i className="fab fa-github" />
        </a>
        <a href="https://facebook.com/RexiO" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", fontSize: "1.5rem", transition: "color 0.3s" }}>
          <i className="fab fa-facebook" />
        </a>
        <a href="https://instagram.com/seiz_1_e" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-muted)", fontSize: "1.5rem", transition: "color 0.3s" }}>
          <i className="fab fa-instagram" />
        </a>
      </div>
      */}
    </footer>
  );
}
