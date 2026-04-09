import { useRef, useState } from "react";
import type { ReactNode, MouseEvent, FC } from "react";

// --- BentoTilt Component ---
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
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (clientX - left) / width;
    const relativeY = (clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;
    setTransformStyle(`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`);
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

// --- BentoCard Component ---
interface BentoCardProps {
  src: string;
  title?: ReactNode;
  description?: string;
}

const BentoCard: FC<BentoCardProps> = ({ src, title, description }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  const isImage = /\.(jpeg|jpg|png|gif|webp)$/i.test(src);

  // FIXED: Using if/else logic to avoid duplicate key errors (TS1117)
  const getThumbnailPath = (url: string): string => {
    if (url.includes("KJn2Leu8yVo")) return "/img/thumb1.webp";
    if (url.includes("WhknjROROXM")) return "/img/thumb2.webp";
    if (url.includes("ht_cYcnxlSQ")) return "/img/thumb3.webp";
    if (url.includes("XJPMQzTKq0g")) return "/img/thumb4.webp";
    return "/img/default-thumb.webp";
  };

  // FIXED: Simplified extraction to avoid unused variable errors (TS6133)
  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = url.includes("watch?v=") 
      ? url.split("watch?v=")[1].split("&")[0] 
      : url.split("youtu.be/")[1];
    return `https://youtube.com{videoId}?autoplay=1&rel=0`;
  };

  return (
    <div className="relative size-full overflow-hidden">
      {isYouTube ? (
        isPlaying ? (
          <iframe
            src={getYouTubeEmbedUrl(src)}
            title="Video Player"
            className="absolute inset-0 size-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative size-full cursor-pointer group" onClick={() => setIsPlaying(true)}>
            <img src={getThumbnailPath(src)} alt="Thumbnail" className="absolute inset-0 size-full object-cover transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="size-16 rounded-full bg-red-600 flex items-center justify-center shadow-2xl">
                <div className="ml-1 border-y-[10px] border-y-transparent border-l-[15px] border-l-white" />
              </div>
            </div>
          </div>
        )
      ) : isImage ? (
        <img src={src} alt="Gallery" className="absolute inset-0 size-full object-cover" />
      ) : (
        <video src={src} loop autoPlay muted playsInline className="absolute inset-0 size-full object-cover" />
      )}

      <div className="relative z-10 flex size-full flex-col justify-between p-5 pointer-events-none">
        <h1 className="bento-title special-font text-white uppercase text-2xl">{title}</h1>
        {description && <p className="mt-3 max-w-64 text-xs text-gray-200">{description}</p>}
      </div>
    </div>
  );
};

// --- Gallery Component ---
const Gallery: FC = () => {
  const mediaItems = [
    { src: "https://youtu.be", title: <>Vid<b>e</b>o 1</> },
    { src: "https://youtu.be", title: <>Vid<b>e</b>o 2</> },
    { src: "/img/Vindhyachal1.webp", title: <>Vi<b>n</b>dhya 1</> },
    { src: "/img/Vindhyachal2.webp", title: <>Vi<b>n</b>dhya 2</> },
    { src: "https://youtu.be", title: <>Vid<b>e</b>o 3</> },
    { src: "https://youtu.be", title: <>Vid<b>e</b>o 4</> },
    { src: "/img/Vindhyachal3.webp", title: <>Vi<b>n</b>dhya 3</> },
    { src: "/img/img-2.webp", title: <>Im<b>a</b>ge 2</> },
  ];

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {mediaItems.map((item, i) => (
            <BentoTilt key={i} className={`relative h-[400px] w-full overflow-hidden rounded-xl border border-white/10 ${i === 0 || i === 3 ? "md:col-span-2" : ""}`}>
              <BentoCard src={item.src} title={item.title} />
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
