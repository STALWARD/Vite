import gsap from "gsap";
import { useRef } from "react";
import type { MouseEvent } from "react";
import AnimatedTitle from "./AnimatedTitle";

const Story: React.FC = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <div className="relative size-full">
          {/* Image container */}
          <div className="story-img-container relative">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/satyendra-large.webp"
                  alt="entrance.webp"
                  className="size-full object-cover object-center"
                />
              </div>
            </div>

            {/* Overlapping text at top with spacing */}
            <AnimatedTitle
              title="kaulbhaskar guru ji, a hidden master"
              containerClass="absolute top-5 left-0 w-full flex items-start justify-center text-white text-3xl font-bold mix-blend-d
