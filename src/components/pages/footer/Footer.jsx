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
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    {name : "Order Proccess", path: "/order-process"},
        { name: "Return Policy", path: "/return-policy" },
  ];

  const legalLinks = [

    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-&-Conditions" },
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <div className="bg-gray-100 shadow-2xl shadow-gray-300 mt-10">
      <footer className="bg-gray-100 w-full py-20 px-8 md:px-24">
        {/* Top section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-20">
          {/* Left links */}
          <div className="flex flex-wrap gap-16 md:gap-x-48 sm:gap-24">
            <div className="flex flex-col space-y-6 text-gray-800 text-base sm:text-lg font-semibold">
              {footerLinks.map((item) => (
                <Link key={item.name} to={item.path} className="hover:underline">
                  {item.name}
                </Link>
              ))}
            </div>
          <div className="flex flex-col space-y-6 text-gray-800 text-base sm:text-lg font-semibold">
  {legalLinks.map((item) => (
    <Link key={item.name} to={item.path} className="hover:underline">
      {item.name}
    </Link>
  ))}
</div>

          </div>

          {/* Newsletter */}
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
            <div
              className="flex items-center space-x-2 font-extrabold text-2xl cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span className="text-green-500 text-3xl">⌞</span>
              <span>sun</span>
              <span className="text-green-500">r</span>
              <span>ise</span>
            </div>

            <span className="text-gray-700">
              © {new Date().getFullYear()} sunrise. All rights reserved.
            </span>
            <Link to="/privacy-policy" className="ml-2 hover:underline text-gray-700">
              Privacy Policy
            </Link>
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
