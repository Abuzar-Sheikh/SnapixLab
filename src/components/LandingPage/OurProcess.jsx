import React, { useState } from "react";
import { assets } from "../../assets/assets";

const processes = [
  {
    id: 1,
    title: "Research & Strategy",
    description:
      "We dive deep into your industry, analyze competitors, and understand your audience to create a solid game plan tailored for success.",
    svg: assets.research,
  },
  {
    id: 2,
    title: "Branding & Identity",
    description:
      "A strong brand leaves a lasting impact. We craft unique brand identities, ensuring consistency across every touchpoint.",
    svg: assets.branding,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User experience matters. Our intuitive and visually stunning designs turn ideas into engaging digital products that people love.",
    svg: assets.uxui,
  },
  {
    id: 4,
    title: "Development & Build",
    description:
      "From websites to mobile apps, we develop high-performance, scalable solutions with seamless functionality across all devices.",
    svg: assets.developement,
  },
  {
    id: 5,
    title: "Marketing & Growth",
    description:
      "Launching is just the beginning. We execute powerful marketing strategies to drive traffic, increase engagement, and scale your brand.",
    svg: assets.marketting,
  },
  {
    id: 6,
    title: "Launch & Beyond",
    description:
      "Your success is our priority. We ensure a smooth launch and provide ongoing support to help your business grow effortlessly.",
    svg: assets.launch,
  },
];

const HowWeWork = () => {
  const [selectedProcess, setSelectedProcess] = useState();

  return (
    <section className="my-[40px] px-[40px] md:my-[80px] md:px-[80px] border-b bg-black text-white flex flex-col justify-center items-center">
      <div className="w-full flex md:flex-row flex-col items-center gap-2 mb-4">
        <h2 className="text-4xl md:text-6xl w-full md:w-2/3">How We Work</h2>
        <p className="text-lg text-left w-full md:w-3/6">
          Whether it's a full-scale project or a single service, we ensure a
          smooth, stress-free process tailored to your needs.
        </p>
      </div>

      {/* Process Steps Grid */}
      <div className="mx-[20x] sm:mx-[80x] mb-[40px] md:mb-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processes.map((process) => (
          <div
            key={process.id}
            className={`p-6 rounded-lg shadow-lg transition duration-300 ease-in-out cursor-pointer group
          ${
            selectedProcess === process.id
              ? "bg-blue-600 text-white"
              : "border border-gray-600 hover:bg-blue-700"
          }`}
          >
            {/* Display SVG icon using <img> tag */}
            <img
              src={process.svg}
              alt={process.title}
              className="w-8 h-8 mb-4 transition-all duration-300"
              style={{
                filter:
                  selectedProcess === process.id
                    ? { svg }
                    : "invert(2000%) sepia(1000%) saturate(100%) hue-rotate(220deg) brightness(100%) contrast(200%)", // blue-700 effect
              }}
            />

            <h3 className="text-2xl font-semibold mb-2">{process.title}</h3>
            <p className="text-sm text-gray-300">{process.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
