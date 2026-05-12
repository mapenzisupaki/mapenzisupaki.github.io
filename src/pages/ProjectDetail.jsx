import { Link, useParams } from "react-router-dom";
import { projects } from "../data/siteData.js";
import NotFound from "./NotFound.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  return (
    <article className="detail-page section-reveal">
      <Link className="text-link" to="/work">
        Back to work
      </Link>
      <div className="detail-header">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </div>
      <img className="detail-image" src={project.image} alt={`${project.title} project`} />
      <div className="detail-grid">
        <div>
          <span className="meta">Year</span>
          <strong>{project.year}</strong>
        </div>
        <div>
          <span className="meta">Challenge</span>
          <p>{project.challenge}</p>
        </div>
        <div>
          <span className="meta">Outcome</span>
          <p>{project.outcome}</p>
        </div>
      </div>
    </article>
  );
}
