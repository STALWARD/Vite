import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [hasClicked, setHasClicked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedVideos, setLoadedVideos] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  const bgVideoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  const totalVideo = 4;
  const upcomingVideoIndex = (currentIndex % totalVideo) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Optimized Loading Logic: Refresh only after a slight delay for stability
  useEffect(() => {
    if (loadedVideos >= 1) {
      setIsLoading(false);
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loadedVideos]);

  // Video Transition Animation
  useGSAP(
    () => {
      if (hasClicked && nextVideoRef.current) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          // REMOVED: width/height animations (triggers reflow)
          // ADDED: use x/y/scale transforms for performance
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            nextVideoRef.current?.play().catch(() => {});
          },
          onComplete: () => {
            // Refresh layout once animation settles
            ScrollTrigger.refresh();
          }
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  // Main Intro + Scroll Animation
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
        invalidateOnRefresh: true, // Recalculates on resize/refresh
      },
    });
  }, []);

  const getVideoSrc = (index: number) => `videos/hero-bg-${index}.mp4`;

  return (
    <div className="relative h-screen w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-screen w-screen bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-screen w-screen overflow-hidden rounded-lg bg-blue-75"
        style={{ willChange: "clip-path, border-radius" }} // Hint to browser
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVideoClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              playsInline
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
            />
          </div>
        </div>

        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          playsInline
          id="next-video"
          className="absolute-center invisible absolute z-20 size-full object-cover" // Start at full size, scale handled by GSAP
        />

        {isClient && (
          <video
            ref={bgVideoRef}
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover"
            onLoadedData={handleVideoLoad}
          />
        )}

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading bg-linear-to-r from-red-500 via-green-400 to-pink-500 bg-clip-text text-transparent">
              K<b>a</b>u<b>l</b>
            </h1>
            <p className="mb-5 max-w-72 font-robert-regular text-white">
               {/* Your Sanskrit Text */}
               We can help you on an adventure around the world of Tantra in just a simple way.
            </p>
            <Button
              id="kaulbhaskar-guru ji"
              title="Visit my other WEBSITE"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 hover:!bg-white flex-center gap-1"
              onClick={() => window.open("https://tantrasadhana.org", "_blank")}
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        BH<b>as</b>k<b>a</b>r
      </h1>
    </div>
  );
};

export default Hero;
