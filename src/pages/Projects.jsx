import React from "react";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import arrow from "../assets/Portfolio/arrow.svg";
import CleanGo from "../assets/Portfolio/CleanGo.jpg";
import Social from "../assets/Portfolio/Social.jpg";
import Hihami from "../assets/Portfolio/Hihami.jpg";
import ChemTrack from "../assets/Portfolio/ChemTrack.jpg";
import Alter from "../assets/Portfolio/Alter.jpg";
import TaskFlow from "../assets/Portfolio/TaskFlow.jpg";
import Dream from "../assets/Portfolio/Dream.jpg";
import Brewed from "../assets/Portfolio/Brewed.jpg";

const Portfolio = () => {
  const services = [
    {
      category: "Mobile App for On-Demand Cleaning Services",
      items: [
        {
          title: "CleanGo",
          description:
            "CleanGo is an on-demand mobile app for washing, cleaning, and drying services. The app connects customers with drivers who pick up orders and deliver them to designated locations. Key features include real-time order tracking, easy booking, and secure payment options, ensuring a seamless and efficient user experience.",
          image: CleanGo,
          buttons: ["Design", "Development"],
        },
      ],
    },
    {
      category: "Project Management Software",
      items: [
        {
          title: "TaskFlow",
          description:
            "TaskFlow is a comprehensive project management tool designed to help teams collaborate efficiently. The platform enables users to create, assign, and track tasks while managing workflows seamlessly. Key features include task scheduling, progress tracking, team collaboration, and real-time updates, ensuring enhanced productivity and project organization.",
          image: TaskFlow,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Chemical Supply Management System",
      items: [
        {
          title: "ChemTrack",
          description:
            "ChemTrack is a specialized chemical supply management system designed for industries to track inventory, manage suppliers, and streamline procurement processes. It ensures compliance with safety regulations, optimizes stock levels, and enhances overall operational efficiency through real-time monitoring and automated workflows.",
          image: ChemTrack,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Website for Café & Coffee Brand",
      items: [
        {
          title: "Brewed to Perfection",
          description:
            "Brewed to Perfection is a visually appealing and user-friendly website designed for a premium coffee brand. The website showcases a variety of coffee blends, highlights the brand’s story, and provides an intuitive browsing experience for customers. With engaging visuals and a seamless layout, it enhances brand presence and customer engagement.",
          image: Brewed,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Mobile App for Social Networking",
      items: [
        {
          title: "Social",
          description:
            "Social is a dynamic and interactive mobile app designed to connect users through photo and video sharing, real-time messaging, and engaging social interactions. The app features a personalized feed, user profiles, and an intuitive interface that enhances the social networking experience. With seamless content sharing and community engagement tools, Social empowers users to stay connected and express themselves effortlessly.",
          image: Social,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "AI-Powered Marketing Automation Website",
      items: [
        {
          title: "Alter",
          description:
            "Alter is an AI-powered marketing automation platform designed to help businesses enhance engagement, optimize conversions, and streamline their marketing strategies. The platform features real-time analytics, automated workflows, and AI-driven insights to improve decision-making. With an intuitive dashboard and seamless integrations, Alter empowers businesses to maximize efficiency and achieve marketing success effortlessly.",
          image: Alter,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Website for a Pizza Restaurant",
      items: [
        {
          title: "Dream Homes Realty",
          description:
            "PizzaDelight is a modern and visually appealing website designed for a pizza restaurant. The website showcases a variety of delicious pizzas, special deals, and a seamless online ordering system. With an intuitive user interface, menu browsing, and easy checkout options, it enhances customer experience and boosts restaurant sales.",
          image: Dream,
          buttons: ["Research", "Design", "Development"],
        },
      ],
    },
    {
      category: "Cryptocurrency Trading Platform",
      items: [
        {
          title: "Hihami Exchange",
          description:
            "Hihami Exchange is a futuristic and secure cryptocurrency trading platform designed for seamless digital asset management. The platform allows users to buy, sell, and trade leading cryptocurrencies like Bitcoin, Ethereum, Stellar, and Solana. With a sleek interface, real-time market updates, and an intuitive user experience, Hihami Exchange empowers users to navigate the world of crypto finance with confidence.",
          image: Hihami,
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
          A showcase of our latest projects, where design meets functionality.
          Explore how we craft seamless user experiences through innovative
          apps, websites, and digital solutions.
        </p>
      </div>

      <div className="sm:pt-[80px] pt-[20px] mx-[20px] md:mx-[80px] border border-[#262626] border-[0.75px]">
        <div className="sm:px-[40px] px-[20px]">
          <div className="w-full text-4xl font-medium">At SnapixLab</div>
          <p className="mt-2 text-[#E6E6E6]">
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
      <CallToAction />
      <Contact />
    </section>
  );
};

const Section = ({ title, items }) => (
  <div className="border border-[#262626] border-[0.75px] hover:bg-gray-900 transition-all duration-300">
    <h2 className="md:text-lg lg:text-xl  text-[#98989A] font-medium sm:p-[40px] p-[20px] border border-[#262626] border-[0.75px]">
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
    <h6 className="mt-4 text-lg font-semibold text-white text-[#E6E6E6]">
      {title}
    </h6>
    <div className="flex justify-between items-center">
      <div className="flex flex-wrap gap-2 mt-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-[#262626] text-[#98989A] px-3 py-1 text-sm rounded"
          >
            {button}
          </button>
        ))}
      </div>
      <div className="hidden sm:flex hover:translate-x-1 transition-all relative top-2 bg-[#262626] p-2 rounded">
        <img src={arrow} alt="arrow icon" className="w-4 h-4" />
      </div>
    </div>
    <p className="text-[#98989A] mt-2">{description}</p>
  </div>
);

export default Portfolio;
