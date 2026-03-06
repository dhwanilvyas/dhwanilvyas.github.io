"use client";

const SOCIAL = [
  { href: "https://github.com/dhwanilvyas", icon: "fab fa-github" },
  { href: "https://linkedin.com/in/dhwanilvyas", icon: "fab fa-linkedin-in" },
  { href: "https://twitter.com/dhwanilvyas", icon: "fab fa-twitter" },
];

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know who I am</p>
      <div className="about-content">
        <div className="profile-card fade-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dhwanil_photo.png"
            alt="Dhwanil Vyas"
            className="profile-image"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://ui-avatars.com/api/?name=Dhwanil+Vyas&size=250&background=4F8EF7&color=fff&bold=true";
            }}
          />
          <h3>Dhwanil Vyas</h3>
          <p>Software Engineer</p>
          <div className="social-links">
            {SOCIAL.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon}
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="about-text fade-in">
          <h3>Passionate Software Engineer</h3>
          <p>
            Hello! I&apos;m Dhwanil, a passionate software engineer based in
            Gujarat, India. With approximately 6 years of experience, I&apos;ve
            had the privilege of building software for companies at different
            scales, primarily using the JavaScript ecosystem.
          </p>
          <p>
            I specialize in building exceptional digital experiences with React,
            React Native, Node.js, and TypeScript. My expertise extends to
            modern technologies like Firebase, GraphQL, MongoDB, and PostgreSQL,
            enabling me to create full-stack solutions that are both scalable
            and performant.
          </p>
          <p>
            I&apos;m always eager to take on new challenges and collaborate on
            exciting projects. Let&apos;s create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
