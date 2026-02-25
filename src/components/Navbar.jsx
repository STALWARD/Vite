import React, { useEffect, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = React.useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // background toggle
      setIsScrolled(currentY > 0 || location.pathname !== "/");

      // hide/show on scroll direction
      if (currentY > lastScrollY && currentY > 50) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      className={`fixed inset-x-0 top-10 z-50 transition-all duration-500 sm:inset-x-6 
        ${isScrolled ? "bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-md w-[90%] mx-auto" : "bg-transparent"} 
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"}`}
    >
      <nav className="flex items-center justify-between w-full">
        {/* Logo + Call Button */}
        <div className="flex items-center gap-7">
          <img src="/img/logo.png" alt="logo" className="w-10" />
          <Button
            id="call-button"
            title="CALL US"
            rightIcon={<TiLocationArrow />}
            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            onClick={() => window.open("tel:+919934418459", "_blank")}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-white">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path} className="hover:text-blue-400">
              {item.label}
            </Link>
          ))}
          <button className="ml-4 flex items-center" onClick={toggleAudioIndicator}>
            <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`w-1 h-4 mx-0.5 bg-white ${
                  isIndicatorActive ? "animate-pulse" : ""
                }`}
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FiX className="text-2xl text-white" />
            ) : (
              <FiMenu className="text-2xl text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-md border border-white/10 text-white flex flex-col items-center gap-4 py-6 rounded-md w-[90%] mx-auto animate-fadeIn">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-blue-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button className="mt-4 flex items-center" onClick={toggleAudioIndicator}>
            <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`w-1 h-4 mx-0.5 bg-white ${
                  isIndicatorActive ? "animate-pulse" : ""
                }`}
                style={{ animationDelay: `${bar * 0.1}s` }}
              />
            ))}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
