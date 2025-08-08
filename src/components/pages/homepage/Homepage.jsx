import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import HomeImg from '../../../assets/hero.jpg';
import HomeImg1 from '../../../assets/hero1.jpg';
import HomeImg2 from '../../../assets/hero2.jpg';
import HomeImg3 from '../../../assets/hero3.jpg';

const Homepage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'Elevate Your Everyday',
      subtitle: 'Style',
      description: 'Welcome to Sunrise — where creativity meets quality. Shop smarter, live better, and discover pieces that inspire.',
      img: HomeImg1,
    },
    {
      id: 2,
      title: 'Crafted with Precision',
      subtitle: '',
      description: 'Explore meticulously designed trims that add charm and elegance to your apparel & interiors.',
      img: HomeImg2,
    },
    {
      id: 3,
      title: 'Inspired by Nature',
      subtitle: '',
      description: 'Every design in our collection reflects beauty, craftsmanship, and sustainability.',
      img: HomeImg3,
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const resetAutoplay = () => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    resetAutoplay();
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (touchStartX.current - endX > 50) nextSlide();
    else if (endX - touchStartX.current > 50) prevSlide();
  };

  const handleDotClick = (index) => {
    setCurrent(index);
    resetAutoplay();
  };

  const handleArrowClick = (direction) => {
    direction === 'next' ? nextSlide() : prevSlide();
    resetAutoplay();
  };

  return (
    <div
      className="relative "
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .zoom-animation {
          animation: zoomIn 6s ease-in-out infinite alternate;
        }
        .slide-transition {
          transition: opacity 0.9s ease-in-out;
        }
      `}</style>

      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[620px] lg:h-[700px] overflow-hidden mt-16">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 slide-transition ${
              current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover zoom-animation"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 md:px-8 lg:px-20">
              <div className="text-white w-full max-w-screen-xl text-center mx-auto pt-10 sm:pt-12 md:pt-16 lg:pt-24">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug mb-4">
                  {slide.title}
                  {slide.subtitle && (
                    <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-2">
                      {slide.subtitle}
                    </span>
                  )}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-8 leading-relaxed">
                  {slide.description}
                </p>
                              <div className="mt-10">
                     <button
                     onClick={() => navigate("/label")}
                   className="bg-[#85f870] text-gray-900 px-8 py-3 text-base sm:text-lg font-bold rounded-full shadow-md hover:shadow-xl transition duration-300 hover:bg-[#87d57b] focus:outline-none focus:ring-2 "
                     >
                       Explore Our Trim Collection
                   </button>
                 </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={() => handleArrowClick('prev')}
          className="hidden sm:block absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl z-20 hover:text-[#85f870] transition"
          aria-label="Previous Slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => handleArrowClick('next')}
          className="hidden sm:block absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl z-20 hover:text-[#85f870] transition"
          aria-label="Next Slide"
        >
          <FaChevronRight />
        </button>

    
      </div>
    </div>
  );
};

export default Homepage;

