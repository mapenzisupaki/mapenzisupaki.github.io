import { Link, NavLink, Outlet } from "react-router-dom";
import { profile, specialties } from "../data/siteData.js";
import Icon from "./Icons.jsx";

const navItems = [
  { label: "Home", to: "/", icon: "user" },
  { label: "Resume", to: "/resume", icon: "file" },
  { label: "Work", to: "/work", icon: "briefcase" },
  { label: "Blog", to: "/blog", icon: "pen" },
  { label: "Contact", to: "/contact", icon: "message" },
];

const socialIcons = {
  LinkedIn: "linkedin",
  GitHub: "github",
  Medium: "medium",
};

export default function Layout() {
  return (
    <div className="vcard-shell">
      <aside className="profile-card">
        <div className="avatar">
          <img src={profile.avatar} alt={`${profile.name} profile`} />
        </div>
        <div className="profile-title">
          <h1>{profile.name}</h1>
          <p>{profile.role}</p>
        </div>
        <div className="specialty-pills">
          {specialties.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="profile-details">
          <a href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            <span>
              <small>Email</small>
              {profile.email}
            </span>
          </a>
          <div>
            <Icon name="mapPin" />
            <span>
              <small>Location</small>
              {profile.location}
            </span>
          </div>
          <div>
            <Icon name="calendar" />
            <Link className="availability-pill" to="/contact" aria-label="Available for work. Open contact page.">
              <span aria-hidden="true"></span>
              Available for work
            </Link>
          </div>
        </div>
        <div className="profile-socials">
          {profile.socials.map((social) => (
            <a className="pill-link" href={social.href} key={social.label} target="_blank" rel="noreferrer">
              <Icon name={socialIcons[social.label]} />
              {social.label}
            </a>
          ))}
          <a className="pill-link" href={profile.bookingUrl} target="_blank" rel="noreferrer">
            <Icon name="calendar" />
            Discovery call
          </a>
        </div>
      </aside>

      <section className="content-card">
        <nav className="tab-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              <Icon name={item.icon} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <main className="content-panel">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
