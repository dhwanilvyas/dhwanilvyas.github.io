"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";
      sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (!id) return;
        const top = section.getBoundingClientRect().top;
        if (top <= 200) current = id;
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      id="navbar"
      className={`portfolio-nav ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container">
        <ul
          className={`nav-links ${mobileOpen ? "active" : ""}`}
          id="navLinks"
        >
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={activeId === href.slice(1) ? "active" : ""}
                onClick={closeMobile}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
