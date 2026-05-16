import { Link, useParams } from "react-router-dom";
import { posts } from "../data/siteData.js";
import NotFound from "./NotFound.jsx";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((item) => item.slug === slug || item.aliases?.includes(slug));

  if (!post) return <NotFound />;

  return (
    <article className="detail-page article-page section-reveal">
      <Link className="text-link" to="/blog">
        Back to blog
      </Link>
      <div className="detail-header">
        <p className="eyebrow">
          {post.date} / {post.category}
        </p>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </div>
      <img className="detail-image" src={post.image} alt={`${post.title} cover`} />
      {post.highlights ? (
        <div className="article-highlights" aria-label="Article highlights">
          {post.highlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      ) : null}
      <div className="article-body">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
