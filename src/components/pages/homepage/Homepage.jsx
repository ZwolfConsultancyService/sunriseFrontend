import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeImg1 from '../../../assets/pexel.jpg';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[620px] lg:h-[700px] overflow-hidden mt-16">
        {/* Background Image */}
        <img
          src={HomeImg1}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 z-20">
          <div className="w-full  text-center  pt-10 sm:pt-12 md:pt-16 lg:pt-24">
            
            {/* Main Heading */}
            <h1 className="text-gray-100 font-serif text-xl md:text-xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-snug text-center w-full">
              Your trusted source for premium trims manufacturing
            </h1>

            {/* Description Paragraph */}
            <p className="text-gray-200 text-sm sm:text-base mt-4 leading-relaxed">
              Sunrise Label Co. Pvt. Ltd. was started with a goal of designing and manufacturing tickets,
              packing materials, tags, as well as various other types of labels required by the retail and
              apparels industries.
            </p>
            <p className="text-gray-200 text-sm sm:text-base mt-2 leading-relaxed">
              Our team of highly qualified professionals brings years of industry experience. We focus on
              delivering top-quality product labels and branding materials such as logos, catalogues, and
              advertising collateral to strengthen your retail or apparel brand.
            </p>

            {/* Button */}
            <div className="mt-6 sm:mt-8">
              <button
                onClick={() => navigate("/label")}
                className="bg-orange-400 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-full shadow-md hover:shadow-xl transition duration-300 hover:bg-orange-300 focus:outline-none focus:ring-2"
              >
                Explore Our Trim Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
