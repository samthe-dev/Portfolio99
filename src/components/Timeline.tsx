"use client";

const timelineItems = [
  {
    date: "2026 - Present",
    title: "Advanced Agentic Workflows & AI Integration",
    description: "Leveraging state-of-the-art AI assistants to build complex systems. Focused on building anti-gravity themed UIs and establishing the Spritex ecosystem.",
  },
  {
    date: "2024 - 2025",
    title: "Cybersecurity Foundations & Freelance Web Dev",
    description: "Began serious study into network security and ethical hacking. Simultaneously took on freelance web development projects to build highly responsive, dark-themed applications.",
  },
  {
    date: "2022 - 2023",
    title: "The Digital Genesis",
    description: "First exposure to raw HTML/CSS and digital music production. Started developing a unique artistic profile online, combining technical code with creative media.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline">
      <h2 className="section-title">Career Timeline</h2>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="timeline-date">{item.date}</span>
            <h3 className="timeline-title">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
