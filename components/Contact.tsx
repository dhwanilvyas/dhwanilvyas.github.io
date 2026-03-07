export default function Contact() {
  return (
    <section id="contact" className="portfolio-section">
      <h2 className="section-title">Let&apos;s work together</h2>
      <div className="contact-content">
        <div className="contact-card fade-in">
          <h3>Have a project in mind?</h3>
          <p>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out
            through any of the channels below!
          </p>
          <a href="mailto:dhwanilvyas@outlook.com" className="contact-email">
            <i className="fas fa-envelope" />
            dhwanilvyas@outlook.com
          </a>
          <div className="contact-social">
            <a
              href="https://github.com/dhwanilvyas"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://linkedin.com/in/dhwanilvyas"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://twitter.com/dhwanilvyas"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
