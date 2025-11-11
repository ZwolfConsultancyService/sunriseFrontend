import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Your trusted source for premium trims manufacturing",
      buttonText: "Explore Our Trim Collection",
      image: "https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      title: "Quality craftsmanship in every trim detail",
      buttonText: "View Our Products",
      image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    },
    {
      title: "Innovative designs for modern applications",
      buttonText: "Discover More",
      image: "https://plus.unsplash.com/premium_photo-1661319067088-61e0b9e079b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative">
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[620px] lg:h-[700px] overflow-hidden mt-16">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
         
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms]"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? "scale(1.1)" : "scale(1)",
              }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
              <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 z-20">
              <div className="w-full max-w-2xl text-center">
                <h1 className="text-gray-100 font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-snug mx-auto transition-all duration-700">
                  {slide.title}
                </h1>
                <div className="mt-4 sm:mt-6">
                  <button
                    onClick={() => navigate("/label")}
                    className="bg-orange-400 text-gray-900 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-bold rounded-full shadow-md hover:shadow-xl transition duration-300 hover:bg-orange-300 focus:outline-none focus:ring-2"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                i === currentSlide
                  ? "bg-orange-400 w-10 h-2"
                  : "bg-white/50 hover:bg-white w-3 h-3"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;