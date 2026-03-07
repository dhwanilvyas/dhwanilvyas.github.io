const PROJECTS = [
  {
    href: "https://play.google.com/store/apps/details?id=com.mdtsindia",
    name: "RTO app",
    description:
      "Single handedly built a cross-platform mobile application (React Native, Firebase) with 50k+ downloads, enabling users to practice for driver's license tests online.",
  },
  {
    href: "#",
    name: "Employee management system",
    description:
      "Built a web application (React, Node.js, firebase) for managing employee data, including attendance, and salary management.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <h2 className="section-title">Things I&apos;ve built</h2>
      <div className="projects-grid">
        {PROJECTS.map(({ href, name, description }) => (
          <a
            key={name}
            href={href}
            className="project-card fade-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{name}</h3>
            <p>{description}</p>
            <span className="project-link">
              View project <i className="fas fa-external-link-alt" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
