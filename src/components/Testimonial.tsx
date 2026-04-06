import type { FC } from "react";
import SliderComponent from "react-slick";
import type { Settings } from "react-slick";
import { FaStar } from "react-icons/fa";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// @ts-ignore
const Slider = (SliderComponent.default || SliderComponent) as any;

interface TestimonialData {
  name: string;
  profession: string;
  comment: string;
}

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
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div 
      className="bg-linear-to-r from-red-500 via-green-400 to-pink-500 py-20" 
      id="testimonial"
    >
      <div className="mx-auto max-w-7xl px-4 w-full max-w-full overflow-hidden">
        <h1 className="special-font hero-subheading">
          t<b>es</b>ti<b>mo</b>ni<b>a</b>ls
        </h1>
Here are the fully patched versions of your components with the responsive fixes applied. You can copy-paste these directly into your project.

---

## ✅ Mudra Component (Updated)

```tsx
import React from "react";
import SliderComponent from "react-slick";
import type { Settings } from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// @ts-ignore
const Slider = (SliderComponent.default || SliderComponent) as any;

interface MudraImage {
  src: string;
  title: string;
  description: string;
}

const Mudra: React.FC = () => {
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
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  const images: MudraImage[] = [
    { src: "/mudra/abagunthan.png", title: "Abagunthan Mudra", description: "Symbol of concealment and protection." },
    { src: "/mudra/abhay.png", title: "Abhay Mudra", description: "Gesture of fearlessness and reassurance." },
    { src: "/mudra/ankush.png", title: "Ankush Mudra", description: "Represents control and guidance." },
    { src: "/mudra/chakra.png", title: "Chakra Mudra", description: "Symbol of energy and cosmic power." },
    { src: "/mudra/dhenu.png", title: "Dhenu Mudra", description: "Gesture symbolizing nourishment and abundance." },
    { src: "/mudra/galini.png", title: "Galini Mudra", description: "Represents surrender and devotion." },
    { src: "/mudra/jwalini.png", title: "Jwalini Mudra", description: "Gesture of fire and transformation." },
    { src: "/mudra/kharga.png", title: "Kharga Mudra", description: "Symbol of strength and destruction of evil." },
    { src: "/mudra/kurma.png", title: "Kurma Mudra", description: "Represents stability and endurance." },
    { src: "/mudra/lelihan.png", title: "Lelihan Mudra", description: "Gesture of flowing energy and grace." },
    { src: "/mudra/linga.png", title: "Linga Mudra", description: "Symbol of creation and divine union." },
    { src: "/mudra/matsya.png", title: "Matsya Mudra", description: "Gesture representing fish and water element." },
    { src: "/mudra/munda.png", title: "Munda Mudra", description: "Symbol of detachment and transcendence." },
    { src: "/mudra/parmikaran.png", title: "Parmikaran Mudra", description: "Gesture of purification and clarity." },
    { src: "/mudra/samhar.png", title: "Samhar Mudra", description: "Represents dissolution and transformation." },
    { src: "/mudra/sannirodhini.png", title: "Sannirodhini Mudra", description: "Gesture of restraint and discipline." },
    { src: "/mudra/tatva.png", title: "Tatva Mudra", description: "Symbol of elemental balance and harmony." },
    { src: "/mudra/yoni.png", title: "Yoni Mudra", description: "Gesture of feminine energy and creation." }
  ];

  return (
    <div className="text-center my-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="special-font hero-heading bg-linear-to-r from-yellow-500 via-red-600 to-indigo-500 bg-clip-text text-transparent text-lg">
          m<b>ud</b>r<b>a</b>s
        </h2>
        <div className="px-4 py-10 bg-black mt-6 w-full max-w-full overflow-hidden">
          <Slider {...settings}>
            {images.map((item, i) => (
              <div key={i} className="text-white outline-none">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="mx-auto h-72 w-auto object-contain" 
                />
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="text-sm px-2">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Mudra;
