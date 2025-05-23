import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 1000; // Increased height threshold to 1000px

      if (window.scrollY > scrollThreshold) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 shadow-2xl shadow-gray-300 mt-10">
      <footer className="bg-gray-100 w-full py-20 px-8 md:px-24">
        {/* Top section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-20">
          {/* Left links */}
          <div className="flex flex-wrap gap-16 md:gap-x-48 sm:gap-24 ">
            <div className="flex flex-col space-y-6 text-gray-800 text-base sm:text-lg font-semibold">
              {["Store", "Support", "About", "Careers"].map((item) => (
                <a key={item} href="#" className="hover:underline">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-6 text-gray-800 text-base sm:text-lg font-semibold">
              {[
                "Cookies",
                "Privacy Policy",
                "Data-retention policy",
                "Code of Conduct",
              ].map((item) => (
                <a key={item} href="#" className="hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right newsletter */}
          <div className="flex flex-col space-y-6 max-w-xs w-full">
            <p className="text-gray-900 text-lg font-semibold">
              Discover the latest trends
            </p>
            <form className="w-full">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-md border border-gray-300 px-6 py-4 text-gray-900 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
                />
                <button
                  type="submit"
                  aria-label="Submit email"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-900 text-2xl"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom row */}
        <div className="max-w-7xl mx-auto mt-24 flex flex-col md:flex-row md:justify-between md:items-center text-gray-700 text-sm sm:text-base font-medium">
          <div className="flex flex-wrap items-center gap-3 mb-8 md:mb-0">
            <img
              src="https://placehold.co/24x24/png?text=%5B%20green%20corner%20bracket%20icon%20%5D"
              alt="Green corner bracket icon"
              width={24}
              height={24}
              className="inline-block"
            />
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-gray-900">
              intense
            </span>
            <span className="text-gray-700">© 2023 Intense. All rights reserved.</span>
            <a href="#" className="ml-2 hover:underline text-gray-700">
              Privacy Policy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 sm:space-x-10 text-gray-900 text-xl sm:text-2xl font-bold">
            <a href="#" aria-label="YouTube" className="hover:text-gray-700">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-700">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-700">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-700">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg shadow-lg shadow-gray-400 text-xl transition-opacity duration-300"
          >
            <FaArrowUp />
          </button>
        )}
      </footer>
    </div>
  );
};

export default Footer;
