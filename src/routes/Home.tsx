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
    <div>
      <SEO 
        title="Yoga Retreats & Wellness Camps | [Brand Name]" 
        description="Experience transformative yoga camps, mindfulness workshops, and expert mentorship. Join our community for a holistic wellness journey."
        keywords="yoga retreat, wellness camp, mindfulness, yoga mentorship, mudras"
        canonical="https://yourdomain.com"
        // FAQ Schema Data
        faq={[
          { 
            question: "What is included in the wellness camp?", 
            answer: "Our camps include daily yoga sessions, mudra workshops, expert mentorship, and organic meals." 
          },
          { 
            question: "Are the programs suitable for beginners?", 
            answer: "Yes, we offer sessions tailored for all levels, from absolute beginners to advanced practitioners." 
          }
        ]}
        // Mentors Schema Data
        mentors={[
          { 
            name: "Lead Mentor Name", 
            role: "Senior Yoga Instructor", 
            image: "https://yourdomain.commentor-image.jpg" 
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
