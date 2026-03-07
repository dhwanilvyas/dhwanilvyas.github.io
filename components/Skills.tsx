const SKILLS = [
  { icon: "fab fa-react", name: "React", desc: "Building interactive UIs" },
  {
    icon: "fab fa-react",
    name: "React Native",
    desc: "Cross-platform mobile apps",
  },
  { icon: "fab fa-node-js", name: "Node.js", desc: "Server-side JavaScript" },
  { icon: "fas fa-code", name: "TypeScript", desc: "Type-safe development" },
  { icon: "fas fa-fire", name: "Firebase", desc: "Backend as a service" },
  {
    icon: "fas fa-project-diagram",
    name: "GraphQL",
    desc: "API query language",
  },
  { icon: "fas fa-database", name: "PostgreSQL", desc: "Relational database" },
  { icon: "fab fa-js", name: "JavaScript", desc: "Core programming language" },
];

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <h2 className="section-title">Technologies I work with</h2>
      <div className="skills-grid">
        {SKILLS.map(({ icon, name, desc }) => (
          <div key={name} className="skill-card fade-in">
            <div className="skill-icon">
              <i className={icon} />
            </div>
            <h3>{name}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
