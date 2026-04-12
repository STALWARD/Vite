// src/components/LatestPost.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

interface Post {
  slug: string;
  title: string;
  date: string;
  featuredImage: string;
  excerpt: string;
  authorName: string;
  authorAvatar: string;
}

const LatestPost: React.FC = () => {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      // Dynamically import heavy libs only when component mounts
      const matter = (await import("gray-matter")).default;
      const { Buffer } = await import("buffer");
      if (typeof window !== "undefined") (window as any).Buffer = Buffer;

      // Import markdown files ASYNCHRONOUSLY (eager: false)
      const modules = import.meta.glob("../posts/*.md", {
        query: "?raw",
        import: "default",
      });

      const postPromises = Object.entries(modules).map(async ([path, resolver]) => {
        const content = (await resolver()) as string;
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
        } as Post;
      });

      const allPosts = await Promise.all(postPromises);
      const sorted = allPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setLatestPosts(sorted.slice(0, 3));
    };

    loadPosts();
  }, []);

  if (latestPosts.length === 0) return <div className="h-40" />; // Prevent layout shift

  return (
    <div className="px-6 py-10 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
       {/* ... keep your existing JSX return here ... */}
    </div>
  );
};

export default LatestPost;
