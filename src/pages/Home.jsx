import React from "react";
import Hero from "../components/Hero";
import OurProcess from "../components/OurProcess";
import Testimonials from "../components/Testimonials";
import OurWork from "../components/OurWork";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* then this component (Hero.jsx) starts rendering found in components directory and then below */}
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
