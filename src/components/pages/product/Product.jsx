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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });

    // Set responsive items per view
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); 
      } else if (window.innerWidth < 768) {
        setItemsPerView(2); 
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); 
      } else {
        setItemsPerView(4); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/label/${product.slug}`, {
      state: { product }, 
    });
  };

  const nextSlide = () => {
    if (labelHierarchy.length <= itemsPerView) return;
    
    setCurrentIndex(prev => {
      const maxIndex = labelHierarchy.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    if (labelHierarchy.length <= itemsPerView) return;
    
    setCurrentIndex(prev => {
      const maxIndex = labelHierarchy.length - itemsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const canGoNext = labelHierarchy.length > itemsPerView;
  const canGoPrev = labelHierarchy.length > itemsPerView;

  return (
    <div className="bg-gray-50 font-sans text-gray-900 mt-8 p-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center leading-tight">
          Our Products
        </h1>
        <p className="mt-3 text-center text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Sunrise – Shop smart and Live better..
        </p>

        {/* Slider Container */}
        <div className="mt-10 relative">
          {/* Navigation Arrows - Only show if there are more items than can fit in view */}
          {labelHierarchy.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="bg-green-500 hover:bg-green-600 text-white hover:shadow-xl absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300"
                style={{ transform: 'translateY(-50%) translateX(-50%)' }}
              >
                <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="bg-green-500 hover:bg-green-600 text-white hover:shadow-xl absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-300"
                style={{ transform: 'translateY(-50%) translateX(50%)' }}
              >
                <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}

          {/* Slider Content */}
          <div className={`overflow-hidden ${labelHierarchy.length > itemsPerView ? 'mx-8 sm:mx-12' : 'mx-0'}`}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: labelHierarchy.length > itemsPerView ? `translateX(-${(currentIndex * 100) / itemsPerView}%)` : 'translateX(0)',
              }}
            >
              {labelHierarchy.map((item, idx) => (
                <div
                  key={item.slug || idx}
                  className="group relative flex flex-col items-center text-center text-sm sm:text-base cursor-pointer px-2 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  onClick={() => handleClick(item)}
                >
                  <div className="relative w-full max-w-[160px] sm:max-w-[200px] md:max-w-[240px] h-40 sm:h-48 md:h-60 mx-auto">
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
                      <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-orange-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded">
                        {item.categories.length} Types
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-sm sm:text-base font-medium px-1">{item.group}</h2>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500 px-1 line-clamp-2">
                    {item.description?.substring(0, 60)}...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;