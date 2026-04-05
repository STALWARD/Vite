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

const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <SEO
        title="KAULBHASKAR a Legend KAUL | Tantra, Astrology & Spiritual Guidance"
        description="Connect with experts in Tantra & Astrology led by Sri KAULBHASKAR Ji, lineage of Sri MATSYENDRA NATH Ji. Services include Puja, Rituals, and Astro-consultation."
        keywords="Tantra, Astrology, KAULBHASKAR Guru Ji, Sri MATSYENDRA NATH lineage, Puja Rituals, Astrology Consultation, Yantra"
        canonical="https://yourdomain.com"
        faq={[
          {
            question: "Who we are ?",
            answer:
              "We are a team of experts in Tantra & Astrology from renowned lineages. Our mentor Sri KAULBHASKAR Ji belongs to the lineage of the famous siddha yogi Sri MATSYENDRA NATH Ji.",
          },
          {
            question: "What services we provide ?",
            answer:
              "We provide Tantra teachings and rituals, Astrology consultation, Gems, Talismans, and Worship Yantras like Meru & Kurma.",
          },
          {
            question: "What is the charges, if any ?",
            answer:
              "Services range from Astrology Consultation (₹5,000) to specialized rituals like Shat Chandi (₹2,50,000). Contact us for specific details.",
          },
        ]}
        mentors={[
          {
            name: "KAULBHASKAR Guru Ji",
            role: "Spiritual Mentor & Expert in Tantra",
            description:
              "Belongs to the lineage of famous siddha yogi Sri MATSYENDRA NATH Ji.",
            image: "https://yourdomain.com/guru-ji-photo.jpg", // Update with actual URL
          },
        ]}
      />

      {/* Responsive container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <section className="py-8 sm:py-12">
          <Hero />
        </section>

        {/* Intro section */}
        <section className="py-6 sm:py-10">
          <Intro />
        </section>

        {/* Lazy-loaded sections */}
        <Suspense
          fallback={
            <div className="w-full h-40 bg-gray-100 animate-pulse rounded-md" />
          }
        >
          <section className="py-8 sm:py-12">
            <Feature />
          </section>

          <section className="py-8 sm:py-12">
            <Camp />
          </section>

          <section className="py-8 sm:py-12">
            <CalendarComponent />
          </section>

          <section className="py-8 sm:py-12">
            <Gallery />
          </section>

          <section className="py-8 sm:py-12">
            <Mudra />
          </section>

          <section className="py-8 sm:py-12">
            <FAQ />
          </section>

          <section className="py-8 sm:py-12">
            <Story />
          </section>

          <section className="py-8 sm:py-12">
            <Testimonial />
          </section>

          <section className="py-8 sm:py-12">
            <Mentor />
          </section>

          <section className="py-8 sm:py-12">
            <LatestPost />
          </section>

          <section className="py-8 sm:py-12">
            <Meet />
          </section>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
