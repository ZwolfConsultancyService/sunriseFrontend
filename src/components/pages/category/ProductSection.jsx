import React, { useEffect } from "react";
import Shoes from "../../../assets/shoes.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white font-sans ">
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Text Section */}
        <div
          className="flex flex-col justify-center px-6 sm:px-10 md:px-24 lg:px-32 xl:px-40 2xl:px-48 py-16 md:py-20 md:w-1/2 text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-md mx-auto md:mx-0">
            Perfect Fit,<br />Form + Function
          </h1>
          <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
            Create exactly what you need with our powerful bootstrap toolkit.
          </p>
        </div>

        {/* Image Section */}
        <div
          className="md:w-1/2 flex justify-center items-center p-10 sm:p-14 md:p-20"
          data-aos="fade-left"
        >
          <img
            alt="Pair of white sneakers with gold detail on heel and tongue, placed on light gray background"
            className="max-w-full h-auto object-contain"
            height={600}
            src={Shoes}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
