// src/components/Navbar.tsx
import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router"; // RRv7
import { TiLocationArrow } from "react-icons/ti";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // 1. Background Toggle (Glassmorphism)
      // Logic now uses 'location' to stay scrolled/dark on other pages
      setIsScrolled(currentY > 20 || location.pathname !== "/");

      // 2. Hide/Show logic
      if (currentY > lastScrollY && currentY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // Added location.pathname to the dependency array
  }, [lastScrollY, location.pathname]); 

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      className={`fixed inset-x-0 top-6 z-50 transition-all duration-700 sm:inset-x-6 
        ${isScrolled ? "bg-black/40 backdrop-blur-lg border border-white/10 p-4 rounded-2xl w-[95%] md:w-[85%] mx-auto shadow-2xl" : "bg-transparent p-6"} 
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"}`}
    >
      <nav className="flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-6">
          <img src="/img/LOGO.png" alt="logo" className="w-10" />
          <button 
            onClick={() => window.location.href='tel:+919934418459'}
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold transition-transform active:scale-95"
          >
            CALL US <TiLocationArrow className="text-lg" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-blue-400 ${isActive ? "text-blue-400" : "text-white"}`
              }
            >
              {item.label.toUpperCase()}
            </NavLink>
          ))}
          
          <button className="ml-4 flex items-center gap-1" onClick={toggleAudio}>
            <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`w-0.75 h-4 bg-blue-400 transition-all duration-300 ${isIndicatorActive ? "animate-bounce" : "h-1"}`}
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </button>
        </div>

        <button className="md:hidden text-white text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div className={`md:hidden absolute top-20 left-0 w-full overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-black/90 backdrop-blur-xl border border-white/10 m-2 p-6 rounded-2xl flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink 
                key={item.path} 
                to={item.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-semibold hover:text-blue-400"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
