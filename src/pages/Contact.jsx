import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import add from "../assets/add.svg";
import linkedin_logo from "../assets/linkedin_logo.png";
import instagram_logo from "../assets/instagram_logo.png";
import facebook_logo from "../assets/facebook_logo.png";
import behance_logo from "../assets/behance_logo.png";
import whatsapp_logo from "../assets/whatsapp_logo.png";
import CallToAction from "../components/CallToAction";

const Contact = () => {
  const [budget, setBudget] = useState([1000, 5000]);

  const handleSliderChange = (values) => {
    setBudget(values);
  };

  const faqData = [
    {
      id: 1,
      question: "What services does SnapixLab provide?",
      answer:
        "SnapixLab offers a range of services, including UI/UX design, branding, website, and mobile app design, etc.",
    },
    {
      id: 2,
      question: "How can SnapixLab help my business?",
      answer:
        "SnapixLab helps by providing expert design and tech solutions tailored to your business needs.",
    },
    {
      id: 3,
      question: "What is the typical project timeline?",
      answer:
        "The project timeline depends on the scope and complexity, but we aim to deliver projects efficiently.",
    },
    {
      id: 4,
      question: "Can I request custom services?",
      answer: "Yes, we offer custom solutions tailored to your specific needs.",
    },
    {
      id: 5,
      question: "Can I request custom services?",
      answer:
        "Do you offer ongoing support and maintenance after project completion?",
    },
    {
      id: 6,
      question: "Can I request custom services?",
      answer: "Can you work with existing designs or development frameworks?",
    },
    {
      id: 7,
      question: "Can I request custom services?",
      answer: "How involved will I be in the design process?",
    },
    {
      id: 8,
      question: "Can I request custom services?",
      answer: "Can you help with website or app maintenance and updates?",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-white">
      <div className="mx-[20px] h-auto gap-4 flex flex-col items-center justify-center py-[64px]">
        <p className="font-[16px] text-blue-700">Contact</p>
        <h2 className="text-4xl md:text-6xl w-full text-center">Contact Us</h2>
        <p className="sm:w-[60%] text-center font-[18px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni
          sapiente ducimus aliquam iusto quam quidem accusamus aperiam vitae
          quasi.
        </p>
      </div>

      <div className="mx-[20px] md:mx-[80px] border border-[#262626] border-[0.75px]">
        {/* Email and Phone Section */}

        <div className="flex flex-col md:flex-row justify-center items-center py-[40px] gap-4 border-b border-[#262626] border-[0.75px]">
          <a
            href=""
            className="bg-[#262626] px-6 py-3 rounded-md gap-3 flex items-center justify-center text-[#E6E6E6]"
          >
            <img src={mail} alt="" />
            hello@squareup.com
          </a>
          <a
            href=""
            className="bg-[#262626] px-6 py-3 gap-3 rounded-md flex items-center justify-center text-[#E6E6E6]"
          >
            <img src={phone} alt="" />
            +91 91813 23 2309
          </a>
        </div>

        <div className="sm:pt-[80px] pt-[20px] mx-[20px] lg:mx-[200px] pb-[20px] md:p-[60px] border border-[#262626] border-[0.75px]">
          <form className="space-y-[30px]">
            {/* Full Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              <div className="bg-[#262626] border border-[#98989A]/30 border-[0.75px] rounded px-[30px] py-[18px] gap-[15px]">
                <label className="block mb-2 font-medium text-[16px] text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="w-full py-3 rounded-md border-[#98989A]/30 border-b-[0.75px] bg-transparent text-[#656567] text-[13.5px] outline-none"
                />
              </div>
              <div className="bg-[#262626] border border-[#98989A]/30 border-[0.75px] rounded px-[30px] py-[18px] gap-[15px]">
                <label className="block mb-2 font-medium text-[16px] text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Type here"
                  className="w-full py-3 rounded-md border-[#98989A]/30 border-b-[0.75px] bg-transparent text-[#656567] text-[13.5px] outline-none"
                />
              </div>
            </div>

            {/* CheckBoxes */}
            <div className="bg-[#262626] border border-[#98989A]/30 border-[0.75px] rounded p-[30px] space-y-[30px]">
              <div className="block mb-2 font-medium text-[16px] text-sm text-white">
                Why are you contacting us?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] appearance-none bg-[#333333] border-[#98989A]/40 border-[0.75px] rounded"
                  />
                  <span className="text-white">Design Service</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] appearance-none bg-[#333333] border-[#98989A]/40 border-[0.75px] rounded"
                  />
                  <span className="text-white">Marketing Services</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] appearance-none bg-[#333333] border-[#98989A]/40 border-[0.75px] rounded"
                  />
                  <span className="text-white">Development Services</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-[20px] h-[20px] appearance-none bg-[#333333] border-[#98989A]/40 border-[0.75px] rounded"
                  />
                  <span className="text-white">Others</span>
                </label>
              </div>
            </div>

            {/* Budget Section */}
            <div className="bg-[#262626] border border-[#98989A]/30 border-[0.75px] rounded p-[30px] space-y-[10px]">
              <div className="block mb-2 font-medium text-[16px] text-sm text-white">
                Your Budget{" "}
              </div>
              <p className="text-gray-400 pb-[30px]">
                Slide to indicate your budget range
              </p>
              <div>
                <div className="flex justify-between text-sm text-white">
                  <span>${budget[0]}</span>
                  <span>${budget[1]}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Slider
                    range
                    min={100}
                    max={5000}
                    value={budget}
                    onChange={handleSliderChange}
                    trackStyle={[{ backgroundColor: "#2563EB", height: 6 }]}
                    handleStyle={[
                      {
                        borderColor: "#2563EB",
                        height: 20,
                        width: 20,
                        marginTop: -7,
                        backgroundColor: "#fff",
                      },
                      {
                        borderColor: "[#98989A]",
                        height: 20,
                        width: 20,
                        marginTop: -7,
                        backgroundColor: "#fff",
                      },
                    ]}
                    railStyle={{ backgroundColor: "#333", height: 6 }}
                  />
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="bg-[#262626] border border-[#98989A]/30 border-[0.75px] rounded px-[30px] py-[18px] gap-[15px]">
              <label className="block mb-2 font-medium text-[16px] text-sm">
                Message
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="w-full py-3 rounded-md border-[#98989A]/30 border-b-[0.75px] bg-transparent text-[#656567] text-[13.5px] outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full text-center">
              <button className="bg-blue-700 hover:bg-blue-600 text-white px-3 sm:px-6 py-3 text-center rounded w-[30%]">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col lg:flex-row justify-between py-5 gap-5 items-center px-4 lg:px-[200px] md:px-[60px] border border-[#262626] border-[0.75px]">
          {/* Operating Days Section */}
          <div className="flex flex-col sm:flex-row gap-3 items-center text-center justify-center">
            <p className="text-lg sm:text-base">Operating Days</p>
            <div className="bg-[#262626] text-white px-4 py-2 rounded">
              Monday to Friday
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="flex sm:flex-row text-center gap-2 items-center justify-center border border-[#262626] border-[0.75px] rounded p-2 px-4">
            <p className="text-lg sm:text-base">Stay connected</p>

            <a href="https://www.facebook.com/share/151JkB4fwo/">
              <img
                className="w-8 rounded bg-gradient-to-b from-[#242424] to-transparent p-[4px]"
                src={facebook_logo}
                alt="Facebook"
              />
            </a>
            <a href="https://www.instagram.com/snapixlab?igsh=MWJwdWNvNzBvMjFzMA==">
              <img
                className="w-8 rounded bg-gradient-to-b from-[#242424] to-transparent p-[4px]"
                src={instagram_logo}
                alt="Instagram"
              />
            </a>
            <a href="https://www.linkedin.com/company/snapix-lab/">
              <img
                className="w-8 rounded bg-gradient-to-b from-[#242424] to-transparent p-[4px]"
                src={linkedin_logo}
                alt="LinkedIn"
              />
            </a>

            <a href="https://wa.me/923404816832">
              <img
                className="w-8 rounded bg-gradient-to-b from-[#242424] to-transparent p-[4px]"
                src={whatsapp_logo}
                alt="LinkedIn"
              />
            </a>

            <a href="https://www.behance.net/snapixlab">
              <img
                className="w-8 rounded bg-gradient-to-b from-[#242424] to-transparent p-[4px]"
                src={behance_logo}
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>

        {/* Asked Questions */}
        <div className="text-center py-[40px] gap-4 border-b border-[#262626] border-[0.75px]">
          <div className="w-full text-4xl font-medium">
            Frequently asked questions
          </div>

          <p className="mt-2 text-[#E6E6E6]">
            Still you have any questions? Contact our Team via
            hello@squareup.com
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 text-white py-[40px]">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="p-[20px] border border-[#333] flex flex-col"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-10">
                  <span className="bg-gradient-to-b from-[#242424] to-transparent p-4 rounded text-[21px] font-medium">{`0${faq.id}`}</span>
                  <span>{faq.question}</span>
                </div>
                <span
                  className={`text-xl cursor-pointer transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                  onClick={() => toggleAnswer(index)}
                >
                  <img src={add} alt="Icon" className="inline-block" />{" "}
                </span>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm text-[#E6E6E6]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default Contact;
