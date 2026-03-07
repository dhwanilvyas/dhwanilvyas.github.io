const EXPERIENCES = [
  {
    date: "2024 - Present",
    title: "Senior Frontend Engineer",
    company: "Atlassian",
    description:
      "I work on a mission-critical enterprise CPQ (Configure, Price, Quote) platform used by partners to manage multi-million-dollar deals. I own key frontend modules and complex product workflows built with React, TypeScript, and GraphQL, ensuring reliability, scalability, and a seamless user experience. I've also led modernization efforts for core modules, improved CI/CD pipelines and developer productivity, and built reusable UI components used across the application to maintain consistency and performance at scale.",
  },
  {
    date: "2020 - 2024",
    title: "Senior Frontend Engineer",
    company: "Razorpay",
    description:
      "I worked on the External Developer Experience platform, building tools that help developers integrate with Razorpay's APIs and webhooks more effectively. I led the migration of the documentation platform from SSG to SSR, enabling faster experimentation and dynamic features, and built an instant preview system that reduced content preview time from ~20 minutes to near-zero. I also developed observability dashboards for API and webhook logs, enabling self-serve debugging and significantly reducing customer support tickets.",
  },
  {
    date: "2019 - 2020",
    title: "Frontend Developer",
    company: "Treebo",
    description:
      "I was part of the core frontend team building their flagship Property Management System (PMS) used across hotels and internal operations. I helped build critical modules such as POS workflows and guest registration from scratch using React and GraphQL. I also rebuilt the high-traffic mobile payment experience and developed customer-facing features like Web Check-in, while contributing to the company's internal design system and improving cross-platform mobile experiences using React Native.",
  },
  {
    date: "2018 - 2019",
    title: "VeggieFactory",
    company: "Treebo",
    description:
      "An early-stage startup in the fruits and vegetable supply chain, I built several products from the ground up to digitize core business operations. This included a customer-facing mobile app for online purchases, a POS system for retail outlets, an inventory management mobile app for field workers, and an internal dashboard for warehouse operations. These tools streamlined ordering, inventory tracking, and logistics workflows, helping the business operate more efficiently as it scaled.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {EXPERIENCES.map(({ date, title, company, description }) => (
          <div key={date + company} className="timeline-item fade-in">
            <div className="timeline-content">
              <div className="timeline-date">{date}</div>
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p>{description}</p>
            </div>
            <div className="timeline-dot" />
          </div>
        ))}
      </div>
    </section>
  );
}
