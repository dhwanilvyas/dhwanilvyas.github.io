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
          : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [titleIndex, charIndex, isDeleting]);

  const displayText = TITLES[titleIndex].slice(0, charIndex);

  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-greeting">👋 Hi, I&apos;m</p>
        <h1 className="hero-name">Dhwanil Vyas</h1>
        <h2 className="hero-title">
          <span className="typing-text">{displayText}</span>
        </h2>
        <p className="hero-description">
          Crafting exceptional digital experiences with modern web technologies
        </p>
        <div className="hero-cta">
          <Link href="#contact" className="btn btn-primary">
            <span>Let&apos;s Talk</span>
          </Link>
          <Link href="#about" className="btn btn-secondary">
            <span>Learn More</span>
          </Link>
        </div>
      </div>
      <div className="scroll-indicator">
        <ChevronDown size={32} strokeWidth={2} />
      </div>
    </section>
  );
}
