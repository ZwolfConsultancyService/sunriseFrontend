import { useState, useEffect } from "react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { FaPhoneAlt, FaEnvelope, FaClock, FaDownload } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import labelHierarchy from "../label/data/labelHierarchy";
import CompanyPdf from "../../../assets/sunriseCompany.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrimsMobile, setShowTrimsMobile] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  
  // Mock location for demo
  const location = useLocation();

  const navLinks = ["Home", "Trims", "Blog", "About", "Infrastructure"];

  const getLinkPath = (link) =>
    `/${link === "Home" ? "" : link.toLowerCase().replace(/\s+/g, "-")}`;

  const getSubLinkPath = (type) =>
    `/label/${type.toLowerCase().replace(/\s+/g, "-")}`;

  const isActive = (link) => {
    const currentPath = location.pathname;

    if (link === "Trims") {
      return currentPath.startsWith("/label");
    }
    const targetPath = getLinkPath(link);
    return currentPath === targetPath;
  };

  
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); 
      } else {
        setShowHeader(true); 
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <div
        className={`w-full bg-gray-100 border-b border-gray-200 fixed top-0 left-0 z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full" 
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 flex justify-between items-center text-gray-700 py-1">
          
          <div className="flex space-x-1 sm:space-x-4 flex-wrap items-center">
            
           <div className="hidden sm:flex items-center space-x-1 text-xs sm:text-sm">
  <FaEnvelope className="text-orange-500 text-xs" />
  <a
    href="mailto:info@sunrise.com"
    className="hover:text-orange-600 transition"
  >
    info@sunrise.com
  </a>
</div>

<div className="flex items-center space-x-1 text-xs sm:text-sm">
  <FaPhoneAlt className="text-orange-500 text-xs" />
  <a
    href="tel:+919876543210"
    className="hover:text-orange-600 transition"
  >
    <span className="hidden xs:inline">+91 9876543210</span>
    <span className="xs:hidden">Call Us</span>
  </a>
</div>

            
          
            <div className="hidden md:flex items-center space-x-1 text-xs sm:text-sm">
              <FaClock className="text-orange-500 text-xs" />
              <span>Mon - Sat (9:00 - 18:00)</span>
            </div>
          </div>


          <button
          >
      <a
      href={CompanyPdf}
      download="Sunrise-Company-Brochure.pdf" 
      className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-2 sm:px-3 py-1 rounded text-xs transition"
    >
      <FaDownload className="mr-1 text-xs sm:text-sm" />
      <span className="hidden sm:inline">Download Brochure</span>
      <span className="sm:hidden">Download</span>
    </a>
          </button>
        </div>
      </div>

      <nav className={`w-full bg-white shadow px-4 sm:px-6 py-3 fixed left-0 z-40 transition-all duration-300 ${
        showHeader ? 'top-[30px]' : 'top-0'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
          <Link to={"/"}>
            <div className="flex items-center space-x-1 sm:space-x-2 font-extrabold text-xl sm:text-2xl">
              <span className="text-orange-400 text-2xl sm:text-3xl">⌞</span>
              <span>sun</span>
              <span className="text-orange-400">r</span>
              <span>ise</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-sm xl:text-base font-medium">
            {navLinks.map((link) => (
              <li key={link} className={link === "Trims" ? "group" : ""}>
                {link === "Trims" ? (
                  <>
                    {/* Nav Link with dropdown trigger */}
                    <div
                      className={`pb-1 cursor-pointer flex items-center hover:text-gray-700 transition-colors ${
                        isActive(link)
                          ? "text-orange-500 border-b-2 border-orange-500"
                          : "text-gray-900"
                      }`}
                    >
                      <Link to="/label" className="flex items-center">
                        {link}
                        <HiOutlineChevronDown className="ml-1 text-sm transition-transform duration-200 group-hover:rotate-180" />
                      </Link>
                    </div>

                 
                 <div
                      className="absolute top-full right-0 bg-white shadow-lg border-t border-gray-200 
                      w-screen max-w-none p-4 sm:p-6 rounded-md z-[999]
                      opacity-0 translate-y-2 mt-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible 
                      transition-all duration-300 ease-out"
                      style={{
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "calc(100vw - 2rem)",
                        maxWidth: "1400px",
                        maxHeight: "calc(100vh - 120px)",
                      }}
                    >
                      <div className="container mx-auto px-4">
                        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 sm:gap-6 space-y-0">
                          {labelHierarchy.map((group) => (
                            <div
                              key={group.group}
                              className="break-inside-avoid mb-6 inline-block w-full"
                            >
                              <Link
                                to={getSubLinkPath(group.group)}
                                className="text-xs font-bold text-orange-500 hover:text-orange-500 uppercase tracking-wide mb-3 block leading-tight"
                              >
                                {group.group}
                              </Link>
                              <ul className="space-y-1">
                                {group.categories.map((category) => (
                                  <li key={category.category}>
                                    <Link
                                      to={`/label/${group.slug}/${category.category
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      className="text-xs text-gray-800 hover:text-orange-500 transition-colors block py-0.5 leading-relaxed"
                                    >
                                      {category.category}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={getLinkPath(link)}
                    className={`cursor-pointer pb-1 hover:text-gray-700 transition-colors ${
                      isActive(link)
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-gray-900"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl sm:text-3xl text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu - IMPROVED RESPONSIVE */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md px-4 sm:px-6 py-4 z-40 max-h-[calc(100vh-8rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link} className="py-2 border-b border-gray-200 last:border-b-0">
                {link === "Trims" ? (
                  <>
                    <button
                      onClick={() => setShowTrimsMobile(!showTrimsMobile)}
                      className="w-full flex justify-between items-center font-medium text-gray-900 py-1"
                    >
                      <span>{link}</span>
                      <HiOutlineChevronDown
                        className={`transform transition-transform duration-200 ${
                          showTrimsMobile ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {showTrimsMobile && (
                      <div className="ml-2 sm:ml-4 mt-2 space-y-3">
                        {labelHierarchy.map((group) => (
                          <div
                            key={group.group}
                            className="border-b border-gray-100 pb-2 last:border-b-0"
                          >
                            <Link
                              to={getSubLinkPath(group.group)}
                              className="cursor-pointer block text-sm font-semibold text-gray-800 hover:text-orange-500 mb-2 py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {group.group}
                            </Link>
                            <div className="ml-2 space-y-1">
                              {group.categories.map((category) => (
                                <Link
                                  key={category.category}
                                  to={`/label/${group.slug}/${category.category
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="cursor-pointer flex items-center space-x-2 p-1 hover:bg-gray-50 rounded transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <img
                                    src={category.image}
                                    alt={category.category}
                                    className="w-5 h-5 sm:w-6 sm:h-6 object-cover rounded"
                                  />
                                  <span className="text-xs sm:text-sm text-gray-600 hover:text-orange-500">
                                    {category.category}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={getLinkPath(link)}
                    className={`cursor-pointer py-1 hover:text-gray-700 transition-colors ${
                      isActive(link)
                        ? "text-orange-500 font-medium"
                        : "text-gray-900"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

    </>
  );
};

export default Navbar;