
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroLabel = ({ 
  title, 
  subtitle = "", 
  description = "Discover premium quality products crafted with precision",
  images = [],
  autoSlide = true,
  slideInterval = 5000,
  showNavigation = true,
  showDots = true,
  height = "h-64 sm:h-72 md:h-80 lg:h-96"
}) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  // Default high-quality images if none provided
  const defaultImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Premium Labels'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Custom Tags'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      alt: 'Professional Labels'
    },
    {
      id: 4,
      url: 'https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg',
      alt: 'Woven Labels'
    }
  ];

  // Use provided images or fallback to default
  const slides = images.length > 0 ? images : defaultImages;

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const resetAutoplay = () => {
    if (autoSlide) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = setInterval(() => {
        nextSlide();
      }, slideInterval);
    }
  };

  useEffect(() => {
    if (autoSlide && slides.length > 1) {
      timeoutRef.current = setInterval(nextSlide, slideInterval);
      return () => clearInterval(timeoutRef.current);
    }
  }, [autoSlide, slideInterval, slides.length]);

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
      className="relative mt-16"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .zoom-animation {
          animation: zoomIn ${slideInterval}ms ease-in-out infinite alternate;
        }
        .slide-transition {
          transition: opacity 0.8s ease-in-out;
        }
        .dot {
          transition: all 0.3s ease;
        }
        .dot:hover {
          transform: scale(1.2);
        }
      `}</style>

      <div className={`relative w-full ${height} overflow-hidden `}>
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`absolute inset-0 slide-transition ${
              current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.url || slide}
              alt={slide.alt || title}
              className="w-full h-full object-cover zoom-animation"
              onError={(e) => {
                e.target.src = "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg";
              }}
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center z-20 px-4">
              <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl mb-2">
                {title}
                {subtitle && (
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-2">
                    {subtitle}
                  </span>
                )}
              </h1>
              {description && (
                <p className="text-white/90 text-sm sm:text-base md:text-lg font-light max-w-3xl leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        {showNavigation && slides.length > 1 && (
          <>
            <button
              onClick={() => handleArrowClick('prev')}
              className="hidden sm:block absolute top-1/2 left-4 -translate-y-1/2 text-white text-2xl md:text-3xl z-30 hover:text-yellow-400 transition duration-300 bg-black/20 hover:bg-black/40 rounded-full p-2"
              aria-label="Previous Slide"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => handleArrowClick('next')}
              className="hidden sm:block absolute top-1/2 right-4 -translate-y-1/2 text-white text-2xl md:text-3xl z-30 hover:text-yellow-400 transition duration-300 bg-black/20 hover:bg-black/40 rounded-full p-2"
              aria-label="Next Slide"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Dot Navigation */}
        {showDots && slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`dot w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Mobile swipe indicator */}
        {slides.length > 1 && (
          <div className="absolute bottom-2 right-4 z-30 text-white/60 text-xs sm:hidden">
            Swipe →
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroLabel;