// src/components/Footer.tsx
import { Link } from "react-router";
// Optimization: Import specific icons to enable better tree-shaking
import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaLinkedin, 
  FaWhatsapp 
} from "react-icons/fa6";

const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Follow us on Facebook" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Follow us on Twitter" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "Visit our YouTube channel" },
  { href: "https://linkedin.com", icon: <FaLinkedin />, label: "Connect with us on LinkedIn" },
  { href: "https://wa.me", icon: <FaWhatsapp />, label: "Chat with us on WhatsApp" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    // FIX 2: Set minimum height (mobile vs desktop) to prevent layout collapse during load
    <!-- Fixed Footer Layout -->
<footer class="w-full bg-[#5542ff] py-10 text-white min-h-[300px] md:min-h-[120px] flex items-center justify-between unique-footer-container">
  <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
    
    <!-- Left Section: Branding -->
    <div class="flex items-center min-w-[150px] min-h-[40px]">
      <span class="text-sm opacity-90">© 2026 Kaul Bhaskar. All rights reserved.</span>
    </div>

    <!-- Center/Right Section: Navigation Links -->
    <nav class="flex flex-wrap justify-center gap-6 text-sm font-medium">
      <a href="/" class="hover:underline">Home</a>
      <a href="/about" class="hover:underline">About Us</a>
      <a href="/services" class="hover:underline">Services</a>
      <a href="/blog" class="hover:underline">Blog</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </nav>

  </div>
</footer>

  );
}
