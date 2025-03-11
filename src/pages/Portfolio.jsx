import React from "react";
import arrow from "../assets/Portfolio/arrow.svg";
import ChicBoutique from "../assets/Portfolio/ChicBoutique.jpg";
import ConnectCRM from "../assets/Portfolio/ConnectCRM.jpg";
import DreamHome from "../assets/Portfolio/DreamHome.jpg";
import EduConnect from "../assets/Portfolio/EduConnect.jpg";
import EventMasters from "../assets/Portfolio/EventMasters.jpg";
import FitLife from "../assets/Portfolio/FitLife.jpg";
import HungryBites from "../assets/Portfolio/HungryBites.jpg";
import Logistic from "../assets/Portfolio/Logistic.jpg";
import ProTech from "../assets/Portfolio/ProTech.jpg";
import WonderWise from "../assets/Portfolio/WonderWise.jpg";

const Portfolio = () => {
  const services = [
    {
      category: "E-Commerce Platform for Fashion Hub",
      items: [
        {
          title: "Chic Boutique",
          description:
            "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.",
          image: ChicBoutique,
          buttons: ["Design", "Development"],
        },
      ],
    },
    {
      category: "Mobile App for Food Delivery Service",
      items: [
        {
          title: "HungryBites",
          description:
            "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options.",
          image: HungryBites,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Booking and Reservation System for Event Management",
      items: [
        {
          title: "EventMasters",
          description:
            "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.",
          image: EventMasters,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Custom Software for Workflow Automation",
      items: [
        {
          title: "ProTech Solutions",
          description:
            "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.",
          image: ProTech,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Web Portal for Real Estate Listings",
      items: [
        {
          title: "Dream Homes Realty",
          description:
            "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
          image: DreamHome,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Mobile App for Fitness Tracking",
      items: [
        {
          title: "FitLife Tracker",
          description:
            "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
          image: FitLife,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Custom Software for Supply Chain Management",
      items: [
        {
          title: "Global Logistics Solutions",
          description:
            "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.",
          image: Logistic,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Educational Platform for Online Learning",
      items: [
        {
          title: "EduConnect",
          description:
            "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.",
          image: EduConnect,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Mobile App for Travel Planning",
      items: [
        {
          title: "WanderWise",
          description:
            "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations.",
          image: WonderWise,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Web Application for Customer Relationship Management",
      items: [
        {
          title: "ConnectCRM",
          description:
            "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.",
          image: ConnectCRM,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
  ];

  return (
    <section className="text-white">
      {/* ----------------------------- Heading ----------------------------- */}
      <div className="mx-[20px] h-auto gap-4 flex flex-col items-center justify-center py-[64px]">
        <p className="font-[16px] text-blue-700">Portfolio</p>
        <h2 className="text-4xl md:text-6xl w-full text-center">Our Work</h2>
        <p className="sm:w-[60%] text-center font-[18px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab magni
          sapiente ducimus aliquam iusto quam quidem accusamus aperiam vitae
          quasi.
        </p>
      </div>

      <div className="sm:pt-[80px] pt-[20px] mx-[20px] md:mx-[80px] border border-[#262626] border-[0.75px]">
        <div className="sm:px-[40px] px-[20px]">
          <div className="w-full text-4xl font-medium">At SnapixLab</div>
          <p className="mt-2 font-[#E6E6E6]">
            We have had the privilege of working with a diverse range of clients
            and delivering exceptional digital products that drive success.
          </p>
          <div className="sm:my-[40px] my-[20px] w-[280px] sm:w-[345px] px-4 py-2 bg-[#262626] rounded text-white">
            Here are ten examples of our notable works:{" "}
          </div>
        </div>
      </div>

      {/* ----------------------------- Services Grid ----------------------------- */}
      <div className="mx-[20px] md:mx-[80px] grid grid-cols-[1fr_1fr] border border-[#262626] border-[0.75px]">
        {services.map((section, index) => (
          <Section key={index} title={section.category} items={section.items} />
        ))}
      </div>
    </section>
  );
};

const Section = ({ title, items }) => (
  <div className="border border-[#262626] border-[0.75px] hover:bg-gray-900 transition-all duration-300">
    <h2 className="md:text-lg lg:text-xl font-[#262626] sm:p-[40px] p-[20px] border border-[#262626] border-[0.75px]">
      {title}
    </h2>
    <div className="p-">
      {items.map((item, index) => (
        <Service
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          buttons={item.buttons}
        />
      ))}
    </div>
  </div>
);

const Service = ({ title, description, image, buttons }) => (
  <div className="sm:p-12 p-5 relative">
    <div className="">
      <img
        src={image}
        alt={title}
        className="w-full h-[90%] object-cover rounded-xl"
      />
    </div>
    <h6 className="mt-4 text-lg font-semibold text-white ">{title}</h6>
    <div className="flex justify-between items-center">
      <div className="flex flex-wrap gap-2 mt-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-[#0f0f0f] border border-gray-600 text-white px-3 py-1 text-sm rounded"
          >
            {button}
          </button>
        ))}
      </div>
      <div className="hidden sm:flex hover:translate-x-1 transition-all relative top-2">
        <img src={arrow} alt="arrow icon" className="w-4 h-4" />
      </div>
    </div>
    <p className="text-[#E6E6E6] mt-2">{description}</p>
  </div>
);

export default Portfolio;
