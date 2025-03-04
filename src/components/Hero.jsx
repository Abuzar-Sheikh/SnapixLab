import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/video.jpg";

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-auto flex flex-col justify-center items-center text-center text-white border-b">
      <div className="absolute inset-0 grid-lines z-[-1]"></div>

      <div className="flex flex-col justify-center items-center gap-[24px] my-[40px] md:my-[80px]">
        <h1 className="text-5xl md:text-6xl w-[90%] md:w-[80%] font-bold">
          Your Complete Digital Solution, From Concept to Growth.
        </h1>
        <p className="mt-4 text-lg w-[90%]">
          Hand over your vision to SnapixLab—we research, design, develop, and
          market it to perfection. All-in-one solutions, zero worries.
        </p>
        <Link to="/#" className="relative">
          <button className="bg-blue-700 hover:rounded-br-[0px] text-white px-6 py-3 rounded-br-[20px] transition-all">
            Get Started Now{" "}
          </button>
        </Link>
      </div>

      <img
        className="rounded-2xl my-[30px] md:my-[90px] w-[80%] h-auto"
        src={video}
        title="Video Title"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></img>

      {/* Logos Section */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-10 w-[90%] my-[40px]">
        <img src="logo1.png" alt="Logo 1" className="h-8 mx-auto" />
        <img src="logo2.png" alt="Logo 2" className="h-8 mx-auto" />
        <img src="logo3.png" alt="Logo 3" className="h-8 mx-auto" />
        <img src="logo4.png" alt="Logo 4" className="h-8 mx-auto" />
        <img src="logo5.png" alt="Logo 5" className="h-8 mx-auto" />
        <img src="logo6.png" alt="Logo 6" className="h-8 mx-auto" />
        <img src="logo7.png" alt="Logo 7" className="h-8 mx-auto" />
        <img src="logo8.png" alt="Logo 8" className="h-8 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
