import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const form = e.target;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Successful submission, navigate to your page
        navigate("/projects");
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };
  return (
    <div className="my-[20px] sm:my-[40px] flex justify-center items-center p-4">
      <div
        className="mx-[20x] sm:mx-[40px] rounded-3xl bg-cover flex items-center justify-center sm:py-20"
        style={{ backgroundImage: `url(${assets.bg_form})` }}
      >
        <div className="w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-8 space-y-10 justify-center items-center z-100">
          {/* -------------------------------------- Left Side -------------------------------------- */}
          <div className="flex flex-col gap-16 h-[50%] justify-between">
            {/* Left Section */}
            <div className="flex flex-col justify-center items-start rounded-xl">
              <h1 className="text-4xl md:text-6xl font-medium text-white mb-4 md:w-2/3">
                Let's Work Together!
              </h1>
              <p className="text-white md:mb-6 md:w-3/4">
                Have a project in mind? We'd love to hear from you! Reach out to
                us, and let's start creating something amazing together.
              </p>
            </div>
          </div>

          {/* --------------------------------------Right Section - Contact Form-------------------------------------- */}
          <div className="flex flex-col justify-center p-6 lg:p-10 rounded-xl shadow-lg bg-[#262626]/50 backdrop-blur-[10px]">
            <h2 className="text-2xl text-white mb-6">Contact Us</h2>
            <form
              action="https://formspree.io/f/myzekvqo"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                className="w-full py-3 px-4 bg-[#BBBBBB]/15 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                className="w-full py-3 px-4 bg-[#BBBBBB]/15 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget"
                  className="w-1/2 py-3 px-4 bg-[#BBBBBB]/15 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="text"
                  name="services"
                  placeholder="Services"
                  className="w-1/2 py-3 px-4 bg-[#BBBBBB]/15 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <textarea
                name="new design"
                placeholder="New Design.."
                rows="4"
                className="w-full py-3 px-4 bg-[#BBBBBB]/15 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-br-[20px] hover:rounded-br-[0px] transition-all">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
