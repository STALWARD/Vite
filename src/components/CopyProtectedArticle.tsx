"use client";

// src/components/CopyProtectedArticle.tsx
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// 1. Update the interface to include className
interface CopyProtectedArticleProps {
  content: string;
  className?: string; // The '?' makes it optional
}

// 2. Destructure className and give it a default value
export default function CopyProtectedArticle({ 
  content, 
  className = "" 
}: CopyProtectedArticleProps) {
  
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      const selection = document.getSelection()?.toString();
      if (selection) {
        e.clipboardData?.setData(
          "text/plain",
          `${selection}\n\nRead more at: ${window.location.href}`
        );
        e.preventDefault();
      }
    };
    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, []);

  return (
    /* 3. Apply the className to the article tag */
    <article className={`prose lg:prose-xl mx-auto px-6 ${className}`}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          strong: ({ children }) => (
            <strong className="block bg-white/10 border-l-4 border-orange-400 p-6 my-8 text-2xl leading-relaxed text-white font-serif italic backdrop-blur-sm rounded-r-lg">
              {children}
            </strong>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
