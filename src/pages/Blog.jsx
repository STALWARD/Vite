// Blog.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import matter from "gray-matter";
import { Buffer } from "buffer";
import SEO from "../components/SEO"; // ✅ Import reusable SEO component

window.Buffer = Buffer; 

const posts = import.meta.glob("../posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const postEntries = Object.entries(posts).map(([path, content]) => {
  const slug = path.split("/").pop().replace(".md", "");
  const { data } = matter(content); 
  return { slug, ...data };
});

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postEntries.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(postEntries.length / postsPerPage);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      {/* ✅ Page-specific SEO using reusable component */}
      <SEO
        title="Spiritual Blog | Wisdom of Sri Kaulbhaskar Guru Ji"
        description="Explore spiritual insights, Tantra, and Astrology through the writings of Sri Kaulbhaskar Guru Ji. Deepen your understanding of ancient teachings."
        canonical="https://www.tantrasadhana.org/blog"
        keywords="Tantra blog, Astrology articles, Kaulbhaskar Guru Ji, spiritual wisdom"
        breadcrumbs={[
          { name: "Home", url: "https://www.tantrasadhana.org" },
          { name: "Blog", url: "https://www.tantrasadhana.org/blog" },
        ]}
      />

      <h1 className="special-font hero-subheading text-center mb-10">BLOG</h1>
      <p className="text-black text-center text-xl font-semibold mb-5">
        All the posts here are writings of Sri Kaulbhaskar Guru Ji
      </p>
      
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <li
            key={post.slug}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white hover:animate-bounceCard"
          >
            <Link to={`/blog/${post.slug}`}>
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="w-full h-auto object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-orange-600 font-semibold mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2">
                   <img src={post.authorAvatar} className="w-8 h-8 rounded-full" alt={post.authorName} />
                   <span className="text-xs text-gray-500 font-medium">By {post.authorName}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          disabled={currentPage === 1}
          onClick={() => {
            setCurrentPage((prev) => prev - 1);
            window.scrollTo(0, 0); // Good for UX/SEO
          }}
          className="px-5 py-2 bg-white border rounded-full hover:bg-gray-50 disabled:opacity-30 transition"
        >
          ← Previous
        </button>
        <span className="font-medium text-white"> {currentPage} / {totalPages} </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => {
            setCurrentPage((prev) => prev + 1);
            window.scrollTo(0, 0); // Good for UX/SEO
          }}
          className="px-5 py-2 bg-white border rounded-full hover:bg-gray-50 disabled:opacity-30 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
