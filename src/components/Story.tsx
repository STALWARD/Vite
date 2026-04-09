import gsap from "gsap";
import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

const Story: React.FC = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
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
    <div id="story" className="min-h-screen w-screen bg-black text-blue-50">
      <div className="flex flex-col items-center py-10 pb-24 w-full h-full">
        <div className="relative w-full h-full">
          {/* Image container */}
          <div className="relative w-full h-full">
            <img
              ref={frameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseLeave}
              onMouseEnter={handleMouseLeave}
              src="/img/satyendra-large.webp"
              alt="entrance"
              className="w-full h-full object-cover object-center"
            />

            {/* Overlapping text at top with spacing */}
            <AnimatedTitle
              title="kaulbhaskar guru ji a hidden master"
              containerClass="absolute top-5 left-0 w-full flex justify-center text-white text-3xl font-bold mix-blend-difference z-20 pointer-events-none"
            />
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
