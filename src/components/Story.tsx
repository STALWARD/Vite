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

            {/* Overlapping text */}
            <AnimatedTitle
              title="kaulbhaskar guru ji a hidden master"
              containerClass="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold mix-blend-difference z-20 pointer-events-none"
            />

            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Description section */}
        <div className="mt-10 flex w-full justify-center md:justify-end md:px-20">
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <p className="font-circular-web text-lg text-violet-50 text-center md:text-start">
              Guru Ji, popularly known as KAULBHASKAR, is from the lineage of Sri Matsyendra Nath (also known as Machendra Nath) ji, a legend of Naths and one of 84 Maha Siddhas.
            </p>
            <p className="mt-5 font-circular-web text-lg text-violet-50 text-center md:text-start">
              Guru Ji, a Great KAUL, is a SRI VIDYA UPASAKA of DAKSHINAMURTI SAMPRADAYA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
