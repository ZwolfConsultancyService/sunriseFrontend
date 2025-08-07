import Aos from "aos";
import React, { useEffect, useState } from "react";
import { FiShoppingCart, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "@/redux/productsSlice";
import labelHierarchy from "../label/data/labelHierarchy";

const slugify = (text) =>
  typeof text === "string"
    ? text.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
    : "";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleClick = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/label/${product.slug}`, {
      state: { product },
    });
  };


  return (
   <div className="bg-gray-50 font-sans text-gray-900 mt-8 p-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center leading-tight">
          Our Trims
        </h1>
        <p className="mt-3 text-center text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Sunrise – Shop smart and Live better..
        </p>

        {/* Product Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {labelHierarchy.map((item, idx) => (
            <div
              key={item.slug || idx}
              className="group relative flex flex-col items-center text-center text-sm sm:text-base cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              onClick={() => handleClick(item)}
            >
              <div className="relative w-full max-w-[400px] h-48 sm:h-56 md:h-64 mx-auto">
                <img
                  src={item.image}
                  alt={item.group}
                  className="w-full h-full object-cover rounded-md"
                />

                {/* Hover Cart Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 p-2 sm:p-3 rounded-full shadow-lg">
                    <FiShoppingCart className="text-white text-sm sm:text-lg" />
                  </div>
                </div>

                {/* Badge for Categories Count */}
                {item.categories && item.categories.length > 0 && (
                  <span className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                    {item.categories.length} Types
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-sm sm:text-base font-medium px-1">
                {item.group}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 px-1 line-clamp-2">
                {item.description?.substring(0, 60)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;