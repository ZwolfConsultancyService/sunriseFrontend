import React from 'react';
import { useNavigate } from 'react-router-dom';

import HomeImg1 from '../../../assets/home-img.jpg';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[620px] lg:h-[700px] overflow-hidden mt-16">
        <div className="absolute inset-0 opacity-100 z-10">
          <img
            src={HomeImg1}
            alt="Hero"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="w-full md:w-[24rem] lg:w-[30rem] xl:w-[35rem] text-center md:text-left  pt-10 sm:pt-12 md:pt-16 lg:pt-24">
              <h1 className="text-gray-800 font-serif text-xl md:text-xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-snug max-w-2xl mx-auto md:mx-0">
                Your trusted source for premium trims manufacturing
              </h1>
              <div className="mt-4 sm:mt-6">
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
    </div>
  );
};

export default Homepage;
