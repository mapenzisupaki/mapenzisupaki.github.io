import { PageHeader, ProjectCard } from "../components/Sections.jsx";
import { projects } from "../data/siteData.js";

export default function Work() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        text="A snapshot of personal projects I have worked on for SaaS, FinTech, and product-driven teams building better digital experiences."
      />
      <div className="project-grid section-reveal">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </>
  );
}
