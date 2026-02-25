import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true
  };

  const images = [
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
        <h2 className="special-font hero-heading bg-gradient-to-r from-yellow-500 via-red-600 to-indigo-500 bg-clip-text text-transparent text-lg">
          our<b> experts</b>
        </h2>
        <div className="px-10 py-10 bg-black">
          <Slider {...settings}>
            {images.map((item, i) => (
              <div key={i} className="text-white">
                <img src={item.src} alt={item.title} className="mx-auto" />
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </Slider>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ImageSlider;
