"use client";

import { useEffect, useRef } from "react";

const OPTIONS = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

export function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, OPTIONS);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useObserveFadeIn(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, OPTIONS);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
