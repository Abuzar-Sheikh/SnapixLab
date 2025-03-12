import React from "react";
import assets from "../../assets/Services/assets"; // Assuming assets contains your icons

const Engineering = () => {
  const services = [
    {
      category: "Web Development",
      items: [
        {
          title: "Front-End Development (HTML, CSS, JavaScript)",
          icon: assets.webdev_1,
        },
        {
          title: "Back-End Development (PHP, Python, Ruby)",
          icon: assets.webdev_2,
        },
        {
          title:
            "Content Management System (CMS) Development (WordPress, Drupal)",
          icon: assets.webdev_3,
        },
        {
          title: "E-Commerce Platform Development (Magento, Shopify)",
          icon: assets.webdev_4,
        },
      ],
    },
    {
      category: "Mobile App Development",
      items: [
        {
          title: "Native iOS and Android App Development",
          icon: assets.appdev_1,
        },
        {
          title: "Cross-Platform App Development (React Native, Flutter)",
          icon: assets.appdev_2,
        },
        {
          title: "App Prototyping and UI/UX Design Integration",
          icon: assets.appdev_3,
        },
        {
          title: "App Testing, Deployment, and Maintenance",
          icon: assets.appdev_4,
        },
      ],
    },
    {
      category: "Custom Software Development",
      items: [
        { title: "Enterprise Software Development", icon: assets.softdev_1 },
        { title: "Custom Web Application Development", icon: assets.softdev_2 },
        {
          title: "Integration with Third-Party APIs and Systems",
          icon: assets.softdev_3,
        },
        {
          title: "Legacy System Modernization and Migration",
          icon: assets.softdev_4,
        },
      ],
    },
    {
      category: "Digital Marketing",
      items: [
        { title: "Enterprise Software Development", icon: assets.digMar_1 },
        { title: "Custom Web Application Development", icon: assets.digMar_2 },
        {
          title: "Integration with Third-Party APIs and Systems",
          icon: assets.digMar_3,
        },
        {
          title: "Legacy System Modernization and Migration",
          icon: assets.digMar_4,
        },
      ],
    },
  ];

  return (
    <section className="text-white">
      {/* ----------------------------- Engineering Section ----------------------------- */}
      <div className="sm:pt-[80px] pt-[20px] mx-[20px] sm:mx-[80px] border border-[#262626] border-[0.75px]">
        <div className="sm:px-[40px] px-[20px]">
          <div className="w-full text-4xl font-medium">Engineering</div>
          <p className="mt-2 font-[#E6E6E6]">
            Our engineering team combines technical expertise with a passion for
            innovation to build robust and scalable digital solutions.
          </p>
          <div className="sm:my-[40px] my-[20px] w-[230px] px-4 py-2 bg-[#262626] rounded text-white">
            Our engineering services include:
          </div>
        </div>

        <div className="border border-[0.75px] border-[#262626]">
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
export default Engineering;
