"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const TITLES = [
  "Software Engineer",
  "React Developer",
  "Full Stack Developer",
  "Mobile Developer",
];

const SOCIAL = [
  { href: "https://github.com/dhwanilvyas", icon: "fab fa-github" },
  { href: "https://linkedin.com/in/vyasdhwanil", icon: "fab fa-linkedin-in" },
  { href: "https://twitter.com/vyasdhwanil", icon: "fab fa-twitter" },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (charIndex === 0) {
            setIsDeleting(false);
            setTitleIndex((i) => (i + 1) % TITLES.length);
          } else {
            setCharIndex((c) => c - 1);
          }
        } else {
          if (charIndex === currentTitle.length) {
            setIsDeleting(true);
          } else {
            setCharIndex((c) => c + 1);
          }
        }
      },
      !isDeleting && charIndex === currentTitle.length
        ? 2000
        : isDeleting && charIndex === 0
          ? 500
          : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [titleIndex, charIndex, isDeleting]);

  const displayTitle = TITLES[titleIndex].slice(0, charIndex);

  return (
    <section id="hero">
      <div className="hero-about-content">
        <div className="profile-card">
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
        <div className="about-text">
          <p className="hero-greeting">👋 Hi, I&apos;m</p>
          <h1 className="hero-name">Dhwanil Vyas</h1>
          <h3 className="hero-about-heading">
            <span className="typing-text">{displayTitle}</span>
          </h3>
          <p>
            With 7+ years of experience, I&apos;ve had the privilege of building
            software for companies at different scales, primarily using the
            JavaScript ecosystem. I specialize in building exceptional digital
            experiences with React, React Native, Node.js, and TypeScript. My
            expertise extends to modern technologies like Firebase, GraphQL,
            MongoDB, and PostgreSQL, enabling me to create full-stack solutions
            that are both scalable and performant.
          </p>
          <p>
            I&apos;m always eager to take on new challenges and collaborate on
            exciting projects. Let&apos;s create something amazing together!
          </p>
          <div className="hero-cta">
            <Link href="#contact" className="btn btn-primary">
              <span>Let&apos;s Talk</span>
            </Link>
            <Link href="#skills" className="btn btn-secondary">
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <ChevronDown size={32} strokeWidth={2} />
      </div>
    </section>
  );
}
