import react from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="py-[80px] sm:py-[140px] text-white flex flex-col items-center justify-center border-b">
      {/* Outer container with padding and blue border */}
      <div className="w-[90%] max-w-4xl text-center relative">
        {/* Circle behind the text */}
        <div className="absolute inset-0 flex justify-center items-center z-[-100]">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[250px] sm:w-[500px] sm:h-[250px] md:w-[600px] md:h-[350px] border-t border-blue-800 rounded-t-full rounded-b-none shadow-[0_-25px_20px_10px_rgba(0,10,120,0.4)]"></div>
        </div>
        {/* Heading text */}
        <h1 className="text-4xl sm:text-6xl font-medium relative z-10 mb-6">
          <p className="text-left md:mb-5">Let’s Talk About</p>
          <p className="text-right">Your Product Journey</p>
        </h1>
        {/* Supporting text */}

        <div className="md:w-1/2 md:translate-x-3/4 text-left">
          <p className="mb-6 text-base text-left sm:text-lg z-10">
            Hit the button to let me know what you have in mind, and I will be
            happy to advise you on how we can move forward together to reach all
            your goals.
          </p>
          {/* Call to action button */}
          <Link to="/#">
            <button className="bg-blue-700 mt-4 hover:rounded-br-[0px] text-white px-6 py-3 rounded-br-[20px] transition-all">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
