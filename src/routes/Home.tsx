import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero"; 
import SEO from "../components/SEO"; 

const Intro = lazy(() => import("../components/Intro")); 
const StatsComponent = lazy(() => import("../components/StatsComponent"));
const Feature = lazy(() => import("../components/Feature"));
const Camp = lazy(() => import("../components/Camp"));
const CalendarComponent = lazy(() => import("../components/CalendarComponent"));
const Gallery = lazy(() => import("../components/Gallery"));
const Mudra = lazy(() => import("../components/Mudra"));
const FAQ = lazy(() => import("../components/FAQ"));
const Story = lazy(() => import("../components/Story"));
const Testimonial = lazy(() => import("../components/Testimonial"));
const Mentor = lazy(() => import("../components/Team"));
const Meet = lazy(() => import("../components/Meet"));
const LatestPost = lazy(() => import("../components/LatestPost"));

const Home: React.FC = () => {
  return (
    <div>
      <SEO 
        title="KAULBHASKAR a Legend KAUL | Tantra, Astrology & Spiritual Guidance" 
        description="Connect with experts in Tantra & Astrology led by Sri KAULBHASKAR Ji, lineage of Sri MATSYENDRA NATH Ji. Services include Puja, Rituals, and Astro-consultation."
        keywords="Tantra, Astrology, KAULBHASKAR Guru Ji, Sri MATSYENDRA NATH lineage, Puja Rituals, Astrology Consultation, Yantra"
        canonical="https://yourdomain.com"
        faq={[
          { question: "Who is KAUL BHASKAR ?", answer: "Kaul Bhaskar is a Sri Vidya Upaska and a dedicated follower of Kaul Marg. He provides guidance in authentic Tantra, spiritual initiation, and astrological consultations." },
          { question: "What are the primary services offered ?", answer: "We provide Tantra teachings and rituals, Astrology consultation, Gems, Talismans, and Worship Yantras like Meru & Kurma." },
          { question: "What is the charges, if any ?", answer: "Services range from Astrology Consultation (₹5,000) to specialized rituals like Shat Chandi (₹2,50,000). Contact us for specific details." }
        ]}
        mentors={[
          { 
            name: "KAULBHASKAR Guru Ji", 
            role: "Spiritual Mentor & Expert in Tantra", 
            description: "Belongs to the lineage of famous siddha yogi Sri MATSYENDRA NATH Ji.",
            image: "https://yourdomain.com/guru-ji-photo.jpg"
          }
        ]}
      />

      <Hero />
     

      <Suspense fallback={<div className="flex justify-center items-center h-40">Loading...</div>}>
        <Intro />
        <Feature />
        <Camp />
        <CalendarComponent />
        <Gallery />
        <Mudra />
        <FAQ />
        <StatsComponent />
        <Story />
        <Testimonial />
        <Mentor />
        <LatestPost />
        <Meet />
      </Suspense>
    </div>
  );
};

export default Home;
