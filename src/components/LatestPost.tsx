import React from "react";
import { Link } from "react-router";
import matter from "gray-matter";
import { Buffer } from "buffer";

// Polyfill for gray-matter in Vite/Browser environments
if (typeof window !== "undefined") {
  (window as any).Buffer = Buffer;
}

// 1. Define the Post structure based on your Markdown frontmatter
interface Post {
  slug: string;
  title: string;
  date: string;
  featuredImage: string;
  excerpt: string;
  authorName: string;
  authorAvatar: string;
  [key: string]: any; // Allows for extra metadata fields
}

// 2. Type the glob import (Record of paths to raw string content)
const posts = import.meta.glob("../posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

// 3. Process entries with proper types
const postEntries: Post[] = Object.entries(posts).map(([path, content]) => {
  const slug = path.split("/").pop()?.replace(".md", "") || "";
  const { data } = matter(content);
  
  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    featuredImage: data.featuredImage || "",
    excerpt: data.excerpt || "",
    authorName: data.authorName || "Anonymous",
    authorAvatar: data.authorAvatar || "",
    ...data,
  } as Post;
});

// 4. Sort with explicit date parsing for TS
const sortedPosts = postEntries.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const latestPosts = sortedPosts.slice(0, 3);

const LatestPost: React.FC = (): React.JSX.Element => {
  return (
    <div className="px-6 py-10 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <h1 className="text-black text-center text-4xl font-bold mb-10">Latest Posts</h1>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <li
            key={post.slug}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <Link to={`/${post.slug}`}>
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-orange-600 font-semibold mb-2">
                  {post.date}
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <img
                    src={post.authorAvatar}
                    className="w-8 h-8 rounded-full"
                    alt={post.authorName}
                  />
                  <span className="text-xs text-gray-500 font-medium">
                    By {post.authorName}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestPost;
