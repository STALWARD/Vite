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
      const words = containerRef.current?.querySelectorAll(".animated-word");
      if (!words || words.length === 0) return;

      // ✅ Pre-set initial state
      gsap.set(words, {
        opacity: 0,
        x: 10,
        y: 50,
        rotationY: 10,
        rotationX: -10,
        transformOrigin: "0% 50%",
        willChange: "transform, opacity", // apply only during animation lifecycle
      });

      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",   // responsive percentage-based trigger
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
        force3D: true, // GPU acceleration
        onComplete: () => gsap.set(words, { willChange: "auto" }), // reset will-change
      });
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          style={{ overflow: "hidden" }} // contain animated words
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              style={{
                display: "inline-block",
                // backfaceVisibility optional: add only if flickering occurs
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
