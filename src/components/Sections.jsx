import { useId, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icons.jsx";
import {
  brandMessages,
  dataExperience,
  globalEngagement,
  posts,
  process,
  profile,
  projects,
  resumeFocus,
  services,
  skills,
  specializations,
  stats,
  testimonials,
} from "../data/siteData.js";

const serviceIcons = ["sparkles", "user", "chart", "flask", "briefcase", "brain"];
const specializationIcons = ["chart", "creditCard"];

export function PageHeader({ eyebrow, title, text }) {
  return (
    <header className="page-header section-reveal">
      <p className="eyebrow">{eyebrow}</p>
      {title ? <h2>{title}</h2> : null}
      {text ? <p>{text}</p> : null}
    </header>
  );
}

export function Hero() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        text={profile.intro}
      />
      <section className="intro-grid section-reveal">
        <article className="intro-card wide">
          <h3>What I do</h3>
          <p>{profile.narrative}</p>
          <p>{brandMessages[0]}</p>
        </article>
        <article className="intro-card">
          <h3>Positioning</h3>
          <p>{profile.domain}</p>
        </article>
      </section>
    </>
  );
}

export function QuickLinks() {
  const links = [
    ["Work", "AI, analytics, and customer intelligence projects for product decisions.", "/work"],
    ["Resume", "How I approach product data, AI systems, customer intelligence, and decision-making.", "/resume"],
    ["Contact", "Start a conversation about hiring, consulting, or fractional leadership.", "/contact"],
  ];

  return (
    <section className="quick-links section-reveal">
      {links.map(([title, text, to]) => (
        <Link className="quick-card" to={to} key={title}>
          <span>
            {title}
            <Icon name="arrowUpRight" />
          </span>
          <p>{text}</p>
        </Link>
      ))}
    </section>
  );
}

export function FeaturedWork({ limit = 3 }) {
  return (
    <section className="section-block section-reveal">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Portfolio</p>
          <h2>Selected work</h2>
        </div>
        <Link className="text-link" to="/work">
          View all
          <Icon name="arrowRight" />
        </Link>
      </div>
      <div className="project-grid">
        {projects.slice(0, limit).map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/work/${project.slug}`} className="project-image">
        <img src={project.image} alt={`${project.title} project preview`} />
      </Link>
      <div>
        <p className="meta">{project.category}</p>
        <h3>
          <Link to={`/work/${project.slug}`}>{project.title}</Link>
        </h3>
        <p>{project.summary}</p>
      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="section-block section-reveal">
      <div className="section-heading">
        <div>
          <p className="eyebrow">What I'm doing</p>
          <h2>Ways I help</h2>
        </div>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article key={service}>
            <span className="card-accent"></span>
            <Icon name={serviceIcons[index % serviceIcons.length]} className="card-icon" />
            <h3>{service}</h3>
            <p>
              Practical support for product-driven companies using AI, analytics,
              and customer intelligence to make better decisions.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function SpecializationsSection() {
  return (
    <section className="section-block section-reveal">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Specialisations</p>
          <h2>Industry specialisation</h2>
          <p>
            I work with product-driven companies broadly, with deeper expert
            focus in SaaS and FinTech.
          </p>
        </div>
      </div>
      <div className="specialization-grid industry-grid">
        {specializations.map((item, index) => (
          <article className="specialization-card" key={item.title}>
            <span className="card-accent"></span>
            <Icon name={specializationIcons[index % specializationIcons.length]} className="card-icon" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ResumeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = resumeFocus[activeIndex];

  return (
    <section className="section-block section-reveal">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Resume</p>
          <h2>Strategic focus</h2>
        </div>
      </div>
      <div className="resume-tabs">
        <div className="resume-tab-list" role="tablist" aria-label="Strategic focus areas">
          {resumeFocus.map((item, index) => (
            <button
              aria-controls={`resume-panel-${index}`}
              aria-selected={activeIndex === index}
              className={`resume-tab ${activeIndex === index ? "is-active" : ""}`}
              id={`resume-tab-${index}`}
              key={item.title}
              onClick={() => setActiveIndex(index)}
              role="tab"
              type="button"
            >
              {item.title}
            </button>
          ))}
        </div>
        <article
          aria-labelledby={`resume-tab-${activeIndex}`}
          className="resume-tab-panel"
          id={`resume-panel-${activeIndex}`}
          role="tabpanel"
        >
          <div>
            <span className="resume-number">{`0${activeIndex + 1}`}</span>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.text}</p>
          </div>
          <div className="resume-panel-detail">
            {activeItem.points.map((point, index) => (
              <div className="resume-point" key={point.title}>
                <Icon name={pointIcon(activeIndex, index)} />
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export function DataExperienceSection() {
  return (
    <section className="section-block experience-section section-reveal">
      <div className="experience-heading">
        <p className="eyebrow">My experiences</p>
        <h2>Relevant data experience that defines my approach.</h2>
      </div>
      <div className="experience-timeline">
        {dataExperience.map((item, index) => (
          <article
            className={`experience-card ${index % 2 === 0 ? "is-right" : "is-left"}`}
            key={item.title}
          >
            <span className="experience-date">{item.period}</span>
            <h3>{item.title}</h3>
            <p className="experience-context">{item.context}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>
                  <Icon name="arrowRight" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="cv-action">
        <a className="button-link cv-button" href={profile.cvUrl} target="_blank" rel="noreferrer">
        <Icon name="file" />
          Download CV
        </a>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const marqueeTools = [...skills, ...skills];

  return (
    <section className="section-block tool-stack-section section-reveal">
      <div className="tool-stack-heading">
        <p className="eyebrow">Data Science, Analytics & AI Product Stack</p>
      </div>
      <div className="tool-marquee" aria-label="Tech stack tools. Hover or focus to pause.">
        <div className="tool-marquee-track">
          {marqueeTools.map((tool, index) => (
            <span className="tool-pill" key={`${tool}-${index}`} tabIndex="0">
              <Icon name={toolIcon(tool)} />
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section-block process-graphic-section section-reveal">
      <div className="experience-heading">
        <p className="eyebrow">Process</p>
        <h2>How product questions become decision systems</h2>
      </div>
      <div className="process-graphic" aria-label="Decision system process">
        {process.map((step, index) => (
          <article key={step.title} className={`process-node process-node-${index + 1}`}>
            <div className="process-icon-wrap">
              <Icon name={indexIcon(step.number)} />
            </div>
            <span>{`(${step.number})`}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <ul className="process-points">
              {step.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="stats section-reveal">
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

export function Testimonial() {
  const testimonial = testimonials[0];

  return (
    <section className="testimonial section-reveal">
      <p>"{brandMessages[2]}"</p>
      <strong>{testimonial.name}</strong>
      <span>{testimonial.quote} - {testimonial.role}</span>
    </section>
  );
}

export function BlogPreview({ limit = 2 }) {
  return (
    <section className="section-block section-reveal">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Blog</p>
          <h2>Latest thinking</h2>
        </div>
        <Link className="text-link" to="/blog">
          View all
          <Icon name="arrowRight" />
        </Link>
      </div>
      <div className="blog-grid">
        {posts.slice(0, limit).map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
    </section>
  );
}

export function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-image">
        <img src={post.image} alt={`${post.title} article preview`} />
      </Link>
      <div>
        <p className="meta">
          {post.date} / {post.category}
        </p>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}

export function ContactCta() {
  return (
    <section className="contact-cta section-reveal">
      <div className="contact-cta-copy">
        <p className="eyebrow">{profile.availability}</p>
        <h2>Let's talk about the product decision you need to make.</h2>
        <div className="contact-actions">
          <Link className="button-link light" to="/contact">
            <Icon name="message" />
            Get in touch
          </Link>
          <a className="button-link light" href={profile.bookingUrl} target="_blank" rel="noreferrer">
            <Icon name="calendar" />
            Book a discovery call
          </a>
        </div>
      </div>
      <AvailabilityBadge />
      <GlobalEngagementSection compact />
    </section>
  );
}

export function AvailabilityBadge() {
  const pathId = `availability-${useId().replace(/:/g, "")}`;

  return (
    <div className="availability-badge" aria-label="Independent contractor available remote globally">
      <svg className="badge-ring" viewBox="0 0 160 160" aria-hidden="true">
        <defs>
          <path
            id={pathId}
            d="M80 80 m -64 0 a 64 64 0 1 1 128 0 a 64 64 0 1 1 -128 0"
          />
        </defs>
        <text>
          <textPath href={`#${pathId}`} startOffset="0%">
            INDEPENDENT CONTRACTOR . AVAILABLE REMOTE .
          </textPath>
        </text>
      </svg>
      <a className="badge-mail-link" href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}>
        <Icon name="mail" />
      </a>
    </div>
  );
}

export function GlobalEngagementSection({ compact = false }) {
  return (
    <section className={`global-engagement ${compact ? "compact" : ""}`}>
      <p className="eyebrow">Global Engagement Infrastructure</p>
      <div className="engagement-grid">
        {globalEngagement.map((item) => (
          <article key={item}>
            <Icon name="briefcase" />
            <p>
              <strong>{item.split(":")[0]}:</strong>
              {item.slice(item.indexOf(":") + 1)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function indexIcon(number) {
  const icons = {
    "01": "message",
    "02": "user",
    "03": "brain",
    "04": "arrowRight",
  };

  return icons[number] || "sparkles";
}

function toolIcon(tool) {
  const lower = tool.toLowerCase();

  if (lower.includes("python") || lower.includes("openai") || lower.includes("lang") || lower.includes("rag")) return "brain";
  if (lower.includes("sql") || lower.includes("oracle") || lower.includes("postgres") || lower.includes("duckdb") || lower.includes("dbt")) return "briefcase";
  if (lower.includes("bigquery") || lower.includes("looker") || lower.includes("power") || lower.includes("mixpanel")) return "chart";
  if (lower.includes("docker") || lower.includes("github") || lower.includes("cloud") || lower.includes("platform") || lower.includes("infrastructure")) return "github";
  if (lower.includes("fastapi") || lower.includes("mlflow") || lower.includes("streamlit") || lower.includes("next") || lower.includes("tailwind")) return "sparkles";

  return "sparkles";
}

function pointIcon(tabIndex, pointIndex) {
  const icons = [
    ["chart", "brain", "user"],
    ["sparkles", "creditCard", "briefcase"],
    ["file", "flask", "arrowRight"],
  ];

  return icons[tabIndex]?.[pointIndex] || "sparkles";
}
