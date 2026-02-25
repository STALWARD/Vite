// Home.js
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Feature from "../components/Feature";
import Camp from "../components/Camp";
import Gallery from "../components/Gallery";
import Story from "../components/Story";
import Meet from "../components/Meet";
import Mudra from "../components/Mudra";
import FAQ from "../components/Faq";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import CalendarComponent from "../components/CalendarComponent";
import LatestPost from "../components/LatestPost";
import SEO from "../components/SEO"; // ✅ Import reusable SEO component

const Home = () => {
  return (
    <div>
      {/* ✅ Page-specific SEO using reusable component */}
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
      <Team />
      <LatestPost />
      <Meet />
    </div>
  );
};

export default Home;
