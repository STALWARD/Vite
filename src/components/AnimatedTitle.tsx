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
    const ctx = gsap.context(() => {
      // 1. "Set" initial state immediately to avoid layout reads during the animation start
      gsap.set(".animated-word", {
        opacity: 0,
        transform: "translate3d(10px, 51px, 0) rotateY(10deg) rotateX(-10deg)",
        transformOrigin: "left center",
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
          fastScrollEnd: true, // Prevents layout recalculations on rapid scrolling
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
        overwrite: "auto", // Prevents conflict if user scrolls up/down quickly
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
              style={{ 
                display: "inline-block", // Essential: Inline elements cannot be transformed efficiently
                willChange: "transform, opacity", // Promotes to GPU layer to avoid forced reflows
                backfaceVisibility: "hidden" 
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
