import { useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAccessoriesMobile, setShowAccessoriesMobile] = useState(false);
  const [showLabelMobile, setShowLabelMobile] = useState(false);

  const location = useLocation();

  const navLinks = ["Home", "Blog",  "About", "Label",
    // "Accessories"//
   ];

  const accessoriesSubLinks = [
    "Hang Tang String",
    "Custom Sticker",
    "No Waven Bags",
    // "Tissue Paper",
    // "Metal Badges",
    // "Custom Cufflinks",
  ];

  const labelSubLinks = [
  "Woven labels",
  "Printed labels",
  "Heat transfer labels",
  "Tags",
  "Tag seals",
  "Stickers",
  "Patches",
  "Leather labels",
  "Metal labels",
];

  const getLinkPath = (link) =>
    `/${link === "Home" ? "" : link.toLowerCase().replace(/\s+/g, "-")}`;

  const getSubLinkPath = (subLink) =>
    `/accessories/${subLink.toLowerCase().replace(/\s+/g, "-")}`;

  const isActive = (link) => {
    const currentPath = location.pathname;
    const targetPath = getLinkPath(link);
    return currentPath === targetPath;
  };

   return (
    <nav className="w-full bg-white shadow px-6 py-4 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-extrabold text-2xl">
          <span className="text-green-500 text-3xl">⌞</span>
          <span>sun</span>
          <span className="text-green-500">r</span>
          <span>ise</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link} className="relative group">
              {link === "Accessories" || link === "Label" ? (
                <>
                  <div
                    className={`pb-1 cursor-pointer flex items-center hover:text-gray-700 ${
                      isActive(link)
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-900"
                    }`}
                  >
                    {link}
                    <HiOutlineChevronDown className="ml-1 text-sm transition-transform duration-200 group-hover:rotate-180" />
                  </div>

                  <ul className="absolute top-full left-0 bg-white shadow-lg  rounded w-56 py-2 hidden group-hover:block z-50 transition-all duration-300">
                    {(link === "Accessories" ? accessoriesSubLinks : labelSubLinks).map(
                      (sub) => (
                        <li key={sub}>
                          <Link
                            to={
                              link === "Accessories"
                                ? getSubLinkPath(sub)
                                : `/label/${sub.toLowerCase().replace(/\s+/g, "-")}`
                            }
                            className="block px-4 py-2 text-sm text-gray-700 font-medium hover:bg-gray-100"
                          >
                            {sub}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </>
              ) : (
                <Link
                  to={getLinkPath(link)}
                  className={`pb-1 hover:text-gray-700 ${
                    isActive(link)
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-900"
                  }`}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6 text-xl text-gray-900">
          <button aria-label="Search">
            <FaSearch />
          </button>
        </div>

        {/* Toggle Button (Mobile) */}
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 z-40">
          {navLinks.map((link) =>
            link === "Accessories" || link === "Label" ? (
              <div key={link} className="py-2 border-b border-gray-200">
                <button
                  onClick={() =>
                    link === "Accessories"
                      ? setShowAccessoriesMobile(!showAccessoriesMobile)
                      : setShowLabelMobile(!showLabelMobile)
                  }
                  className="w-full flex justify-between items-center font-medium text-gray-900"
                >
                  <span>{link}</span>
                  <HiOutlineChevronDown
                    className={`transform transition-transform duration-200 ${
                      (link === "Accessories" ? showAccessoriesMobile : showLabelMobile)
                        ? "rotate-180"
                        : "rotate-0"
                    }`}
                  />
                </button>
                {(link === "Accessories" ? showAccessoriesMobile : showLabelMobile) && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {(link === "Accessories" ? accessoriesSubLinks : labelSubLinks).map(
                      (sub) => (
                        <li key={sub}>
                          <Link
                            to={
                              link === "Accessories"
                                ? getSubLinkPath(sub)
                                : `/label/${sub.toLowerCase().replace(/\s+/g, "-")}`
                            }
                            className="block text-sm text-gray-700 hover:text-green-600"
                          >
                            {sub}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={link}
                to={getLinkPath(link)}
                className={`block py-2 border-b border-gray-200 ${
                  isActive(link)
                    ? "text-green-600 font-semibold underline"
                    : "hover:text-gray-700"
                }`}
              >
                {link}
              </Link>
            )
          )}

          {/* Mobile Icons */}
          <div className="flex space-x-6 pt-4 text-xl">
            <button aria-label="Search">
              <FaSearch />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
