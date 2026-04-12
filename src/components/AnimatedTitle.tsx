import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import useGSAP

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, containerClass = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const words = container.querySelectorAll(".animated-word");
      if (!words.length) return;

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          end: "center 60%",
          toggleActions: "play none none reverse",
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
        // PERFORMANCE BOOSTS:
        force3D: true, // Uses GPU layer
        lazy: true,    // Batches DOM writes to avoid reflow
      });
    },
    { dependencies: [title], scope: containerRef } // Scoping prevents GSAP from searching the whole DOM
  );

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
              style={{ willChange: "transform, opacity" }} // Hint to the browser
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
