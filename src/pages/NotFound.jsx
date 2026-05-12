import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found section-reveal">
      <p className="eyebrow">404</p>
      <h1>This page stepped out for a moment.</h1>
      <p>The link may be outdated, or the page may not exist yet.</p>
      <Link className="button-link" to="/">
        Back home
      </Link>
    </section>
  );
}
