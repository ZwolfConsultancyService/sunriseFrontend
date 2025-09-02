import React, { useEffect } from 'react';
import { FaIndustry, FaArrowRight, FaStar, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { manufacturingProcessData,companyInfo } from './manufacturingData';


const ManufacturingProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 mt-8">
      {/* Header Section */}
      <div className="relative overflow-hidden text-white">
        <div className="absolute inset-0 "></div>
        
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-300 opacity-10 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-pink-300 opacity-10 rounded-full"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center" data-aos="fade-up">
            <div className="flex justify-center items-center mb-6 sm:mb-8">
              <FaIndustry className="w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 text-yellow-300" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gray-800 bg-clip-text text-transparent">
                {companyInfo.title}
              </h1>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              {companyInfo.description}
            </p>
 
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12" data-aos="fade-up" data-aos-delay="200">
              {companyInfo.features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mb-2" />
                  <span className="text-xs sm:text-sm font-medium text-center leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {companyInfo.mainHeading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {manufacturingProcessData.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-8 lg:gap-16`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Content Side */}
              <div className="flex-1 w-full max-w-2xl">
                {/* Step Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                    <span className="text-xl sm:text-2xl font-bold">{step.id}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {step.step}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-1 flex items-center gap-2">
                      {step.title}
                      <span className="text-2xl sm:text-3xl">{step.emoji}</span>
                    </h3>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`p-6 sm:p-8 rounded-2xl ${step.bgColor} border-2 ${step.borderColor} ${step.hoverColor} hover:shadow-xl transition-all duration-300`}>
                  <p className="text-lg sm:text-xl text-gray-700 font-medium mb-6 leading-relaxed">
                    {step.mainDescription}
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {step.detailedPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <FaArrowRight className="w-4 h-4 text-gray-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{point}</span>
                      </div>
                    ))}
                  </div>

                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Process Step {step.id} of {manufacturingProcessData.length}</span>
                      <div className="flex space-x-1">
                        {manufacturingProcessData.map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i <= index ? `bg-gradient-to-r ${step.color}` : 'bg-gray-300'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full max-w-2xl">
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${step.color} rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.altText}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                    
                    {/* Image Overlay Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                              <span className="text-white font-bold text-sm sm:text-base">{step.id}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-800 text-sm sm:text-base block">{step.title}</span>
                              <span className="text-gray-600 text-xs sm:text-sm">{step.step}</span>
                            </div>
                          </div>
                          <FaCheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  );
};

export default ManufacturingProcess;