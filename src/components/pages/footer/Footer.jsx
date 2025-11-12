import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import labelhierarchy from "../label/data/labelHierarchy";
import hotProductsData from "../bestseller/bestSellerItems"


// const hotProductsData = [
//   { name: "Product A Premium", slug: "product-a-premium" },
//   { name: "Best Seller Kit", slug: "best-seller-kit" },
//   { name: "New Arrival Pack", slug: "new-arrival-pack" },
//   { name: "Eco-Friendly Bundle", slug: "eco-friendly-bundle" },
//   { name: "Clearance Sale Item", slug: "clearance-item" },
// ];


const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  }

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
    { name: "Order Process", path: "/order-process" },
    { name: "Return Policy", path: "/return-policy" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-&-conditions" },
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <div className="bg-gray-100 shadow-2xl shadow-gray-300 mt-10">
      <footer className="bg-gray-100 w-full py-20 px-8 md:px-16 ">
        {/* Top section */}
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-20">
          {/* Left links container */}
          <div className="flex flex-wrap gap-16 md:gap-x-48 sm:gap-24">
            
            {/* Footer Links */}
            <div className="flex flex-col space-y-6 text-gray-800 text-base sm:text-lg font-semibold">
              <h3 className="text-gray-800 text-lg font-bold mb-2">Quick Links</h3>
              {footerLinks.map((item) => (
                <Link key={item.name} to={item.path} className="hover:text-yellow-600 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-col space-y-6 text-gray-800 text-base sm:text-lg font-semibold">
              <h3 className="text-gray-800 text-lg font-bold mb-2">Legal</h3>
              {legalLinks.map((item) => (
                <Link key={item.name} to={item.path} className="hover:text-yellow-600 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Second column group (Trims and Hot Products) */}
          <div className="flex flex-wrap gap-16 md:gap-x-48 sm:gap-24">
             
            {/* ✅ Label Groups (Trims) */}
            <div className="flex flex-col text-gray-800 text-base sm:text-lg font-semibold">
              <h3 className="text-gray-800 text-lg font-bold mb-4">Trims (Label Categories)</h3>
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {labelhierarchy.map((group) => (
                  <Link
                    key={group.group}
                    to={`/label/${group.slug}`}
                    className="hover:text-yellow-600 transition-colors text-sm"
                  >
                    {group.group}
                  </Link>
                ))}
              </div>
            </div>

           <div className="flex flex-col text-gray-800 text-base sm:text-lg font-semibold">
      <h3 className="text-gray-800 text-lg font-bold mb-4">Hot Products</h3>

      <div className="grid grid-cols-1 gap-y-4">
        {hotProductsData.map((product) => (
          <div
            key={product.title}
            onClick={() => handleClick(product.link)}
            className="cursor-pointer hover:text-yellow-600 transition-colors text-sm"
          >
            {product.title}
          </div>
        ))}
      </div>
    </div>


          </div>
        </div>

        {/* Bottom row */}
        <div className="max-w-7xl mx-auto mt-24 flex flex-col md:flex-row md:justify-between md:items-center text-gray-700 text-sm sm:text-base font-medium border-t pt-8 border-gray-300">
          <div className="flex flex-wrap items-center gap-3 mb-8 md:mb-0">
            <Link to={"/"}>
              <div className="flex items-center space-x-2 font-extrabold text-2xl">
  <p>Sunrise</p>
              </div>
            </Link>

            <span className="text-gray-700">
              © {new Date().getFullYear()} Sunrise. All rights reserved.
            </span>
            {/* Removed duplicate privacy policy link here as it's in the main legal links */}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 sm:space-x-10 text-gray-900 text-xl sm:text-2xl font-bold">
            <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-700 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-800 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 bg-yellow-500 hover:bg-yellow-700 text-white p-4 rounded-lg shadow-lg shadow-gray-400 text-xl transition-opacity duration-300 z-50"
          >
            <FaArrowUp />
          </button>
        )}
      </footer>
    </div>
  );
};

export default Footer;


