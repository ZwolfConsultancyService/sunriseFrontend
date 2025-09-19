import React from "react";
import { useNavigate } from "react-router-dom";

const InfraBanner = () => {
    
	const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center h-[400px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-gray-100 overflow-hidden">
      
      {/* Image center with 70% width */}
      <img
        src="https://deepwear.info/wp-content/uploads/Essential-Role-of-Fashion-Trims-in-Garment-Design-Deepwear-1-1024x585.jpg"
        alt="Infrastructure"
        className="w-[70%] h-full object-cover object-center rounded-lg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Infrastructure
          </h2>
          <p className="text-white max-w-2xl mx-auto text-sm md:text-lg mb-6">
            Our trims infrastructure is built with world-class facilities,
            advanced machinery and skilled manpower ensuring premium quality.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium shadow-md hover:bg-gray-200 transition cursor-pointer"
	   onClick={() => navigate('/infrastructure')}>
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfraBanner;
