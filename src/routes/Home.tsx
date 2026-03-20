import React from "react";
import Hero from "../components/Hero";

import SEO from "../components/SEO"; 
import Intro from "../components/Intro";
import Feature from "../components/Feature";
import Camp from "../components/Camp";
import CalendarComponent from "../components/CalendarComponent";
import Gallery from "../components/Gallery";
import Mudra from "../components/Mudra";
import FAQ from "../components/FAQ";
import Story from "../components/Story";
import Testimonial from "../components/Testimonial";
import Mentor from "../components/Team";
import Meet from "../components/Meet";
import LatestPost from "../components/LatestPost";


const Home: React.FC = () => {
  return (
    <div>
      {/* Page-specific SEO using reusable component */}
      <SEO
        title="Kaulbhaskar | Tantra, Astrology & Spiritual Guidance"
        description="Experience authentic Tantric teachings and Astrology with Sri Kaulbhaskar Guru Ji. Explore spiritual rituals, mudras, and guidance from the lineage of 84 Maha Siddhas."
        canonical="https://www.tantrasadhana.org"
        keywords="Tantra, Astrology, Spiritual Guidance, Kaulbhaskar, Maha Siddhas"
        breadcrumbs={[
          { name: "Home", url: "https://www.tantrasadhana.org" },
        ]}
      />

      <Hero />
      <Intro />
      <Feature />
      <Camp />
      <CalendarComponent />
      <Gallery />
      <Mudra />
      <FAQ />
      <Story />
      <Testimonial />
      <Mentor />
      <LatestPost />
      <Meet />

    </div>
  );
};

export default Home;
