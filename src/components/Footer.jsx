import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com/KAULBHASKAR", icon: <FaFacebookF /> },
  { href: "https://twitter.com/KAULMARGA", icon: <FaTwitter /> },
  { href: "https://youtube.com/@kaulbhaskar/videos", icon: <FaYoutube /> },
  { href: "https://www.linkedin.com/in/kaul-bhaskar/006a12234/", icon: <FaLinkedin /> },
  { href: "https://wa.me/919934418459", icon: <FaWhatsapp /> },

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
    <footer className="w-screen bg-[#5542ff] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-20 px-4 md:flex-row">
        
        {/* Copyright */}
        <p className="text-center text-sm font-light md:text-left">
          © TANTRA SADHANA 2026. All rights reserved
        </p>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 md:flex-1">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} className="text-white hover:underline">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 md:flex-1 md:justify-end">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 text-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
