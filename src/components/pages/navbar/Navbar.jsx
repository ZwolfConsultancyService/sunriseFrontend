import { useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import labelHierarchy from "../label/data/labelHierarchy";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTrimsMobile, setShowTrimsMobile] = useState(false);
  const location = useLocation();

  const navLinks = ["Home", "Trims", "About", "Blog",];

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

  return (
    <nav className="w-full bg-white shadow px-6 py-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link to={"/"}>
          <div className="flex items-center space-x-2 font-extrabold text-2xl">
            <span className="text-green-500 text-3xl">⌞</span>
            <span>sun</span>
            <span className="text-green-500">r</span>
            <span>ise</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-base font-medium mr-12">
          {navLinks.map((link) => (
            <li key={link} className={link === "Trims" ? "group" : ""}>
              {link === "Trims" ? (
                <>
                  {/* Nav Link with dropdown trigger */}
                  <div
                    className={`pb-1 cursor-pointer flex items-center hover:text-gray-700 ${
                      isActive(link)
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-900"
                    }`}
                  >
                    <Link to="/label" className="flex items-center">
                      {link}
                      <HiOutlineChevronDown className="ml-1 text-sm transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                  </div>

                  {/* Responsive Dropdown */}
                  <div
                    className="absolute top-full right-0 bg-white shadow-lg border-t border-gray-200 
                    w-screen max-w-none p-4 sm:p-6 rounded-md z-[999]
                    opacity-0 translate-y-2 mt-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible 
                    transition-all duration-300 ease-out"
                    style={{ 
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 'calc(100vw - 2rem)',
                      maxWidth: '1400px',
                      maxHeight: 'calc(100vh - 120px)'
                    }}
                  >
                    {/* Responsive grid layout */}
                    <div className="container mx-auto px-4">
                      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 sm:gap-6 space-y-0">
                        {labelHierarchy.map((group) => (
                          <div
                            key={group.group}
                            className="break-inside-avoid mb-6 inline-block w-full"
                          >
                            <Link
                              to={getSubLinkPath(group.group)}
                              className="text-xs font-bold text-orange-500 hover:text-green-600 uppercase tracking-wide mb-3 block leading-tight"
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
                                    className="text-xs text-gray-800 hover:text-green-600 transition-colors block py-0.5 leading-relaxed"
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
                  className={`pb-1 hover:text-gray-700 ${
                    isActive(link)
                      ? "text-green-600 border-b-2 border-green-600"
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
          className="md:hidden text-3xl text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link} className="py-2 border-b border-gray-200">
              {link === "Trims" ? (
                <>
                  <button
                    onClick={() => setShowTrimsMobile(!showTrimsMobile)}
                    className="w-full flex justify-between items-center font-medium text-gray-900"
                  >
                    <span>{link}</span>
                    <HiOutlineChevronDown
                      className={`transform transition-transform duration-200 ${
                        showTrimsMobile ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {showTrimsMobile && (
                    <div className="ml-4 mt-2 space-y-3">
                      {labelHierarchy.map((group) => (
                        <div
                          key={group.group}
                          className="border-b border-gray-100 pb-2 last:border-b-0"
                        >
                          <Link
                            to={getSubLinkPath(group.group)}
                            className="block text-sm font-semibold text-gray-800 hover:text-green-600 mb-2"
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
                                className="flex items-center space-x-2 p-1 hover:bg-gray-50 rounded"
                                onClick={() => setIsOpen(false)}
                              >
                                <img
                                  src={category.image}
                                  alt={category.category}
                                  className="w-6 h-6 object-cover rounded"
                                />
                                <span className="text-xs text-gray-600 hover:text-green-600">
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
                  className={`pb-1 hover:text-gray-700 ${
                    isActive(link)
                      ? "text-green-600 border-b-2 border-green-600"
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
  );
};

export default Navbar;