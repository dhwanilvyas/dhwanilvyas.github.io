const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhwanilvyas.github.io";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dhwanil Vyas",
  url: siteUrl,
  jobTitle: "Software Engineer",
  description:
    "Software engineer with 6+ years of experience building products with React, React Native, Node.js, and TypeScript.",
  sameAs: [
    "https://github.com/dhwanilvyas",
    "https://linkedin.com/in/dhwanilvyas",
    "https://twitter.com/dhwanilvyas",
  ],
  email: "mailto:dhwanilvyas@outlook.com",
  knowsAbout: [
    "React",
    "React Native",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "GraphQL",
    "Firebase",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dhwanil Vyas - Software Engineer",
  url: siteUrl,
  description:
    "Portfolio of Dhwanil Vyas. Software engineer specializing in React, React Native, Node.js, and TypeScript.",
  author: {
    "@type": "Person",
    name: "Dhwanil Vyas",
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />
    </>
  );
}
