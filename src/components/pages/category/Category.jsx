import React, { useEffect } from "react";
import Bag from "../../../assets/bag.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white font-sans mt-10 md:mt-14 px-6 sm:px-10 md:px-24 lg:px-32 py-10 sm:py-12 md:py-16 shadow-[0_-4px_8px_rgba(0,0,0,0.05),0_4px_8px_rgba(0,0,0,0.05)] rounded-md">
      <main className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 flex items-center justify-center"
          data-aos="fade-right"
        >
          <img
            alt="Glossy black and blue backpack centered on a solid peach background"
            className="w-64 sm:w-72 md:w-96 object-contain"
            src={Bag}
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111827] leading-snug mb-4">
            The quarter size experience
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-md leading-relaxed mx-auto md:mx-0">
            Create exactly what you need with our powerful bootstrap toolkit.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Category;
