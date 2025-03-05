import React from "react";
import bg_form from "../assets/bg_form.jpg";
import instagram_logo from "../assets/instagram_logo.png";
import linkedin_logo from "../assets/linkedin_logo.png";
import whatsapp_logo from "../assets/whatsapp_logo.png";
import facebook_logo from "../assets/facebook_logo.png";
import behance_logo from "../assets/behance_logo.png";

const Contact = () => {
  return (
    <div className="my-[80px] flex justify-center items-center p-4">
      <div
        className="w-[90%] rounded-3xl bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${bg_form})` }}
      >
        <div className="w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-8 z-100">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start p-8 rounded-xl">
            <h1 className="text-4xl md:text-6xl font-medium text-white mb-4 md:w-2/3">
              Let's Work Together!
            </h1>
            <p className="text-white md:mb-6 md:w-3/4">
              Have a project in mind? We'd love to hear from you! Reach out to
              us, and let's start creating something amazing together.
            </p>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:p-12 rounded-xl shadow-xl lg:mt-16 p-4 bg-gray-900/80">
            <form className="space-y-2">
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <input
                type="email"
                placeholder="jane@framer.com"
                className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <input
                type="text"
                placeholder="Budget"
                className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <input
                type="text"
                placeholder="Logo Design"
                className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <textarea
                placeholder="New Design.."
                rows="4"
                className="w-full py-3 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              ></textarea>
              <button className="mt-4 w-full bg-blue-700 text-white py-4 rounded-br-[20px] hover:rounded-br-[0px] transition duration-300  transition-all">
                Submit
              </button>
            </form>
          </div>
          {/* Social media icons */}
          <div className="flex space-x-4 flex-end mb-10">
            <a href="#">
              <img className="w-6" src={instagram_logo} alt="" />
            </a>
            <a href="#">
              <img className="w-6" src={linkedin_logo} alt="" />
            </a>
            <a href="#">
              <img className="w-6" src={facebook_logo} alt="" />
            </a>
            <a href="#">
              <img className="w-6" src={behance_logo} alt="" />
            </a>
            <a href="#">
              <img className="w-6" src={whatsapp_logo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
