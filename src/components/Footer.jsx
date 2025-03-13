import React from "react";
import logo from "../assets/logo.png";
import linkedin_logo from "../assets/linkedin_logo.png";
import instagram_logo from "../assets/instagram_logo.png";
import facebook_logo from "../assets/facebook_logo.png";
import behance_logo from "../assets/behance_logo.png";
import whatsapp_logo from "../assets/whatsapp_logo.png";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="mx-auto flex gap-6 justify-between space-y-6 md:space-y-0 border border-[#262626] border-[0.75px] px-[20px] lg:px-[80px] py-[40px] items-center">
        {/* Logo Section */}
        <div className="flex items-center justify-center md:justify-start">
          <img
            src={logo} // Replace with the actual logo path
            alt="SnapixLab Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center">
          <ul className="flex flex-col md:flex-row gap-4 text-center">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="portflio" className="hover:text-blue-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="contact" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact Section */}
        <div className="flex flex-col md:flex-row text-center gap-3 items-center justify-center border border-[#262626] border-[0.75px] rounded p-4">
          <p className="text-lg sm:text-base">Stay connected</p>
          <div className="flex gap-2 flex-col sm:flex-row">
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
      </div>

      {/* Contact Details */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-[2fr_1fr] space-y-6 sm:space-y-0 border border-[#262626] border-[0.75px] px-[20px] md:px-[80px] py-[40px] flex items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
          <a
            href="mailto:hello@squareup.com"
            className="flex items-center gap-2 hover:text-gray-400"
          >
            <img src={mail} alt="Email" className="h-5" />
            hello@squareup.com
          </a>
          <a
            href="tel:+91918132309"
            className="flex items-center gap-2 hover:text-gray-400"
          >
            <img src={phone} alt="Phone" className="h-5" />
            +91 91813 23 2309
          </a>
        </div>
        <div className="m-auto text-center">
          <p className="text-gray-500">
            © 2025 SnapixLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
