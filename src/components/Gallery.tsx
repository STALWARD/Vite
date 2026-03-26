import { useRef, useState } from "react";
import type { ReactNode, MouseEvent, FC } from "react";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

const BentoTilt: FC<BentoTiltProps> = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState<string>("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const rotateX = (clientY / innerHeight) * 20;
    const rotateY = (clientX / innerWidth) * -20;
    setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => setTransformStyle("");

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: "transform 0.3s ease-out" }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title?: ReactNode;
  description?: string;
  index: number;
}

const BentoCard: FC<BentoCardProps> = ({ src, title, description, index }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // FIXED EXTRACTION: Simple and reliable for youtu.be and youtube.com
  const getYouTubeId = (url: string): string => {
    try {
      if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split(/[?#]/)[0];
      if (url.includes("watch?v=")) return url.split("watch?v=")[1].split(/[&?#]/)[0];
      return "";
    } catch (e) {
      return "";
    }
  };

  const videoId = getYouTubeId(src);
  const isYouTube = videoId !== "";
  const isImage = /\.(jpeg|jpg|png|gif|webp)$/i.test(src);
  const loadingStrategy = index < 2 ? "eager" : "lazy";

  return (
    <div className="relative w-full">
      {isYouTube ? (
        isPlaying ? (
          <iframe
            src={`https://www.youtube.com{videoId}?autoplay=1`}
            title="YouTube video"
            className="w-full h-auto aspect-video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <img
            src={`https://i.ytimg.com{videoId}/hqdefault.webp`}
            alt="Thumbnail"
            className="w-full h-auto object-contain bg-black"
            loading={loadingStrategy}
          />
        )
      ) : isImage ? (
        <img
          src={src}
          alt="Gallery"
          className="w-full h-auto object-contain bg-black"
          loading={loadingStrategy}
        />
      ) : (
        <video src={src} loop autoPlay playsInline muted className="w-full h-auto object-contain bg-black" />
      )}

      <div className="relative z-10 flex flex-col justify-between p-5 text-red-500">
        <div className="bento-title special-font">
          {title}
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base text-yellow-400">{description}</p>
          )}
        </div>
        {isYouTube && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm"
          >
            {isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>
        )}
      </div>
    </div>
  );
};

const Gallery: FC = () => {
  const mediaItems = [
    "https://youtu.be",
    "https://youtu.be",
    "https://youtu.be",
    "https://youtu.be",
    "/img/Vindhyachal1.webp",
    "/img/Vindhyachal2.webp",
    "/img/Vindhyachal3.webp",
    "/img/img-2.webp",
  ];

  return (
    <section className="bg-black">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="special-font hero-heading bg-linear-to-r from-red-500 via-green-400 to-pink-500 bg-clip-text text-transparent text-lg">
            gallery
          </p>
        </div>
        <div className="grid h-auto grid-cols-1 md:grid-cols-2 gap-5">
          {mediaItems.map((src, i) => (
            <BentoTilt key={i} className="relative mb-7 w-full overflow-hidden rounded-md border border-white/10">
              <BentoCard src={src} index={i} />
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
