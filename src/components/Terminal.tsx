"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMMANDS = {
  help: "Available commands: whoami, projects, skills, contact, clear, rexi --about, exit",
  whoami: "User: Mohammad Sijan | Status: AI Architect & Innovation Lead | Location: Bangladesh",
  projects: "Retrieving encrypted project list... [SijanList, FZS Sports, RexiO AI, Spritex Platform]",
  skills: "System Core: [Artificial Intelligence, Agentic Workflows, Full-Stack Dev, Cybersecurity]",
  contact: "Email: contact@sijan.pro.bd | FB: FakeSijan | GH: Seizmann",
  rexi: "RexiAI v2.1 [CORE]: Autonomous monitoring active. Sijan's ecosystem is running at 100% efficiency. Use '--cmd' to query specific modules.",
  exit: "Closing terminal session...",
};

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState<string[]>(["Welcome to SijanOS Terminal v1.0.0", "Type 'help' to begin..."]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isMaximized]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `> ${input}`];

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } 
    
    if (cmd === "exit") {
      setIsOpen(false);
    } else if (cmd === "maximize") {
      setIsMaximized(true);
    } else if (cmd in COMMANDS) {
      newHistory.push(COMMANDS[cmd as keyof typeof COMMANDS]);
    } else if (cmd !== "") {
      newHistory.push(`Command not found: ${cmd}. Type 'help' for options.`);
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="terminal-toggle"
        title="Open Terminal"
      >
        <i className="fas fa-terminal" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              width: isMaximized ? "100vw" : "450px",
              height: isMaximized ? "100vh" : "300px",
              right: isMaximized ? 0 : "2rem",
              bottom: isMaximized ? 0 : "6rem",
              borderRadius: isMaximized ? 0 : "12px",
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            drag={!isMaximized}
            dragMomentum={false}
            className={`terminal-window ${isMaximized ? "maximized" : ""}`}
            style={{ zIndex: isMaximized ? 9999 : 2001 }}
          >
            {/* Header */}
            <div className="terminal-header">
              <div className="terminal-dots" onPointerDown={(e) => e.stopPropagation()}>
                <span className="dot red" onClick={() => setIsOpen(false)} title="Close" />
                <span className="dot yellow" onClick={() => setIsOpen(false)} title="Minimize" />
                <span className="dot green" onClick={() => setIsMaximized(!isMaximized)} title="Toggle Maximize" />
              </div>
              <div className="terminal-title">sijan@SijanOS: ~</div>
            </div>

            {/* Body */}
            <div className="terminal-body" ref={scrollRef}>
              {history.map((line, i) => (
                <div key={i} className="terminal-line">
                  {line}
                </div>
              ))}
              <form onSubmit={handleCommand} className="terminal-input-row">
                <span className="terminal-prompt">$</span>
                <input
                  autoFocus
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="terminal-input"
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
