import React from "react";
import assets from "../../assets/Services/assets"; // Assuming assets is an object containing your icons

const Design = () => {
  const services = [
    {
      category: "User Experience (UX) Design",
      items: [
        { title: "User Research and Persona Development", icon: assets.ux_1 },
        {
          title: "Information Architecture and Wireframing",
          icon: assets.ux_2,
        },
        {
          title: "Interactive Prototyping and User Testing",
          icon: assets.ux_3,
        },
        { title: "UI Design and Visual Branding", icon: assets.ux_4 },
      ],
    },
    {
      category: "User Interface (UI) Design",
      items: [
        {
          title: "Intuitive and Visually Appealing Interface Design",
          icon: assets.ui_1,
        },
        { title: "Custom Iconography and Illustration", icon: assets.ui_2 },
        { title: "Typography and Color Palette Selection", icon: assets.ui_3 },
        { title: "Responsive Design for Various Devices", icon: assets.ui_4 },
      ],
    },
    {
      category: "Branding and Identity",
      items: [
        {
          title: "Logo Design and Visual Identity Development",
          icon: assets.identity_1,
        },
        { title: "Brand Strategy and Positioning", icon: assets.identity_2 },
        { title: "Brand Guidelines and Style Guides", icon: assets.identity_3 },
        {
          title:
            "Marketing Collateral Design (Brochures, Business Cards, etc.)",
          icon: assets.identity_4,
        },
      ],
    },
  ];

  return (
    <section className="text-white">
      {/* ----------------------------- Heading ----------------------------- */}
      <div className="mx-[20px] h-auto gap-4 flex flex-col items-center justify-center py-[64px]">
        <p className="font-[16px] text-blue-700">Our Services</p>
        <h2 className="text-4xl md:text-6xl w-full text-center">
          Services We Offer
        </h2>
        <p className="sm:w-[60%] text-center font-[18px]">
          We provide design, engineering, and project management solutions to
          help businesses grow. From UI/UX to web and app development, we create
          seamless digital experiences aligned with your brand.
        </p>
      </div>

      {/* ----------------------------- Design Section ----------------------------- */}
      <div className="sm:pt-[80px] pt-[20px] mx-[20px] sm:mx-[80px] border border-[#262626] border-[0.75px]">
        <div className="sm:px-[40px] px-[20px]">
          <div className="w-full text-4xl font-medium">Design</div>
          <p className="mt-2 font-[#E6E6E6]">
            Our design services focus on creating user-centered experiences that
            are visually appealing, intuitive, and engaging. We blend creativity
            with strategy to deliver impactful solutions for web, mobile, and
            branding.
          </p>
          <div className="sm:my-[40px] my-[20px] w-[230px] px-4 py-2 bg-[#262626] rounded text-white">
            Our design services include:
          </div>
        </div>

        <div className="border-[0.75px] border-[#262626]">
          {services.map((section, index) => (
            <Section
              key={index}
              title={section.category}
              items={section.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, items }) => (
  <div>
    <h2 className="text-xl font-[#262626] sm:p-[40px] p-[20px]">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {items.map((item, index) => (
        <Service key={index} title={item.title} icon={item.icon} />
      ))}
    </div>
  </div>
);

const Service = ({ title, icon }) => (
  <div className="flex flex-col border border-[#262626] border-[0.75px] gap-[22.5px] px-[20px] py-[40px] sm:p-[40px] hover:bg-gray-900 transition-all duration-300">
    <div className="w-10 h-10">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-10 h-10 object-contain border border-[#262626] border-[2px] p-1 rounded"
      />
    </div>
    <p className="text-[#E6E6E6]">{title}</p>
  </div>
);

export default Design;
