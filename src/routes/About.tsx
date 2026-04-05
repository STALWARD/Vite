import React, { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ Added for hash detection
import LatestPost from "../components/LatestPost";
import SEO from "../components/SEO";

// ✅ Lazy load CalendarComponent
const CalendarComponent = lazy(() => import("../components/CalendarComponent"));

const About: React.FC = () => {
  const { hash } = useLocation(); // ✅ Get the #hash from the URL

  useEffect(() => {
    if (hash) {
      // ✅ Delay execution slightly to ensure Lazy components and Images have rendered
      const timeoutId = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // 300ms is usually enough for initial layout

      return () => clearTimeout(timeoutId);
    }
  }, [hash]); // Runs every time the hash in the URL changes

  return (
    <div className="flex flex-col w-full content-center ">
      <SEO
        title="About Kaulbhaskar Guru Ji | Tantra & Astrology Experts"
        description="Learn about Kaulbhaskar Guru Ji, a direct disciple of Sri Kulbhushananand Nath, and our team of experts in Tantra, Astrology, and Sri Vidya Upasana."
        canonical="https://tantrasadhana.org"
        keywords="Tantra, Astrology, Sri Vidya, Kaulbhaskar Guru Ji"
        breadcrumbs={[
          { name: "Home", url: "https://tantrasadhana.org" },
          { name: "About", url: "https://tantrasadhana.org" },
        ]}
      />

      {/* ✅ Added min-h-screen to prevent layout jump while image loads */}
      <div className="flexCenter max-container relative w-full min-h-screen">
        <img
          src="/img/ABOUT-BG.webp"
          alt="yoga background"
          width={1440}
          height={580}
          loading="lazy"
          decoding="async"
          className="w-screen h-screen object-cover object-center 2xl:rounded-s-xl"
        />

        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-4xl text-white font-bold pageHeader">
          About
        </h1>

        <h2 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-xl text-white font-semibold p-6 text-center max-w-3xl pageHeader">
          We offer spiritual guidance and education to those seeking to deepen their understanding of Tantric teachings.
        </h2>
      </div>

      <section className="flex-row md:flex mx-auto items-center w-full bg-linear-to-r from-green-400 via-indigo-500 to-yellow-400">
        <div className="sm:w-1/2 sm:ml-10 sm:mr-10 w-full flex justify-center mt-12 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img
            src="/img/satyendra-large.webp"
            alt="Kaulbhaskar Guru Ji - Tantra Expert"
            width={940}
            height={960}
            loading="lazy"
            decoding="async"
            className="profileImage"
          />
        </div>
        <div className="sm:mt-0 sm:w-2/3 w-full mt-6 ml-0 p-10">
          {/* ✅ The Target ID */}
          <h2 id="guru-ji" className="pb-20 text-2xl md:text-4xl font-bold text-center justify-center scroll-mt-20">
            KAULBHASKAR GURU Ji
          </h2>
          <p className="text-lg text-simple text-justify">
            Guru Ji, popularly known as <strong>KAULBHASKAR</strong>, is from
            the lineage of Sri <strong>Matsyendra Nath</strong> (also known as
            Machendra Nath) ji, a legend of Naths and one of{" "}
            <strong>84 Maha Siddhas</strong>. A direct disciple of esteemed KAUL
            of Prayag, Sri <strong>KULBHUSHANANAND NATH</strong>, Guru Ji is
            basically an Urdhvamanayee Upasaka of MAHATRIPURSUNDARI. Sri
            Kaulbhaskar Ji, an expert of <strong>KAUL MARGA</strong>, has spent
            more than 30 years painstakingly perfecting his practice of SRI
            VIDYA UPASANA of highly mysterious{" "}
            <strong>DAKSHINAMURTI SAMPRADAYA</strong>.
          </p>
        </div>
      </section>

      <section className="w-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-black font-semibold text-xl p-10 h-full mt-5">
        <p>
          KAULBHASKAR Guru Ji has born in a respectable Bhumihar Brahmin Family of Bihar...
        </p>
      </section>
      
      <div className="bg-yellow-400">
        <Suspense fallback={<div>Loading calendar…</div>}>
          <CalendarComponent />
        </Suspense>
        <LatestPost />
      </div>

      <section className="w-full text-black text-4xl font-bold text-center justify-center p-10 h-full mt-5 ">
        <p>We are some of the experts in Tantra & Astrology</p>
      </section>

      <section className="mx-auto w-full h-auto px-4 lg:px-8 ">
        <div className="flex flex-col md:flex-row w-full h-auto gap-5 justify-center items-center ">
          <img src="/mentor/S.Bakshi.webp" alt="Expert S. Bakshi" loading="lazy" decoding="async" className="w-1/5 h-auto object-cover rounded-lg" />
          <img src="/mentor/Aradhya.webp" alt="Expert Aradhya" loading="lazy" decoding="async" className="w-1/5 h-auto object-cover rounded-lg" />
          <img src="/mentor/Subhas.webp" alt="Expert Subhas" loading="lazy" decoding="async" className="w-1/5 h-auto object-cover rounded-lg" />
          <img src="/mentor/Kiran.webp" alt="Expert Kiran" loading="lazy" decoding="async" className="w-1/5 h-auto object-cover rounded-lg" />
          <img src="/mentor/YATAN.webp" alt="Expert Yatan" loading="lazy" decoding="async" className="w-1/5 h-auto object-cover rounded-lg" />
        </div>
      </section>
    </div>
  );
};

export default About;
