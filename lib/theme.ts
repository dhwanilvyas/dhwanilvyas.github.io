"use client";

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
  } else {
    html.removeAttribute("data-theme");
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
