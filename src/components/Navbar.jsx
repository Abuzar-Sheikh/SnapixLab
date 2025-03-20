import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-center h-[80px] z-500">
      <div className="flex items-center justify-between w-[95%] py-5 font-medium text-white relative">
        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} className="w-36" alt="Snapix Lab Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-md font-normal text-white">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-white hidden" />
          </NavLink>

          <NavLink to="/services" className="flex flex-col items-center gap-1">
            <p>Services</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-white hidden" />
          </NavLink>

          <NavLink to="/portfolio" className="flex flex-col items-center gap-1">
            <p>Projects</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-white hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact Us</p>
            <hr className="w-3/4 border-none h-[1.5px] bg-white hidden" />
          </NavLink>
        </ul>

        {/* Contact Us Button */}
        <div className="hidden sm:flex items-center gap-6">
          <Link to="/contact" className="relative">
            <button className="bg-blue-700 hover:rounded-br-[0px] text-white px-6 py-2 rounded-br-[20px] transition-all">
              Book a Call
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button onClick={() => setVisible(!visible)}>
            <img src={assets.menu} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-white text-gray-600 z-10 transition-transform duration-300 ease-in-out ${
            visible ? "translate-x-0 w-64" : "translate-x-full w-0"
          }`}
        >
          {/* Close Menu Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center cursor-pointer gap-4 p-3 border-b"
          >
            <img
              className="h-4 rotate-180"
              src={assets.menu_icon}
              alt="Close"
            />
            <p>Back</p>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col text-sm">
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 px-4 hover:bg-gray-200 border-b"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 px-4 hover:bg-gray-200 border-b"
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 px-4 hover:bg-gray-200 border-b"
              to="/portfolio"
            >
              Projects
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-3 px-4 hover:bg-gray-200"
              to="/contact"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
