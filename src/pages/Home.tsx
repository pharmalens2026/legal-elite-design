import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import PracticeAreas from "../components/sections/PracticeAreas";
import Stats from "../components/sections/Stats";
import Team from "../components/sections/Team";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Blog from "../components/sections/Blog";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <PracticeAreas />
      <Stats />
      <Blog />
      <Team />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;