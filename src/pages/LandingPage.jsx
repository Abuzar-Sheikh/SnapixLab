import React from "react";
import Hero from "../components/LandingPage/Hero";
import OurProcess from "../components/LandingPage/OurProcess";
import Testimonials from "../components/LandingPage/Testimonials";
import OurWork from "../components/LandingPage/OurWork";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import WhatWeDo from "../components/LandingPage/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <OurWork />
      <OurProcess />
      <Testimonials />
      <CallToAction />
      <Contact />
    </div>
  );
};

export default Home;
