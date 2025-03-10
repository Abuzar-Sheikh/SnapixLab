import React from "react";

const WorkWithUs = () => {
  return (
    <div className="max-w-full h-auto mt-[50px] flex flex-col items-center justify-center py-10 rounded-md bg-blue-700">
      <div className="flex justify-between items-center w-full px-8 md:px-20">
        {/* Left Section */}
        <div className="text-white space-y-6">
          <div className="flex flex-row gap-4 items-center">
            <div className="w-8 h-8 flex item-center justify-betweem rounded-full border-white">
              <div className="w-7 h-7 rounded-full bg-white"></div>
            </div>
            <span className="md:text-3xl text-xl">Work with Us</span>
          </div>
          <p className="max-w-[700px] text-white text-xl">
            At Snapix Lab, we specialize in crafting user-focused designs and
            impactful visuals. Our mission is to empower businesses with
            innovative solutions that drive success and inspire creativity.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-6xl font-500 text-end text-white whitespace-nowrap">
          <span>Who</span>
          <span>Are</span> <br />
          <span>We?</span>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
