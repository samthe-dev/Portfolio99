"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Timeline from "@/components/Timeline";
import Terminal from "@/components/Terminal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <>
      <Navigation />
      <div className="container">
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects onSelectProject={setSelectedProject} />
          <Timeline />
          <Contact />
          <Footer />
        </main>
        <Sidebar />
      </div>
      <Terminal />

      {selectedProject && (
        <div className="modal-overlay active" onClick={() => setSelectedProject(null)}>
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            </div>
            <div className="modal-body">
              <p className="modal-desc">{selectedProject.details || selectedProject.description}</p>
              {selectedProject.features && (
                <div className="modal-features">
                  <h4>Core Features:</h4>
                  <ul>
                    {selectedProject.features.map((f: string) => (
                      <li key={f}><i className="fas fa-check-circle" /> {f}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="modal-footer">
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" className="btn btn-primary">
                    Launch Platform <i className="fas fa-rocket" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
