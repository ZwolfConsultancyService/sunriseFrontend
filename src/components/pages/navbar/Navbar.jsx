import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Features", "Pages", "Portfolio", "Blog", "Shop", "Components"];

  return (
<nav className="w-full bg-white shadow px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 font-extrabold text-2xl">
          <span className="text-green-500 text-3xl">⌞</span>
          <span>int</span>
          <span className="text-green-500">e</span>
          <span>nse</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 text-gray-900 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-gray-700">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center space-x-6 text-xl text-gray-900">
          <button aria-label="Search">
            <FaSearch />
          </button>
          <button aria-label="Cart">
            <FaShoppingCart />
          </button>
        </div>

        {/* Toggle button (visible on sm + md) */}
        <button
          className="lg:hidden text-3xl text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
    {isOpen && (
  <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md px-6 py-4 z-50">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block py-2 border-b border-gray-200 hover:text-gray-700">
              {link}
            </a>
          ))}

          {/* Mobile/Tablet Icons */}
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

