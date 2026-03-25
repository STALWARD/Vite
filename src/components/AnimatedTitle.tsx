import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // ✅ Official hook for React
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, containerClass = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // ✅ replace useLayoutEffect with useGSAP
  useGSAP(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".animated-word");
    if (words.length === 0) return;

    gsap.set(words, {
      opacity: 0,
      x: 10,
      y: 50,
      rotationY: 10,
      rotationX: -10,
      transformOrigin: "0% 50%",
    });

    const titleAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "center 60%",
        toggleActions: "play none none reverse",
      },
    });

    titleAnimation.to(words, {
      opacity: 1,
      x: 0,
      y: 0,
      rotationY: 0,
      rotationX: 0,
      ease: "power2.out",
      stagger: 0.02,
      duration: 0.8,
      overwrite: "auto",
    });
  }, { scope: containerRef, dependencies: [title] }); // ✅ Added scope and deps

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3" style={{ overflow: "hidden" }}>
          {line.split(" ").map((word, i) => (
            <span
              key={`${index}-${i}`} // ✅ Better unique key
              className="animated-word"
              style={{ display: "inline-block", willChange: "transform, opacity" }}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
