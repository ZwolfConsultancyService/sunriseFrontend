import Aos from "aos";
import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "@/redux/productsSlice";
import ShopData from "@/components/pages/shop/ShopData";

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
    navigate(`/product/${slugify(product.title)}`);
  };

  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center leading-tight">
          Your fit. Your style
        </h1>
        <p className="mt-3 text-center text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Sunrise – Shop smart and Live better..
        </p>

        <div className="mt-10 grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {ShopData.map((item, idx) => (
            <div
              key={item.id}
              className="group relative flex flex-col items-center text-center text-sm sm:text-base cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              onClick={() => handleClick(item)}
            >
              <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] h-40 sm:h-48 md:h-60">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-md"
                />

                {/* Hover Cart Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-500 p-2 sm:p-3 rounded-full shadow-lg">
                    <FiShoppingCart className="text-white text-sm sm:text-lg" />
                  </div>
                </div>

                {/* Badges */}
                {item.badge && (
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-black text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                )}
                {item.discount && (
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                    {item.discount}
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-sm sm:text-base font-medium">{item.title}</h2>
              <p className="mt-1 text-xs sm:text-sm text-gray-400">
                {item.originalPrice && (
                  <span className="line-through mr-1">${item.originalPrice}</span>
                )}
                ${item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
