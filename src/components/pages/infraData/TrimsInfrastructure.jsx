// src/components/TrimsInfrastructure.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Award, HardDrive, Repeat, CheckSquare } from "lucide-react";
import infraData from "./infraData";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function TrimsInfrastructure() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }, []);

  const sectionIcons = [HardDrive, Repeat, Award, CheckSquare, Award]; // 5 icons

  return (
  <>
 <Navbar />
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 mt-16">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-400 underline ">Infrastructure</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Our trims infrastructure is built with world-class facilities,
          advanced machinery and skilled manpower ensuring premium quality.
        </p>
      </div>

      {/* Sections with alternating layout */}
      <div className="space-y-16">
        {infraData.sections.map((sec, idx) => {
          const Icon = sectionIcons[idx] || Award;
          const isEven = idx % 2 === 0;
          return (
            <div
              key={sec.id}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
              data-aos="fade-up"
            >
              {/* Text block */}
              <div className={isEven ? "order-1" : "order-2"}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#f7f7fb] rounded-md shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">{sec.heading}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">{sec.content}</p>

                {/* list */}
                {sec.list && (
                  <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                    {sec.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {sec.note && (
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {sec.note}
                  </p>
                )}
              </div>

              {/* Image block */}
              <div
                className={`w-full h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg ${
                  isEven ? "order-2" : "order-1"
                }`}
              >
                <img
                  src={infraData.gallery[idx % infraData.gallery.length]}
                  alt={`section-${idx}`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          );
        })}
      </div>

    </section>
    <Footer />
     </>
  );
}
