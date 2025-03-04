import React, { useState } from "react";
import WhatWeDo_img from "../assets/WhatWeDo_img.jpeg";

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
    <div className="my-[40px] md:my-[80px] flex items-center justify-center text-white flex-col border-b">
      <div className="px-[40px] md:px-[80px] w-full flex md:flex-row flex-col items-center gap-2">
        <h2 className="text-4xl md:text-6xl w-full md:w-2/3">What We Do?</h2>
        <p className="text-lg w-full md:w-3/6">
          We offer a range of professional design and development services
          tailored to meet your business needs.
        </p>
      </div>

      <div className="flex w-[90%] flex-col md:flex-row justify-between my-8">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full md:w-[90%] h-auto w-full">
            <img
              src={WhatWeDo_img} // Replace with actual image path
              alt="What We Do Mockup"
              className="rounded-lg h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="w-full px-[40px] py-[40px] md:py-[80px] md:w-1/2">
          <ul className="flex flex-col sm:space-y-2 md:space-y-5 lg:space-y-9">
            {services.map((service) => (
              <li key={service.id}>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl text-white">{service.title}</h3>
                  <button
                    onClick={() => toggleDropdown(service.id)}
                    className="text-gray-600 hover:text-white focus:outline-none"
                  >
                    {openDropdown === service.id ? "🔼" : "🔽"}
                  </button>
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
