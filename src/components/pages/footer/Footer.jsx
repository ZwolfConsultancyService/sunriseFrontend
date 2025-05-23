import React from 'react'
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
  return (
	  <div className="bg-gray-50 shadow-2xl shadow-gray-200 mt-10">
      <footer className="bg-gray-50 w-full py-16 px-6 md:px-20">
      {/* Top section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-16">
        {/* Left links */}
        <div className="flex flex-wrap gap-12 md:gap-x-40 sm:gap-20 ">
          <div className="flex flex-col space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base font-normal sm:font-medium ">
            {["Store", "Support", "About", "Careers"].map((item) => (
              <a key={item} href="#" className="hover:underline">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base font-normal sm:font-medium">
            {["Cookies", "Privacy Policy", "Data-retention policy", "Code of Conduct"].map((item) => (
              <a key={item} href="#" className="hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Right newsletter */}
        <div className="flex flex-col space-y-4 max-w-xs w-full">
          <p className="text-gray-900 text-base font-normal">Discover the latest trends</p>
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
                className="w-full rounded-md border border-gray-200 px-5 py-3 text-gray-700 text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="submit"
                aria-label="Submit email"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-900 text-lg sm:text-xl"
              >
                <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row md:justify-between md:items-center text-gray-700 text-xs sm:text-sm font-normal">
        <div className="flex flex-wrap items-center gap-2 mb-6 md:mb-0">
          <img
            src="https://placehold.co/24x24/png?text=%5B%20green%20corner%20bracket%20icon%20%5D"
            alt="Green corner bracket icon"
            width={24}
            height={24}
            className="inline-block"
          />
          <span className="font-extrabold text-base sm:text-lg tracking-tight">intense</span>
          <span>© 2023 Intense. All rights reserved.</span>
          <a href="#" className="ml-1 hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 sm:space-x-8 text-gray-900 text-lg sm:text-xl font-bold">
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
      <button
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-md shadow-lg shadow-gray-400 text-base sm:text-xl"
      >
        <FaArrowUp />
      </button>
    </footer>
    </div>
  )
}

export default Footer