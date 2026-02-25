// BlogPost.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { Buffer } from "buffer";
import SEO from "../components/SEO"; // ✅ Import reusable SEO component

window.Buffer = Buffer;

const posts = import.meta.glob("../posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export default function BlogPost() {
  const { slug } = useParams();
  const path = `../posts/${slug}.md`;
  const rawContent = posts[path];

  if (!rawContent) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-blue-600 underline mt-4 block">
          Back to Blog
        </Link>
      </div>
    );
  }

  const { data, content } = matter(rawContent);

  return (
    <article className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      {/* ✅ Dynamic SEO using reusable component with JSON-LD */}
      <SEO
  title={`${data.title} | Sri Kaulbhaskar Blog`}
  description={data.excerpt || `Read ${data.title} by ${data.authorName}`}
  canonical={`https://www.tantrasadhana.org/blog/${slug}`}
  keywords={data.keywords || "Tantra, Astrology, Spiritual Blog, Kaulbhaskar"}
  featuredImage={data.featuredImage}
  type="article"
  authorName={data.authorName}
  publishDate={data.date}
  breadcrumbs={[
    { name: "Home", url: "https://www.tantrasadhana.org" },
    { name: "Blog", url: "https://www.tantrasadhana.org/blog" },
    { name: data.title, url: `https://www.tantrasadhana.org/blog/${slug}` },
  ]}
/>


      <Link to="/blog" className="text-sm text-black hover:text-orange-600 mb-8 block">
        ← Back to Blog
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
          {data.title}
        </h1>
        
        <div className="flex items-center gap-4 mb-6">
          <img 
            src={data.authorAvatar} 
            alt={data.authorName} 
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <p className="font-semibold text-black">{data.authorName}</p>
            <p className="text-sm text-black">{data.date} • {data.authorBio}</p>
          </div>
        </div>

        {data.featuredImage && (
          <img 
            src={data.featuredImage} 
            alt={data.title} 
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        )}
      </header>

      <div className="prose max-w-none prose-orange text-xl md:text-2xl leading-relaxed">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            strong: ({ children }) => (
              <strong className="block bg-orange-50 border-l-4 border-orange-500 p-6 my-6 text-2xl leading-relaxed text-black font-serif shadow-sm">
                {children}
              </strong>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      <footer className="mt-16 pt-8 border-t text-center text-black italic">
        End of Post
      </footer>
    </article>
  );
}
