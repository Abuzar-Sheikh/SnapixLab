import React from "react";
import { Routes, Route } from "react-router-dom";
const Navbar = React.lazy(() => import("./components/Navbar"));
const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const Services = React.lazy(() => import("./pages/Services"));
const Contact = React.lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default App;
