import React, { useRef, useState } from "react";

const BentoTilt = ({ children, className = " " }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    setTransformStyle(
      `rotateX(${(e.clientY / window.innerHeight) * 20}deg) rotateY(${
        (e.clientX / window.innerWidth) * -20
      }deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="relative z-10 flex flex-col justify-between p-5 pb-20 text-red-500">
        <div className="bento-title special-font">
          {title}
          {description && (
            <p className="mt-3 break-words text-xs md:text-base text-yellow-500 font-robert-regular">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section className="bg-black pb-10">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-2xl text-white">
            Into Very mysterious tantra world
          </p>

          <p className="max-w-md font-circular-web text-lg text-yellow-500">
            Immerse yourself in a rich tantric tradition where you will
            experience endless bliss, and your self will merge with the supreme
            consciousness.
          </p>
        </div>

        {/* First large card */}
        <BentoTilt className="border-hsl relative mb-7 min-h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                <b>tantra</b> <b>puja &</b> <b>rituals</b>
              </>
            }
            description="We provide complete solutions for all your's Tantra Puja and Rituals. Make a Schedule for Puja and Rituals with Our Experts."
          />
        </BentoTilt>

        {/* Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-min">
          <BentoTilt className="bento-title_1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  tantra-<b>teaching ,</b>
                  <b> initiation &</b> <b>ordination</b>
                </>
              }
              description="We teach Tantra, specially Sri Vidya and Kaul Marg to real knowledge seekers. We help in INITIATION and ORDINATION SACRAMENTS for deserving devotees."
            />
          </BentoTilt>

          <BentoTilt className="bento-title_1 md:col-span-1">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  <b>astrology</b> <b>services</b>
                </>
              }
              description={`Horoscope and Palm reading, Kerala Jyotish,
Ashta Mangala Prashnam, Deva Prashnam, Tamboola Prashnam.
We provide remedial solutions for Manglika Dosha, delayed marriage and progeny etc.`}
            />
          </BentoTilt>

          <BentoTilt className="bento-title_1 md:col-span-1">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  <b>gems,</b> <b>talisman &</b> <b>yantras</b>
                </>
              }
              description="We can provide consecrated Gems, Talisman and Rosary. For Sadhakas we can also arrange authentic and precise Meru/Kurma puja yantras, specially designed and consecrated by Sri Kaulbhaskar Guru Ji."
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Feature;

