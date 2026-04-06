import React, { useState, useEffect, type FC } from "react";
import SliderComponent from "react-slick";
import type { Settings } from "react-slick";
import { FaStar } from "react-icons/fa";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Robust import for Vite production/Vercel to prevent Error #130
const Slider = (SliderComponent as any).default || SliderComponent;

interface TestimonialData {
  name: string;
  profession: string;
  comment: string;
}

const TestimonialCard: FC<TestimonialData> = ({ name, profession, comment }) => {
  return (
    <div className="bg-white m-4 p-5 min-h-[320px] flex flex-col justify-between rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-base font-normal text-black my-4 leading-relaxed italic">"{comment}"</h2>
      <div>
        <hr className="border-gray-200" />
        <div className="flex justify-between items-center mt-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{name}</h3>
            <h4 className="text-sm font-normal text-gray-600">{profession}</h4>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i === 4 ? "text-amber-500" : "text-orange-300"} size={16} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonialData: TestimonialData[] = [
  { name: "J. Kartikeyan", profession: "Entrepreneur", comment: "I am a huge fan of GURU Ji. I have found the whole team to be incredibly intuitive overall." },
  { name: "N. Ramaswami", profession: "MD, Tech Infra", comment: "This website has been pivotal for helping me on tantra rituals. I would definitely recommend." },
  { name: "C. Mathew", profession: "Bureaucrat", comment: "I absolutely love the services provided by KAULBHASKAR Guru Ji. It really helped streamline my workflows." },
  { name: "Maheshwer Kumar", profession: "Lawyer", comment: "I am utterly grateful that KAULBHASKAR Ji imparts the high teaching of tantra. My life has been changed." },
  { name: "Dr. Rupinder Singh", profession: "Doctor", comment: "I have always wanted to learn authentic SRI VIDYA. My desire finally found its fulfillment in KAULBHASKAR GURU Ji." },
];

const Testimonial: FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Signal we are on the client
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesToShow(3);
      else if (width >= 768) setSlidesToShow(2);
      else setSlidesToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
  };

  // Prevent rendering until the client-side window is ready
  if (!isMounted) return null;

  return (
    <div className="bg-linear-to-r from-red-500 via-green-400 to-pink-500 py-20 overflow-hidden" id="testimonial">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-white mb-10">Testimonials</h2>
        <div className="w-full min-w-0">
          <Slider {...settings} key={slidesToShow}>
            {testimonialData.map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
