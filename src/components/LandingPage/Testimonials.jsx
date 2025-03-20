import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO at BrightVision Solutions",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "SnapixLab transformed our brand with a stunning website and intuitive UI/UX design. Their attention to detail and expertise made the entire process seamless. Highly recommended!",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Founder of TechSphere",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "The team at SnapixLab exceeded our expectations! Their design thinking and research-driven approach helped us build a user-friendly app that our customers love.",
  },
  {
    id: 3,
    name: "Elena Roberts",
    role: "Marketing Director at NexaCorp",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "I was impressed by their professionalism and commitment to quality. They delivered a modern website that not only looks great but also performs exceptionally well.",
  },
  {
    id: 4,
    name: "David Lee",
    role: "COO at InnovateHub",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Working with SnapixLab was a game-changer for our business. Their UX expertise and branding strategies helped us stand out in a crowded market.",
  },
  {
    id: 5,
    name: "Maria Gonzalez",
    role: "Digital Strategist at CreativeNest",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "The team’s creativity and problem-solving skills are outstanding. They not only built a sleek website but also improved our brand’s online presence significantly.",
  },
  {
    id: 6,
    name: "Michael Reynolds",
    role: "Product Manager at SoftWave Technologies",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "SnapixLab truly understands user experience. Their designs are intuitive, engaging, and visually stunning. We couldn't have asked for a better partner!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 3
    );
  };

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Rotate every 5 seconds
      return () => clearInterval(interval);
    }
  }, [activeIndex, isPaused]);

  const testimonialVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section
      className="bg-black text-white flex flex-col items-center border-b"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col md:flex-row w-full justify-between px-[40px] md:px-[80px] gap-8">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-4xl md:text-6xl w-full">What Our Clients Say?</h2>
          <p className="text-lg w-full mb-4 md:mb-0">
            Don’t just take our word for it. Here’s what our clients have to say
            about working with Our Company.
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center space-x-6">
          <button
            className="text-blue-700 border border-[3px] border-blue-700 text-2xl flex items-center justify-center hover:text-white hover:border-none w-14 h-14 rounded-[50%] hover:bg-white transition-all rotate-180"
            onClick={handlePrev}
          >
            <img src={assets.arrow_icon} alt="" />
          </button>
          <button
            className="text-blue-700 border border-[3px] border-blue-700 text-2xl flex items-center justify-center hover:text-white hover:border-none w-14 h-14 rounded-[50%] hover:bg-white transition-all"
            onClick={handleNext}
          >
            <img src={assets.arrow_icon} alt="" />
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
          className="text-blue-700 border border-[3px] flex items-center justify-center border-blue-700 hover:text-white hover:border-none w-14 h-14 rounded-[50%] p-3 hover:bg-white transition-all rotate-180"
          onClick={handlePrev}
        >
          <img src={assets.arrow_icon} alt="" />
        </button>
        <button
          className="text-blue-700 border border-[3px] flex items-center justify-center border-blue-700 hover:text-white hover:border-none w-14 h-14 rounded-[50%] p-3 hover:bg-white"
          onClick={handleNext}
        >
          <img src={assets.arrow_icon} alt="" />
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
