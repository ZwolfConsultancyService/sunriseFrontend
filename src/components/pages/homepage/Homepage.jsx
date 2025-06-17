import React, { useEffect } from "react";
import HomeImg from "../../../assets/homeimg.jpg";
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
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 gap-12 py-12 md:py-0">
        {/* Text Section */}
        <div
          className="md:w-1/2 max-w-xl text-center md:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1a1a28] mb-6 leading-tight">
            Ideal Everyday
          </h1>
          <p className="text-[#6b6b6b] text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
       Sunrise – Your one-stop shop for everything you love && 
       Shop smart and  Live better.
          </p>
          <button className="bg-[#12121f] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 text-base sm:text-lg"
          onClick={() => navigate("/shop")}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
