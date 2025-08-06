// src/pages/About.jsx

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aboutimg from "../../../assets/about.jpg";
import Form from '../label/page/Form';  

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      disable: 'mobile',
      offset: 50,
    });
  }, []);

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => setShowContactForm(false);

  return (
    <div className="w-full bg-white py-16 px-4 md:px-10 lg:px-20" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

        <div data-aos="fade-right">
          <img
            src={Aboutimg}
            alt="About Sunrise Label"
            className="w-full h-full rounded-lg   object-contain"
          />
        </div>

        <div data-aos="fade-left" className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Sunrise Label Co. Pvt. Ltd.
          </h2>

          <div className={`text-gray-600 text-base md:text-lg leading-relaxed transition-all duration-500 ease-in-out ${isExpanded ? '' : 'line-clamp-6 xl:line-clamp-none'}`}>
            <p>
              Sunrise Label Co. Pvt. Ltd. was started with a goal of designing and manufacturing tickets, packing materials, tags, as well as various other types of labels required by the retail and apparels industries.
            </p>
            <p>
              Our team of highly qualified professionals brings years of industry experience. We focus on delivering top-quality product labels and branding materials such as logos, catalogues, and advertising collateral to strengthen your retail or apparel brand.
            </p>
            <p>
              We also have an independent Product Discovery by Development (PDD) department composed of expert designers, marketers, and developers who work on creating innovative labeling solutions.
            </p>
            <p>
              From woven and satin labels to barcode stickers, rubber labels, metal tags, AM & RF security labels, and more — we offer it all at affordable rates tailored to your needs.
            </p>
            <p
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
              onClick={openContactForm}
            >
              Contact us today to get attractive, high-quality labels for your business!
            </p>
          </div>

          <button
            onClick={toggleReadMore}
            className="text-blue-600 font-semibold hover:underline focus:outline-none block xl:hidden"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>

    
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 shadow-xl relative">
            <button
              onClick={closeContactForm}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <Form /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
