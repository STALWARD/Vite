import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, containerClass = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // GSAP Context is great, but we wrap the logic in a small delay or 
    // ensure the browser has finished the initial layout pass.
    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll(".animated-word");
      if (!words || words.length === 0) return;

      // PRE-SET: Use 'will-change' only during the animation lifecycle
      // to avoid excessive memory usage on mobile.
      gsap.set(words, {
        opacity: 0,
        y: 50, // Simplified transforms are faster for the compositor
        rotateY: 10,
        rotateX: -10,
        transformOrigin: "0% 50%",
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Using percentage is more stable than pixel offsets
          end: "center 60%",
          toggleActions: "play none none reverse",
          // 'proxy' helps avoid layout thrashing by grouping updates
          fastScrollEnd: true, 
        },
      });

      titleAnimation.to(words, {
        opacity: 1,
        y: 0,
        rotateY: 0,
        rotateX: 0,
        ease: "power2.out",
        stagger: 0.02,
        duration: 0.8,
        overwrite: "auto",
        // Force hardware acceleration for the duration of the tween
        force3D: true, 
      });
    }, containerRef);

    return () => ctx.revert();
  }, [title]); // Add title to deps to re-run if the text content changes

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          style={{ overflow: 'hidden' }} // Contain the "jumping" words during layout
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              style={{ 
                display: "inline-block",
                // 'backface-visibility' can actually trigger reflows in some Webkit versions
                // only use it if you see flickering.
              }}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
