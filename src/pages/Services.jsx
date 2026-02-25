// Services.js
import FAQ from "../components/Faq";
import MultipleItems from "../components/MultipleItems";
import CalendarComponent from "../components/CalendarComponent";
import LatestPost from "../components/LatestPost";
import SEO from "../components/SEO"; // ✅ Import reusable SEO component

const Services = () => {
  return (
    <div>
      {/* ✅ Page-specific SEO using reusable component */}
      <SEO
  title="Spiritual Services | Kaulbhaskar"
  description="Explore our range of spiritual services including Astrology consultations, Tantric rituals, and Sri Vidya guidance."
  canonical="https://www.tantrasadhana.org/services"
  breadcrumbs={[
    { name: "Home", url: "https://www.tantrasadhana.org" },
    { name: "Services", url: "https://www.tantrasadhana.org/services" },
  ]}
/>


      <MultipleItems />
      <FAQ />
      <LatestPost />
      <CalendarComponent />      
    </div>
  );
};

export default Services;
