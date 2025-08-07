import React, { useEffect } from "react";
import HomeImg from "../../../assets/homew.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className="font-sans bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${HomeImg})` }}
    >
      <div className="min-h-screen bg-black/70 flex items-center justify-center px-6 sm:px-10 md:px-20 py-20">
        <div
          className="w-full max-w-4xl text-center md:text-center"
          data-aos="fade-up"
        >

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="block">Elevate Your Everyday</span>
            <span className="block">Style</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            Welcome to <span className="text-white font-semibold">Sunrise</span> — where creativity meets
            quality. Shop smarter, live better, and
            <span className="block text-white">discover pieces that inspire.</span>
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <button
              onClick={() => navigate("/label")}
              className="bg-[#85f870] text-gray-900 px-8 py-3 text-base sm:text-lg font-bold rounded-full shadow-md hover:shadow-xl transition duration-300 hover:bg-[#87d57b] focus:outline-none focus:ring-2 "
            >
              Explore Our Trim Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
