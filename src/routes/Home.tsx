import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero"; // LCP component (Keep static)
import Intro from "../components/Intro"; // Above the fold (Keep static)
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
    <div>
      <SEO title="..." description="..." />

      <Hero />
      <Intro />

      {/* Wrap everything else in Suspense */}
      <Suspense fallback={<div className="h-40" />}>
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
      </Suspense>
    </div>
  );
};

export default Home;
