import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero"; 
import Intro from "../components/Intro"; 
import SEO from "../components/SEO"; 

// Lazy load the rest
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
const StatsComponent = lazy(() => import("../components/StatsComponent"));

const Home: React.FC = () => {
  return (
    <div>
      <SEO 
        title="KAULBHASKAR a Legend KAUL | Tantra, Astrology & Spiritual Guidance" 
        description="Connect with experts in Tantra & Astrology led by Sri KAULBHASKAR Ji, lineage of Sri MATSYENDRA NATH Ji. Services include Puja, Rituals, and Astro-consultation."
        keywords="Tantra, Astrology, KAULBHASKAR Guru Ji, Sri MATSYENDRA NATH lineage, Puja Rituals, Astrology Consultation, Yantra"
        canonical="https://yourdomain.com"
        // FAQ Schema Data from your provided list
        faq={[
          {
            question: "Who we are ?",
            answer: "We are a team of experts in Tantra & Astrology from renowned lineages. Our mentor Sri KAULBHASKAR Ji belongs to the lineage of the famous siddha yogi Sri MATSYENDRA NATH Ji."
          },
          {
            question: "What services we provide ?",
            answer: "We provide Tantra teachings and rituals, Astrology consultation, Gems, Talismans, and Worship Yantras like Meru & Kurma."
          },
          {
            question: "What is the charges, if any ?",
            answer: "Services range from Astrology Consultation (₹5,000) to specialized rituals like Shat Chandi (₹2,50,000). Contact us for specific details."
          }
        ]}
        // Mentor Schema Data
        mentors={[
          { 
            name: "KAULBHASKAR Guru Ji", 
            role: "Spiritual Mentor & Expert in Tantra", 
            description: "Belongs to the lineage of famous siddha yogi Sri MATSYENDRA NATH Ji.",
            image: "https://yourdomain.comguru-ji-photo.jpg" // Update with actual URL
          }
        ]}
      />

      <Hero />
      <Intro />

      <Suspense fallback={<div className="h-40" />}>
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
