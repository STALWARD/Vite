import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIcon } from "@heroicons/react/24/solid";

// CAROUSEL DATA
const postData = [ { 
  heading: "Know your Destiny", 
  heading2: "By ASTROLOGY", 
  name: "Horoscope/Palm-Reading/Prasna", 
  imgSrc: "/services/horoscope.png", 
  price: 5000, 
  rating: 4.2, 
}, 
{
  heading: 'MAHA VIPRITA PRATYANGIRA',
  heading2: 'A famous Prayoga',
  name: "Defensive and curative in abhicharas",
  imgSrc: '/services/Pratyangira.png',
  price: 70000, 
  rating: 4.8,
}, 
{
  heading: 'SHULINI DURGA PRAYOGA',
  heading2: 'As in SHARDA TILAKA',
  name: "Protection from evil planets",
  imgSrc: '/services/shulini.webp',
  price: 40000, 
  rating: 4.4,
}, 
{
  heading: 'BATUKA BHAIRAV PRAYOGA',
  heading2: 'A famous Prayoga',
  name: "Deliverance from all hurdle",
  imgSrc: '/services/bhairav.webp',
  price: 50000, 
  rating: 4.8,
}, 
{ 
  heading: "Maha Mrityunjaya", 
  heading2: "A very popular Prayoga", 
  name: "For Longevity and Good Health", 
  imgSrc: "/services/mahamrityunjaya.png", 
  price: 90000, 
  rating: 4.7, 
},
{ 
  heading: "Baglamukhi", 
  heading2: "Famous Prayoga to abolish enemies!", 
  name: "To win Elections, Litigations", 
  imgSrc: "/services/baglamukhi.png", 
  price: 120000, 
  rating: 4.6, 
}, 
{
  heading: 'SHAT-CHANDI',
  heading2: 'By pure tantric method',
  name: "One of the Jack-of-all Prayoga",
  imgSrc: '/services/Shatchandi.webp',
  price: 250000,
  rating: 4.8,
},
{
  heading: 'MAHAVIDYA PRAYOGA',
  heading2: 'As in MUNDMALA TANTRA',
  name: "For protection against evil eyes",
  imgSrc: '/services/mahavidya.png',
  price: 40000,
  rating: 4.5,
},
{
  heading: 'LALITA SAHSTRANAMAVALI ARCHANAM',
  heading2: '',
  name: "For blessing of divine mother",
  imgSrc: '/services/lalita_archanam.png',
  price: 50000,
  rating: 4.8,
},
];

const MultipleItems = () => {
  const settings = {
    dots: false,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 5000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-screen h-auto">
      {/* Hero Section */}
      <div className="relative flex w-full ">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="relative flex h-screen w-screen object-cover"
        >
          <source src="/videos/service.mp4" />
        </video>
        <h1 className="absolute text-4xl text-center text-white font-bold top-32 w-full">
          Services
        </h1>
        <h2 className="absolute text-2xl text-center text-white font-semibold top-60 w-full">
          Strategic Tantra advice and tailored solutions
        </h2>
        <p className="absolute text-xl text-center text-white font-semibold top-80 px-20 w-full">
          Through blog posts, videos and other resources, we provide an
          accessible platform for individuals to learn about Tantra and its
          various practices as well as for performing Tantric Rituals.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="w-screen h-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 sm:py-8 px-4 lg:px-8">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-5 sm:mb-0">
            Popular Services
          </h2>
        </div>

        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-2xl">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <img
                    src={items.imgSrc}
                    alt={items.name}
                    width={396}
                    height={296}
                    className="m-auto"
                  />
                  <div className="absolute right-5 -bottom-2 bg-blue-900 rounded-full p-6">
                    <h3 className="text-white uppercase text-center text-sm font-medium">
                      best <br /> wanted
                    </h3>
                  </div>
                </div>

                <div className="px-3">
                  <h4 className="text-lg md:text-xl font-bold pt-6 text-black">
                    {items.heading}
                  </h4>
                  <h4 className="text-sm md:text-lg font-semibold pt-1 text-black">
                    {items.heading2}
                  </h4>

                  <h3 className="text-base font-normal pt-6 opacity-80">
                    {items.name}
                  </h3>

                  <div className="md:flex justify-between items-center py-6">
                    <div className="flex gap-4">
                      <h3 className="text-red-600 text-xl font-medium">
                        {items.rating}
                      </h3>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <StarIcon key={idx} className="h-5 w-5 text-black" />
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-3xl font-medium">
                        Rs.{items.price}/=
                      </h3>
                    </div>
                  </div>

                  <hr className="border-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MultipleItems;
