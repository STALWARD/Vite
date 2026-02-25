import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import your page components
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog"; 
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./pages/Services";

const App = () => {
  const location = useLocation();

  const isBlogPage = location.pathname === "/blog";
  const isBlogPostPage = location.pathname.startsWith("/blog/");

  const navbarClass = (isBlogPage || isBlogPostPage) 
    ? "fixed top-0 left-0 w-full z-50" 
    : "";

  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden">
      {/* 2. Global/Default SEO Tags */}
      <Helmet>
        <title>KAUL TANTRA SADHANA # KAULBHASKAR</title>
        <meta name="description" content="Explore Kaul Tantra Sadhana practices and insights by Kaulbhaskar." />
        <link rel="canonical" href={`https://www.tantrasadhana.org${location.pathname}`} />
      </Helmet>

      <ScrollToTop />
      
      <div className={navbarClass}>
        <Navbar />
      </div>

      <main className={`flex-grow ${isBlogPage || isBlogPostPage ? "pt-28" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
