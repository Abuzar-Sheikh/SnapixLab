import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Hero = () => {
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
        <Link to="/#" className="relative">
          <button className="bg-blue-700 hover:rounded-br-[0px] text-white px-6 py-3 my-[40px] rounded-br-[20px] transition-all">
            Get Started Now{" "}
          </button>
        </Link>
      </div>

      <img
        className="rounded-2xl m-[40px] md:m-[80px] w-[90%] h-auto"
        src={assets.video}
        title="Video Title"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Logos Section */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-8 w-[90%] my-[50px]">
        <img src={assets.comp_1} alt="Logo 1" className="h-8 mx-auto" />
        <img src={assets.comp_2} alt="Logo 2" className="h-8 mx-auto" />
        <img src={assets.comp_3} alt="Logo 3" className="h-8 mx-auto" />
        <img src={assets.comp_4} alt="Logo 4" className="h-8 mx-auto" />
        <img src={assets.comp_5} alt="Logo 5" className="h-8 mx-auto" />
        <img src={assets.comp_6} alt="Logo 6" className="h-8 mx-auto" />
        <img src={assets.comp_7} alt="Logo 7" className="h-8 mx-auto" />
        <img src={assets.comp_8} alt="Logo 8" className="h-8 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
