"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { assetsPortfolio } from "../../assets/Portfolio/assets";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const images = [
    assetsPortfolio.CleanGo,
    assetsPortfolio.Alter,
    assetsPortfolio.Brewed,
    assetsPortfolio.ChemTrack,
    assetsPortfolio.Dream,
    assetsPortfolio.Hihami,
    assetsPortfolio.Social,
    assetsPortfolio.TaskFlow,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <section className="bg-cover bg-center h-auto flex flex-col justify-center items-center text-center text-white border-b">
      <div className="absolute inset-0 grid-lines z-[-1]"></div>

      <div className="flex flex-col justify-center items-center gap-[24px] mt-[40px] md:mt-[80px] mx-[40px] md:mx-[80px]">
        <h1 className="text-5xl md:text-6xl w-[90%] md:w-[80%] font-bold">
          Your Complete Digital Solution, From Concept to Growth.
        </h1>
        <p className="mt-4 text-lg w-[90%]">
          Hand over your vision to SnapixLab—we research, design, develop, and
          market it to perfection. All-in-one solutions, zero worries.
        </p>
        <Link to="/contact" className="relative">
          <button className="bg-blue-700 hover:rounded-br-[0px] text-white px-6 py-3 my-[40px] rounded-br-[20px] transition-all">
            Get Started Now{" "}
          </button>
        </Link>
      </div>

      {/* image scroller */}
      <div className="rounded-3xl m-[40px] md:m-[80px] w-[calc(100%-80px)] h-[200px] sm:h-[450px] md:h-[500px] lg:h-[650px] relative border border-white shadow-lg shadow-white/40 overflow-hidden">
        <div className="w-full h-full relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Portfolio image ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.3, ease: "easeInOut" },
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Logos Section */}
      <div className="relative overflow-hidden w-full my-[40px]">
        <div className="flex animate-scroll w-full gap-5">
          {/* Repeat logos to ensure seamless scrolling */}
          <img
            src={assets.comp_1 || "/placeholder.svg"}
            alt="Logo 1"
            className="h-8"
          />
          <img
            src={assets.comp_2 || "/placeholder.svg"}
            alt="Logo 2"
            className="h-8"
          />
          <img
            src={assets.comp_3 || "/placeholder.svg"}
            alt="Logo 3"
            className="h-8"
          />
          <img
            src={assets.comp_4 || "/placeholder.svg"}
            alt="Logo 4"
            className="h-8"
          />
          <img
            src={assets.comp_5 || "/placeholder.svg"}
            alt="Logo 5"
            className="h-8"
          />
          <img
            src={assets.comp_6 || "/placeholder.svg"}
            alt="Logo 6"
            className="h-8"
          />
          <img
            src={assets.comp_7 || "/placeholder.svg"}
            alt="Logo 7"
            className="h-8"
          />
          <img
            src={assets.comp_8 || "/placeholder.svg"}
            alt="Logo 8"
            className="h-8"
          />
          {/* Repeat logos again for seamless looping */}
          <img
            src={assets.comp_1 || "/placeholder.svg"}
            alt="Logo 1"
            className="h-8"
          />
          <img
            src={assets.comp_2 || "/placeholder.svg"}
            alt="Logo 2"
            className="h-8"
          />
          <img
            src={assets.comp_3 || "/placeholder.svg"}
            alt="Logo 3"
            className="h-8"
          />
          <img
            src={assets.comp_4 || "/placeholder.svg"}
            alt="Logo 4"
            className="h-8"
          />
          <img
            src={assets.comp_5 || "/placeholder.svg"}
            alt="Logo 5"
            className="h-8"
          />
          <img
            src={assets.comp_6 || "/placeholder.svg"}
            alt="Logo 6"
            className="h-8"
          />
          <img
            src={assets.comp_7 || "/placeholder.svg"}
            alt="Logo 7"
            className="h-8"
          />
          <img
            src={assets.comp_8 || "/placeholder.svg"}
            alt="Logo 8"
            className="h-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
