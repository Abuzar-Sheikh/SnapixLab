import React from "react";
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_3 from "../assets/img_3.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_6 from "../assets/img_6.jpg";

// Array of projects and images with buttons
// const projects = [
//   {
//     id: 1,
//     title: "Research",
//     image: img_1,
//     buttons: ["Research", "Branding"],
//   },
//   {
//     id: 2,
//     title: "Branding",
//     image: img_2,
//     buttons: ["Research", "Branding", "Design"],
//   },
//   {
//     id: 3,
//     title: "Design",
//     image: img_3,
//     buttons: ["Research", "Branding"],
//   },
//   {
//     id: 4,
//     title: "Development",
//     image: img_4,
//     buttons: ["Design", "Development"],
//   },
//   {
//     id: 5,
//     title: "Marketing",
//     image: img_5,
//     buttons: ["Design", "Development"],
//   },
//   {
//     id: 6,
//     title: "Launch",
//     image: img_6,
//     buttons: ["Development", "Launch", "Marketing"],
//   },
// ];

const OurWorkSpeaks = () => {
  return (
    <section className="flex flex-col items-center justify-center my-[40px] px-[40px] md:my-[80px] md:px-[80px] border-b text-white">
      <div className="w-[100%] flex flex-col mb-[40px]">
        <h2 className="text-4xl md:text-6xl w-full md:w-2/3">
          Our Work Speaks
        </h2>
        <p className="text-lg text-left w-full md:w-3/6">
          Take a look at some of our best projects that showcase our creativity,
          innovation, and attention to detail.
        </p>
      </div>

      {/* Images Grid */}
      <div className="w-full flex flex-col gap-5 mb-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-[4fr_8fr] gap-5">
          {/* Image 1 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={img_1}
              alt="Image 1"
              className="w-full h-56 md:h-72 lg:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 py-4 px-1 flex space-x-2 flex flex-col gap-1 sm:flex-row">
              <button className="text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Research
              </button>
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Branding
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={img_2}
              alt="Image 2"
              className="w-full h-56 md:h-72 lg:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 py-4 px-1 flex space-x-2 flex flex-col gap-1 sm:flex-row">
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Research
              </button>
              <button className="text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Branding
              </button>
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Design
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[8fr_4fr] gap-5">
          {/* Image 3 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={img_3}
              alt="Image 3"
              className="w-full sm:h-56 md:h-72 lg:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 py-4 px-1 flex space-x-2 flex flex-col gap-1 sm:flex-row">
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Research
              </button>
              <button className="text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Developement
              </button>
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Design
              </button>
            </div>
          </div>
          {/* Image 4 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={img_4}
              alt="Image 4"
              className="w-full h-56 md:h-72 lg:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 py-4 px-1 flex space-x-2 flex flex-col gap-1 sm:flex-row">
              <button className="text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Design
              </button>
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md text-center">
                Developement
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[4fr_8fr] gap-5">
          {/* Image 5 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={img_5}
              alt="Image 1"
              className="w-full h-56 md:h-72 lg:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 py-4 px-1 flex space-x-2 flex flex-col gap-1 sm:flex-row">
              <button className="text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Design
              </button>
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Developement
              </button>
            </div>
          </div>

          {/* Image 6 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={img_6}
              alt="Image 2"
              className="w-full h-56 md:h-72 lg:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 py-4 px-1 flex space-x-2 flex flex-col gap-1 sm:flex-row">
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Design
              </button>
              <button className="hidden md:flex text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Developement
              </button>
              <button className="text-xs bg-gray-700 hover:bg-blue-700 duration-300 transition-all text-white px-3 py-2 rounded-md">
                Marketting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSpeaks;
