import { BlogCard, PageHeader } from "../components/Sections.jsx";
import { posts } from "../data/siteData.js";

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Through My Data Lens™"
        text="Writing inspired by product strategy, causal analysis, customer behavior, responsible AI, and practical analytics adoption."
      />
      <div className="blog-grid section-reveal">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </div>
    </>
  );
}
