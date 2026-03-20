import React from "react";
// 1. Fix: Use 'import type' for Settings to satisfy verbatimModuleSyntax
import SliderComponent from "react-slick";
import type { Settings } from "react-slick";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 2. Fix: Handle the Vite/TS "Element type" issue
// @ts-ignore
const Slider = (SliderComponent.default || SliderComponent) as any;

// 1. Define the interface for your image objects
interface Mentor {
  src: string;
  title: string;
  description: string;
}

const Mentor: React.FC = () => {
  // 2. Apply the Settings type to your config
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  // 3. Type the array
  const images: Mentor[] = [
    { src: "/mentor/Aradhya.webp", title: "VAJRA YOGINI", description: "Vajra Siddha." },
    { src: "/mentor/khunda.webp", title: "G. VYAS", description: "Bala Siddha Upasaka." },
    { src: "/mentor/S.Bakshi.webp", title: "S. BAKSHI", description: "Astro Guru." },
    { src: "/mentor/Siddharth.webp", title: "SIDDHARTH MAHARAJ", description: "Yagyan Expert." },
    { src: "/mentor/Subhas.webp", title: "SUBHAS KAUSHIK", description: "Vastu Expert & Palm Reader." },
    { src: "/mentor/YATAN.webp", title: "YATAN SHARMA", description: "NADI Astrologer." },
    { src: "/mentor/Kiran.webp", title: "KIRAN SHARMA", description: "Palmistry Researcher." },
  ];

  return (
    <div className='text-center my-10'>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="special-font hero-heading bg-linear-to-r from-yellow-500 via-red-600 to-indigo-500 bg-clip-text text-transparent text-lg uppercase tracking-widest">
          our <b>experts</b>
        </h2>
        <div className="px-10 py-10 bg-black mt-6">
          <Slider {...settings}>
            {images.map((item, i) => (
              <div key={i} className="text-white px-2">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="mx-auto object-cover rounded-lg" 
                />
                <h3 className="mt-4 text-lg font-bold uppercase">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
        <hr className="border-gray-800 mt-10" />
      </div>
    </div>
  );
};

export default Mentor;
