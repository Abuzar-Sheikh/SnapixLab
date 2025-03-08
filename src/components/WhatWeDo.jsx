import React, { useState } from "react";
import WhatWeDo_img from "../assets/WhatWeDo_img.jpeg";
import dropdown_icon from "../assets/dropdown_icon.svg";

// Array of service topics and descriptions
const services = [
  {
    id: 1,
    title: "01. Research & Strategy",
    description:
      "We dive deep into your industry, analyze competitors, and understand your audience to create a solid game plan tailored for success.",
  },
  {
    id: 2,
    title: "02. Branding & Identity",
    description:
      "A strong brand leaves a lasting impact. We craft unique brand identities, ensuring consistency across every touchpoint.",
  },
  {
    id: 3,
    title: "03. UI/UX Design",
    description:
      "User experience matters. Our intuitive and visually stunning designs turn ideas into engaging digital products that people love.",
  },
  {
    id: 4,
    title: "04. Website Development",
    description:
      "Responsive and modern websites that impress, delivering seamless functionality across all devices.",
  },
  {
    id: 5,
    title: "05. Android App Development",
    description:
      "Intuitive, feature-rich mobile applications for Android users, enhancing the mobile experience.",
  },
  {
    id: 6,
    title: "06. Digital Marketing",
    description:
      "We execute powerful marketing strategies to drive traffic, increase engagement, and scale your brand.",
  },
  {
    id: 7,
    title: "07. Personal Assistant Services",
    description:
      "We offer personal assistant services to help you manage tasks and streamline your workflow.",
  },
  {
    id: 8,
    title: "08. Launch & Beyond",
    description:
      "Your success is our priority. We ensure a smooth launch and provide ongoing support to help your business grow effortlessly.",
  },
];

const WhatWeDo = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown visibility
  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(id); // Open the clicked dropdown
    }
  };

  return (
    <div className="flex items-center justify-center text-white flex-col my-[40px] px-[40px] md:my-[80px] md:px-[80px] border-b">
      <div className="w-[100%] flex md:flex-row flex-col items-center gap-2">
        <h2 className="text-4xl md:text-6xl w-full md:w-2/3">What We Do?</h2>
        <p className="text-lg w-full md:w-3/6">
          We offer a range of professional design and development services
          tailored to meet your business needs.
        </p>
      </div>

      <div className="flex w-[100%] flex-col md:flex-row justify-between md:mt-[40px] md:mb-[80px] gap-10 mb-[40px]">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-[40px]">
          <div className="relative w-full md:w-[100%] h-auto w-full">
            <img
              src={WhatWeDo_img}
              alt="What We Do Mockup"
              className="rounded-lg h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-[100%] md:w-1/2 my-[40px]">
          <ul className="flex flex-col space-y-2 sm:space-y-3 md:space-y-5 lg:space-y-10">
            {services.map((service) => (
              <li key={service.id}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl text-white">{service.title}</h3>
                  <img
                    onClick={() => toggleDropdown(service.id)}
                    src={dropdown_icon}
                    alt="Toggle Icon"
                    className={`w-4 h-4 cursor-pointer transition-transform duration-300 ${
                      openDropdown === service.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {/* Dropdown content */}
                {openDropdown === service.id && (
                  <p className="text-white mb-2">{service.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
