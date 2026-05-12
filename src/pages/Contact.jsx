import { useState } from "react";
import { brandMessages, profile } from "../data/siteData.js";
import { AvailabilityBadge, GlobalEngagementSection } from "../components/Sections.jsx";
import Icon from "../components/Icons.jsx";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Website inquiry from ${form.name || "Mapenzi's site"}`);
    const body = encodeURIComponent(
      [`Name: ${form.name}`, `Email: ${form.email}`, "", form.message].join("\n"),
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-page section-reveal">
      <div className="page-header">
        <p className="eyebrow">Contact</p>
        <p>
          {brandMessages[2]} Reach out if you are hiring, exploring consulting
          work, considering fractional leadership, or looking to collaborate
          across product and AI.
        </p>
      </div>
      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span><Icon name="user" /> Name</span>
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            <span><Icon name="mail" /> Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="full">
            <span><Icon name="message" /> Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Tell me what you are building, improving, or trying to understand."
              rows="7"
              required
            ></textarea>
          </label>
          <button className="button-link" type="submit">
            <Icon name="send" />
            Prepare email
          </button>
        </form>
        <aside className="contact-panel">
          <p className="eyebrow">Direct contact</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <p>{profile.narrative}</p>
          <div className="social-grid">
            {profile.socials
              .filter((social) => social.label === "LinkedIn" || social.label === "GitHub")
              .map((social) => (
                <a className="pill-link" href={social.href} key={social.label} target="_blank" rel="noreferrer">
                  <Icon name={social.label === "LinkedIn" ? "linkedin" : "github"} />
                  {social.label}
                </a>
              ))}
            <a className="pill-link" href={profile.bookingUrl} target="_blank" rel="noreferrer">
              <Icon name="calendar" />
              Book a discovery call
            </a>
          </div>
        </aside>
      </div>
      <section className="contact-global-card">
        <div>
          <p className="eyebrow">Remote-ready engagement</p>
          <h2>Available for global SaaS, FinTech, and product data teams.</h2>
          <p>
            Available for remote roles, consulting projects, fractional
            leadership, and product or AI collaboration with practical
            contracting and payment setup for US, EMEA, and global teams.
          </p>
        </div>
        <AvailabilityBadge />
      </section>
      <GlobalEngagementSection />
    </section>
  );
}
