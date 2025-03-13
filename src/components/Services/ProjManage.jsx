import React from "react";
import assets from "../../assets/Services/assets"; // Assuming your icons are stored here

const ProjManage = () => {
  const services = [
    {
      category: "Project Planning and Scoping",
      items: [
        {
          title: "Requirements Gathering and Analysis",
          icon: assets.scoping_1,
        },
        {
          title: "Project Roadmap and Timeline Development",
          icon: assets.scoping_2,
        },
        {
          title: "Resource Allocation and Task Assignment",
          icon: assets.scoping_3,
        },
        {
          title: "Risk Assessment and Mitigation Strategies",
          icon: assets.scoping_4,
        },
      ],
    },
    {
      category: "Agile Development",
      items: [
        { title: "Iterative Development and Sprints", icon: assets.agile_1 },
        {
          title: "Scrum or Kanban Methodology Implementation",
          icon: assets.agile_2,
        },
        { title: "Regular Progress Updates and Demos", icon: assets.agile_3 },
        {
          title: "Continuous Improvement and Feedback Incorporation",
          icon: assets.agile_4,
        },
      ],
    },
    {
      category: "Quality Assurance and Testing",
      items: [
        { title: "Test Planning and Execution", icon: assets.testing_1 },
        { title: "Functional and Usability Testing", icon: assets.testing_2 },
        { title: "Performance and Security Testing", icon: assets.testing_3 },
        { title: "Bug Tracking and Issue Resolution", icon: assets.testing_4 },
      ],
    },
  ];

  return (
    <section className="text-white">
      {/* ----------------------------- Project Management Section ----------------------------- */}
      <div className="sm:pt-[80px] pt-[20px] mx-[20px] sm:mx-[80px] border border-[#262626] border-[0.75px]">
        <div className="sm:px-[40px] px-[20px]">
          <div className="w-full text-4xl font-medium">Project Management</div>
          <p className="mt-2 font-[#E6E6E6]">
            Our experienced project management team ensures that your projects
            are delivered on time, within budget, and according to your
            specifications.
          </p>
          <div className="sm:my-[40px] my-[20px] w-[280px] text-sm px-2 py-2 bg-[#262626] rounded text-white">
            Our project management services include:
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

export default ProjManage;
