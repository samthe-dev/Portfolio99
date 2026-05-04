"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "Biography", icon: "fa-user" },
  { href: "#skills", label: "Skills", icon: "fa-code" },
  { href: "#projects", label: "Projects", icon: "fa-folder-open" },
  { href: "#timeline", label: "Timeline", icon: "fa-timeline" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="navtext">SIJAN.PRO.BD</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          className={`nav-hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      <div className={`mobile-nav-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-spacer" />
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            <i className={`fas ${link.icon}`} />
            {link.label}
          </a>
        ))}
        <div
          className="mobile-nav-close-bar"
          onClick={() => setMobileOpen(false)}
          role="button"
          tabIndex={0}
        >
          <i className="fas fa-chevron-up" /> Close Menu
        </div>
      </div>
    </>
  );
}
