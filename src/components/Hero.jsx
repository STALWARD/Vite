import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentVideoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const bgVideoRef = useRef(null);

  const totalVideo = 4;
  const upcomingVideoIndex = (currentIndex % totalVideo) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const handleBgVideoLoad = () => setIsLoading(false);

  // Animate transition between videos
  useEffect(() => {
    if (hasClicked && nextVideoRef.current && currentVideoRef.current) {
      const tween1 = gsap.to(nextVideoRef.current, {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
        onStart: () => nextVideoRef.current.play(),
      });

      const tween2 = gsap.from(currentVideoRef.current, {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });

      return () => {
        tween1.kill();
        tween2.kill();
      };
    }
  }, [hasClicked, currentIndex]);

  // GSAP intro + ScrollTrigger
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    const introTween = gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();

    // ✅ Cleanup on unmount
    return () => {
      introTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getVideoSrc = (index) => `videos/hero-bg-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        {/* Mini preview video */}
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div
            onClick={handleMiniVideoClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={currentVideoRef}
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
            />
          </div>
        </div>

        {/* Next video (hidden until clicked) */}
        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="next-video"
          className="absolute-center invisible absolute z-20 size-64 object-cover"
        />

        {/* Background video */}
        <video
          ref={bgVideoRef}
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover"
          onLoadedData={handleBgVideoLoad}
        />

        {/* Headings + Content */}
        <h1 className="special-font hero-heading absolute bottom-5 z-40 bg-gradient-to-r from-green-400 via-red-500 to-indigo-500 bg-clip-text text-transparent">
          S<b>a</b>dh<b>n</b>a
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading bg-gradient-to-r from-red-500 via-green-400 to-pink-500 bg-clip-text text-transparent">
              t<b>an</b>t<b>ra</b>
            </h1>
            <p className="mb-5 max-w-72 font-robert-regular text-white">
              देहोऽहमिति या बुद्धिर्विद्या सा प्रकीर्तिता।<br />
              नाहं देहश्चिदात्मेति बुद्धिर्विद्येति भण्यते।।<br />
              अविद्या संसृतेर्हेतु विद्या तस्या निवृत्तिका।<br />
              तस्माद् यत्न: सदाकार्यो विद्याभ्यासे मुमुक्षुभि:।।<br />
              <br />
              We can help you on an adventure around the world of Tantra in just
              a simple way.
            </p>
            <Button
              id="kaulbhaskar-guru ji"
              title="Know KAULBHASKAR Guru Ji"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
              onClick={() =>
                window.open("https://www.kaulbhaskar.com/profile", "_blank")
              }
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 text-black">
        S<b>a</b>dhna
      </h1>
    </div>
  );
};

export default Hero;
