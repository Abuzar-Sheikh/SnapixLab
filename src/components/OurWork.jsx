import React from "react";
import img_1 from '../assets/img_1.jpg';
import img_2 from '../assets/img_2.jpg';
import img_3 from '../assets/img_3.jpg';
import img_4 from '../assets/img_4.jpg';
import img_5 from '../assets/img_5.jpg';
import img_6 from '../assets/img_6.jpg';

// Array of projects and images with buttons
const projects = [
  {
    id: 1,
    title: "Research",
    image: img_1,
    buttons: ["Research", "Branding"],
  },
  {
    id: 2,
    title: "Branding",
    image: img_2,
    buttons: ["Research", "Branding", "Design"],
  },
  {
    id: 3,
    title: "Design",
    image: img_3,
    buttons: ["Research", "Branding"],
  },
  {
    id: 4,
    title: "Development",
    image: img_4,
    buttons: ["Design", "Development"],
  },
  {
    id: 5,
    title: "Marketing",
    image: img_5,
    buttons: ["Design", "Development"],
  },
  {
    id: 6,
    title: "Launch",
    image: img_6,
    buttons: ["Development", "Launch", "Marketing"],
  },
];

const OurWorkSpeaks = () => {
  return (
    <section className="md:my-[80px] border-b text-white">
      <div className="px-[40px] md:px-[80px] w-full flex flex-col mb-[40px]">
        <h2 className="text-4xl md:text-6xl w-full md:w-2/3">
          Our Work Speaks
        </h2>
        <p className="text-lg text-left w-full md:w-3/6">
          Take a look at some of our best projects that showcase our creativity,
          innovation, and attention to detail.
        </p>
      </div>

      {/* Project Images Grid */}
      <div className="px-[40px] md:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-5 mb-[80px]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative bg-white rounded-lg shadow-lg ${
              index % 2 === 0
                ? "md:col-span-1 md:row-span-1"
                : "md:col-start-2 md:row-start-auto"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <div className="flex space-x-1">
                {project.buttons.map((button, i) => (
                  <button
                    key={i}
                    className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkSpeaks;