import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = ["Home", "Blog", "Shop", "About", "Label", "Accessories"];

  const getLinkPath = (link) =>
    `/${link === "Home" ? "" : link.toLowerCase().replace(/\s+/g, "-")}`;

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
        <ul className="hidden lg:flex space-x-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link}>
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
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center space-x-6 text-xl text-gray-900">
          <button aria-label="Search">
            <FaSearch />
          </button>
        </div>

        {/* Toggle button */}
        <button
          className="lg:hidden text-3xl text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 z-50">
          {navLinks.map((link) => (
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
          ))}

          {/* Mobile Icons */}
          <div className="flex space-x-6 pt-4 text-xl">
            <button aria-label="Search">
              <FaSearch />
            </button>
            <button aria-label="Cart">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
