import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import cur747gcb from "../../../assets/infrastructre.jpg";

const InfraBanner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation trigger only once
    });
  }, []);

  return (
    <div
      className="relative flex items-center justify-center py-6 overflow-hidden"
      data-aos="fade-up"
    >
      <div
        className="relative w-[80%] rounded-lg overflow-hidden"
        data-aos="zoom-in"
      >
        <img
          src={cur747gcb}
          alt="Infrastructure"
          className="w-full h-[70vh] object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Infrastructure
          </h2>

          <p
            className="text-white max-w-2xl mx-auto text-sm md:text-lg mb-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Our trims infrastructure is built with world-class facilities,
            advanced machinery, and skilled manpower ensuring premium quality.
          </p>

          <button
            className="bg-white text-black px-6 py-2 rounded-md font-medium shadow-md hover:bg-gray-200 transition cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="500"
            onClick={() => navigate("/infrastructure")}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfraBanner;
