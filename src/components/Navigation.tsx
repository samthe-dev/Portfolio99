"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      </nav>

      {/* Mobile Floating Trigger */}
      <button 
        className="menu-toggle"
        onClick={() => setMobileOpen(true)}
        aria-label="Open System Menu"
      >
        <i className="fas fa-bars" />
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-nav-menu open"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="terminal-header" style={{ position: "absolute", top: "2rem", width: "80%", justifyContent: "center" }}>
               <span className="terminal-title">SYSTEM_NAVIGATION_v4.0</span>
            </div>

            {navLinks.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                style={{ textTransform: "uppercase" }}
              >
                <span style={{ color: "var(--accent-purple)", marginRight: "0.5rem" }}>0{idx + 1}</span>
                {link.label.replace(" ", "_")}
              </motion.a>
            ))}

            <button 
              className="btn btn-outline" 
              onClick={() => setMobileOpen(false)}
              style={{ marginTop: "2rem", borderColor: "rgba(255, 80, 80, 0.5)", color: "#ff5f56" }}
            >
              <i className="fas fa-times" /> TERMINATE_SESSION
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
