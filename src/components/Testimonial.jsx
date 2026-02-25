import Slider from "react-slick";
import { StarIcon } from "@heroicons/react/24/solid";

// Reusable Testimonial Card
const TestimonialCard = ({ name, profession, comment }) => {
  return (
    <div className="bg-white m-4 p-5 my-10 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-base font-normal text-black my-4">{comment}</h3>
      <hr style={{ color: "#D7D5D5" }} />
      <div className="flex justify-between items-center mt-4">
        <div>
          <h4 className="text-lg font-medium text-shadow-slate-400">{name}</h4>
          <h4 className="text-sm font-normal text-black">{profession}</h4>
        </div>
        <div className="flex">
          <StarIcon className="w-5 h-5 text-orange-300" />
          <StarIcon className="w-5 h-5 text-orange-300" />
          <StarIcon className="w-5 h-5 text-orange-300" />
          <StarIcon className="w-5 h-5 text-orange-300" />
          <StarIcon className="w-5 h-5 text-amber-500" />
        </div>
      </div>
    </div>
  );
};

// Testimonial Data
const testimonialData = [
  {
    name: "J. Kartikeyan",
    profession: "Entrepreneur",
    comment:
      "I am a huge fan of GURU Ji. I have found the whole team to be incredibly intuitive overall. Would definitely recommend this website if you are looking for a source of learning tantra that bit easier.",
  },
  {
    name: "N. Ramaswami",
    profession: "MD, Tech Infra",
    comment:
      "This website has been pivotal for helping me on tantra rituals. I would definitely recommend this website if you would like to perform any tantra rituals.",
  },
  {
    name: "C. Mathew",
    profession: "Bureaucrat",
    comment:
      "I absolutely love the services provided by KAULBHASKAR Guru Ji and his team members. It really helped streamline my workflows. I would definitely recommend.",
  },
  {
    name: "Maheshwer Kumar",
    profession: "Lawyer",
    comment:
      "I am utterly grateful that KAULBHASKAR Ji imparts the high teaching of tantra, specially of hidden KAUL MARGA. He gives personal attention to each knowledge seeker. My life has been changed since I have been learning from him.",
  },
  {
    name: "Dr. Rupinder Singh",
    profession: "Doctor",
    comment:
      "I have always wanted to learn authentic SRI VIDYA but unfortunately, it is extremely difficult to find genuine practitioners. Thanks to the Goddess that my desire finally found its fulfillment in KAULBHASKAR GURU Ji. His command over the intricacies is unparalleled.",
  },
];

// Main Testimonials Component
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3, // default for large screens
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      className="bg-gradient-to-r from-red-500 via-green-400 to-pink-500 py-20"
      id="testimonial"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="special-font hero-subheading">
          t<b>es</b>ti<b>mo</b>ni<b>a</b>ls
        </h1>
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
