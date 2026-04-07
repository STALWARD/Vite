// src/components/Footer.tsx
import { Link } from "react-router"; // RRv7
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com/KAULBHASKAR", icon: <FaFacebookF />, label: "Follow us on Facebook" },
  { href: "https://twitter.com/KAULMARGA", icon: <FaTwitter />, label: "Follow us on Twitter" },
  { href: "https://youtube.com/@kaulbhaskar/videos", icon: <FaYoutube />, label: "Visit our YouTube channel" },
  { href: "https://www.linkedin.com/in/kaul-bhaskar/006a12234/", icon: <FaLinkedin />, label: "Connect with us on LinkedIn" },
  { href: "https://wa.me/919934418459", icon: <FaWhatsapp />, label: "Chat with us on WhatsApp" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#5542ff] py-10 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 md:flex-row">
        
        {/* Copyright */}
        <p className="text-center text-sm font-light md:text-left">
          © TANTRA SADHANA 2026. All rights reserved
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:flex-1 md:justify-center md:flex-nowrap" aria-label="Footer Navigation">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              to={link.href} 
              className="text-white text-sm font-medium hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Links - ACCESSIBILITY FIX APPLIED HERE */}
        <div className="flex gap-4 md:flex-1 md:justify-end">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-110 transition-transform text-xl focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
              aria-label={social.label} // Fix for discernible name
            >
              {/* aria-hidden="true" ensures the icon itself isn't announced */}
              <span aria-hidden="true">{social.icon}</span>
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <Link
          to="/privacy"
          className="text-center text-sm font-light hover:underline md:text-right md:ml-4 focus:outline-none focus:ring-2 focus:ring-white rounded-sm"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
