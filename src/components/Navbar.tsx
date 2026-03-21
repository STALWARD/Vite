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
      setIsScrolled(currentY > 20 || location.pathname !== "/");

      if (currentY > lastScrollY && currentY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <nav className="flex items-center justify-between w-full px-4" aria-label="Main Navigation">
        <div className="flex items-center gap-6">
          <NavLink to="/" aria-label="Go to Home">
            <img src="/img/logo.png" alt="Company Logo" className="w-10" />
          </NavLink>
          <button 
            onClick={() => window.location.href='tel:+919934418459'}
            className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold transition-transform active:scale-95"
          >
            CALL US <TiLocationArrow className="text-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
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
          
          <button 
            className="ml-4 flex items-center gap-1" 
            onClick={toggleAudio}
            aria-label={isAudioPlaying ? "Pause background music" : "Play background music"}
          >
            <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`w-0.75 h-4 bg-blue-400 transition-all duration-300 ${isIndicatorActive ? "animate-bounce" : "h-1"}`}
                style={{ animationDelay: `${bar * 0.1}s` }}
                aria-hidden="true" 
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu Toggle - FIX APPLIED HERE */}
        <button 
          className="md:hidden text-white text-2xl" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Menu Links */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!isMobileMenuOpen}
      >
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
