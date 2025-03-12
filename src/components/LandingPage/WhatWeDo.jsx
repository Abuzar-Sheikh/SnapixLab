import React, { useState } from "react";
import { assets } from "../../assets/assets";

import { motion, AnimatePresence } from "framer-motion"; // Import from framer-motion

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
    <div className="flex items-center justify-center text-white flex-col my-[40px] md:my-[80px] px-[40px] md:px-[80px] border-b">
      <div className="w-[100%] flex flex-col lg:flex-row items-center gap-6">
        <h2 className="text-4xl md:text-6xl w-full lg:w-2/5">What We Do?</h2>
        <p className="text-lg w-full lg:w-3/6">
          We offer a range of professional design and development services
          tailored to meet your business needs.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-14 my-[40px] mb-[80px]">
        {/* Left Section - Image */}
        <div className="w-full flex items-center justify-center">
          <div className="">
            <img
              src={assets.WhatWeDo_img}
              alt="What We Do Mockup"
              className="rounded-lg h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="flex h-[450px] md:h-auto">
          <ul className="flex w-full flex-col justify-between">
            {services.map((service) => (
              <li key={service.id}>
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-xl text-white">{service.title}</h3>
                  <img
                    onClick={() => toggleDropdown(service.id)}
                    src={assets.dropdown_icon}
                    alt="Toggle Icon"
                    className={`w-4 h-4 cursor-pointer transition-transform duration-300 ${
                      openDropdown === service.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {openDropdown === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white mt-2">{service.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
