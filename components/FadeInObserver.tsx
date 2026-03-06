"use client";

import { useObserveFadeIn } from "@/hooks/useIntersectionObserver";

export default function FadeInObserver() {
  useObserveFadeIn(".fade-in, .skill-card, .timeline-item, .about-text, .contact-card, .project-card");
  return null;
}
