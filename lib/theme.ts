"use client";

const THEME_KEY = "theme";

export function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: "dark" | "light" | null) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (theme === "dark" || theme === "light") {
    html.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  } else {
    html.removeAttribute("data-theme");
    try {
      localStorage.removeItem(THEME_KEY);
    } catch {}
  }
}

export function cycleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const system = getSystemTheme();
  let next: "dark" | "light";
  if (current === "dark") next = "light";
  else if (current === "light") next = "dark";
  else next = system === "dark" ? "light" : "dark";
  applyTheme(next);
}
