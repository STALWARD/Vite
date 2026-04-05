import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import LatestPost from "../components/LatestPost";
import SEO from "../components/SEO";

const CalendarComponent = lazy(() => import("../components/CalendarComponent"));

const About: React.FC = () => {
  // Safe way to get location; if router is missing, it won't crash the whole page
  let location;
  try {
    location = useLocation();
  } catch (e) {
    console.error("Router context missing!", e);
  }

  useEffect(() => {
    if (location?.hash) {
      // Increased delay to 500ms for Vercel production loads
      const timeoutId = setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); 

      return () => clearTimeout(timeoutId);
    }
  }, [location?.hash]);

  return (
    <div className="flex flex-col w-full content-center">
      <SEO
        title="About Kaulbhaskar Guru Ji | Tantra & Astrology Experts"
        description="Learn about Kaulbhaskar Guru Ji, a direct disciple of Sri Kulbhushananand Nath."
        canonical="https://tantrasadhana.org"
        keywords="Tantra, Astrology, Sri Vidya, Kaulbhaskar Guru Ji"
      />

      <div className="flexCenter max-container relative w-full min-h-screen">
        <img
          src="/img/ABOUT-BG.webp"
          alt="yoga background"
          className="w-screen h-screen object-cover object-center"
        />
        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold">About</h1>
      </div>

      <section className="flex-row md:flex mx-auto items-center w-full bg-gradient-to-r from-green-400 via-indigo-500 to-yellow-400">
        <div className="sm:w-1/2 p-10 flex justify-center">
          <img src="/img/satyendra-large.webp" alt="Guru Ji" className="rounded-lg shadow-lg" />
        </div>
        <div className="sm:w-2/3 p-10">
          {/* ✅ scroll-mt-24 prevents the header from covering the title */}
          <h2 id="guru-ji" className="pb-10 text-2xl md:text-4xl font-bold scroll-mt-24">
            KAULBHASKAR GURU Ji
          </h2>
          <p className="text-lg text-justify">
            Guru Ji, popularly known as <strong>KAULBHASKAR</strong>...
          </p>
        </div>
      </section>

      <div className="bg-yellow-400">
        <Suspense fallback={<div>Loading calendar…</div>}>
          <CalendarComponent />
        </Suspense>
        <LatestPost />
      </div>
    </div>
  );
};

export default About;
