import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aboutimg from "@/assets/about.jpg";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-white py-16 px-4 md:px-10 lg:px-20" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        <div data-aos="fade-right">
          <img
            src={Aboutimg}
            alt="About Sunrise Label"
            className="w-full h-96 rounded-lg shadow-lg md:h-[660px] object-cover"
          />
        </div>

        <div data-aos="fade-left" className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Sunrise Label Co. Pvt. Ltd.
          </h2>

          <div className={`text-gray-600 text-base md:text-lg leading-relaxed transition-all duration-500 ease-in-out ${isExpanded ? '' : 'line-clamp-6 lg:line-clamp-none'}`}>
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

            <p className="text-blue-600 font-semibold">
              Contact us today to get attractive, high-quality labels for your business!
            </p>
          </div>

          {/* Read More / Read Less Toggle */}
       <button
  onClick={toggleReadMore}
  className="text-blue-600 font-semibold hover:underline focus:outline-none block lg:hidden"
>
  {isExpanded ? "Read Less" : "Read More"}
</button>

        </div>
      </div>
    </div>
  );
};

export default About;
