"use client";

import { useEffect } from "react";
import { cycleTheme } from "@/lib/theme";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      document.documentElement.removeAttribute("data-theme");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={cycleTheme}
      aria-label="Toggle dark mode"
    >
      <span className="icon-sun" aria-hidden>
        <Sun size={20} />
      </span>
      <span className="icon-moon" aria-hidden>
        <Moon size={20} />
      </span>
    </button>
  );
}
