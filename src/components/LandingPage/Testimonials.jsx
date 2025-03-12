import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Mohamad Youfa",
    role: "CEO at Blackhedge.io",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Dominique was very professional and skillful in his work. I really enjoyed working with him. He overdelivered, providing video tutorials and updates.",
  },
  {
    id: 2,
    name: "Simon Logho",
    role: "CEO at Fakogh",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "Dominique delivered a wonderful website in a very short time and helped me change everything I needed. I will definitely come back for another project!",
  },
  {
    id: 3,
    name: "Robin Seligmann",
    role: "CEO at SEO Secret",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Dominique is an expert when it comes to UX/UI design and SEO. We employ him for client projects, and the work is always of high standard and on time.",
  },
  {
    id: 4,
    name: "Jane Doe",
    role: "Founder at Designly",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "We were impressed by Dominique’s ability to design clean, beautiful interfaces and improve our UX. His work significantly improved user engagement on our platform.",
  },
  {
    id: 5,
    name: "Paul Stewart",
    role: "Marketing Head at Growthify",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "Dominique’s marketing strategies helped us grow our online presence dramatically. His designs for our landing pages have been top-notch, resulting in a huge conversion boost.",
  },
  {
    id: 6,
    name: "Aisha Khan",
    role: "CEO at WebWorks",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "We partnered with Dominique for a full redesign of our website. His process was smooth, and the final product was exactly what we needed to elevate our brand.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 3));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 3)); // Wrap around for the next 3 testimonials
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="bg-black text-white flex flex-col items-center border-b">
      <div className="flex flex-col md:flex-row w-full justify-between px-[40px] md:px-[80px] gaap-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl md:text-6xl w-full">What Our Clients Say?</h2>
          <p className="text-lg w-full mb-4 md:mb-0">
            Don’t just take our word for it. Here’s what our clients have to say
            about working with Our Company.
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center space-x-6">
          <button
            className="text-blue-700 border border-[3px] border-blue-700 text-2xl flex items-center justify-center hover:text-white hover:border-none w-14 h-14 rounded-[50%] hover:bg-blue-700"
            onClick={handlePrev}
          >
            ←
          </button>
          <button
            className="text-blue-700 border border-[3px] border-blue-700 text-2xl flex items-center justify-center hover:text-white hover:border-none w-14 h-14 rounded-[50%] hover:bg-blue-700"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>

      {/* Testimonial Display (3 per row) */}
      <div className="w-[90%] my-8 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-[80px]">
        {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={testimonialVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="p-6 rounded-lg bg-gray-900 shadow-lg flex flex-col justify-between transition-all duration-300 transform"
          >
            <p className="text-gray-300 text-lg mb-4">{testimonial.text}</p>
            <div className="flex flex-col items-center space-y-4"></div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Arrow Buttons for small to med screen */}
      <div className="md:hidden flex space-x-6">
        <button
          className="text-blue-700 border border-blue-700 hover:text-white hover:border-none w-14 h-14 rounded-[50%] p-3 hover:bg-blue-700"
          onClick={handlePrev}
        >
          ←
        </button>
        <button
          className="text-blue-700 border border-blue-700 hover:text-white hover:border-none w-14 h-14 rounded-[50%] p-3 hover:bg-blue-700"
          onClick={handleNext}
        >
          →
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-6 flex justify-center">
        <div className="relative w-3/4 lg:w-1/4 h-1 bg-gray-700">
          <div
            className="absolute top-0 left-0 h-full bg-blue-700 transition-all duration-300"
            style={{
              width: `${(activeIndex / (testimonials.length - 3)) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;