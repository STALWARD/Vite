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

interface BentoCardProps {
  src: string;
  title?: ReactNode;
}

const BentoCard: FC<BentoCardProps> = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  const isImage = /\.(jpeg|jpg|png|gif|webp)$/i.test(src);

  return (
    <div className="relative size-full overflow-hidden">
      {isYouTube ? (
        isPlaying ? (
          <iframe
            src={`https://youtube.com{src.includes("watch?v=") ? src.split("watch?v=")[1].split("&")[0] : src.split("youtu.be/")[1]}?autoplay=1&rel=0`}
            title="Video Player"
            className="absolute inset-0 size-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="relative size-full cursor-pointer group" onClick={() => setIsPlaying(true)}>
            <img 
              src={src.includes("KJn2Leu8yVo") ? "/img/thumb1.webp" : src.includes("WhknjROROXM") ? "/img/thumb2.webp" : src.includes("ht_cYcnxlSQ") ? "/img/thumb3.webp" : src.includes("XJPMQzTKq0g") ? "/img/thumb4.webp" : "/img/default-thumb.webp"} 
              alt="Thumbnail" 
              className="absolute inset-0 size-full object-cover transition-transform group-hover:scale-110" 
            />
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
      </div>
    </div>
  );
};

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
        <div className="mb-20 px-5">
           <p className="special-font hero-heading bg-gradient-to-r from-red-500 via-green-400 to-pink-500 bg-clip-text text-transparent text-5xl font-black uppercase">
            g<b>a</b>ll<b>er</b>y
          </p>
        </div>
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
