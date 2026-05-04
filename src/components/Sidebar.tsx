import ThreeCanvas from "./ThreeCanvas";

export default function Sidebar() {
  return (
    <aside className="side-panel">
      <div className="infobox">
        <div className="infobox-title">Mohammad Sijan</div>
        <ThreeCanvas />

        <div className="info-row">
          <span className="info-label">Born</span>
          <span className="info-value">Bangladesh</span>
        </div>
        <div className="info-row">
          <span className="info-label">Occupation</span>
          <span className="info-value">AI Architect<br />Full-Stack Developer</span>
        </div>
        <div className="info-row">
          <span className="info-label">Known For</span>
          <span className="info-value">RexiO Platform<br />Agentic Workflows</span>
        </div>
        <div className="info-row">
          <span className="info-label">Expertise</span>
          <span className="info-value">Neural Memory<br />Agentic UIs</span>
        </div>
        <div className="info-row" style={{ border: "none" }}>
          <span className="info-label">Website</span>
          <span className="info-value">
            <a href="https://sijan.pro.bd" style={{ color: "var(--accent-cyan)", textDecoration: "none" }}>
              sijan.pro.bd
            </a>
          </span>
        </div>
      </div>
    </aside>
  );
}
