import type { FC } from "react";
// 1. Import base object and handle the Vite/TS "Element type" issue
import SliderComponent from "react-slick";
import type { Settings } from "react-slick";
import { FaStar } from "react-icons/fa";

// Required Slick Carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 2. Extract the actual component correctly
// @ts-ignore
const Slider = (SliderComponent.default || SliderComponent) as any;

interface TestimonialData {
  name: string;
  profession: string;
  comment: string;
}

// Reusable Card Component
const TestimonialCard: FC<TestimonialData> = ({ name, profession, comment }) => {
  return (
    <div className="bg-white m-4 p-5 my-10 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-base font-normal text-black my-4">{comment}</h2>
      <hr style={{ borderColor: "#D7D5D5" }} />
      <div className="flex justify-between items-center mt-4">
        <div>
          <h3 className="text-lg font-medium text-slate-900">{name}</h3>
          <h4 className="text-sm font-normal text-black">{profession}</h4>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i === 4 ? "text-amber-500" : "text-orange-300"} 
              size={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const testimonialData: TestimonialData[] = [
  {
    name: "J. Kartikeyan",
    profession: "Entrepreneur",
    comment: "I am a huge fan of GURU Ji. I have found the whole team to be incredibly intuitive overall. Would definitely recommend this website if you are looking for a source of learning tantra that bit easier.",
  },
  {
    name: "N. Ramaswami",
    profession: "MD, Tech Infra",
    comment: "This website has been pivotal for helping me on tantra rituals. I would definitely recommend this website if you would like to perform any tantra rituals.",
  },
  {
    name: "C. Mathew",
    profession: "Bureaucrat",
    comment: "I absolutely love the services provided by KAULBHASKAR Guru Ji and his team members. It really helped streamline my workflows. I would definitely recommend.",
  },
  {
    name: "Maheshwer Kumar",
    profession: "Lawyer",
    comment: "I am utterly grateful that KAULBHASKAR Ji imparts the high teaching of tantra, specially of hidden KAUL MARGA. He gives personal attention to each knowledge seeker. My life has been changed since I have been learning from him.",
  },
  {
    name: "Dr. Rupinder Singh",
    profession: "Doctor",
    comment: "I have always wanted to learn authentic SRI VIDYA but unfortunately, it is extremely difficult to find genuine practitioners. Thanks to the Goddess that my desire finally found its fulfillment in KAULBHASKAR GURU Ji. His command over the intricacies is unparalleled.",
  },
];

const Testimonial: FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div 
      className="bg-linear-to-r from-red-500 via-green-400 to-pink-500 py-20" 
      id="testimonial"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="special-font hero-subheading">
          t<b>es</b>ti<b>mo</b>ni<b>a</b>ls
        </h1>
        
        {/* Using the extracted Slider component */}
        <Slider {...settings}>
          {testimonialData.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              profession={item.profession}
              comment={item.comment}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
