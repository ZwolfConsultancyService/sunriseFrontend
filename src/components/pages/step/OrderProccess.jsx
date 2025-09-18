import React, { useEffect } from 'react';
import {
  FaRegLightbulb, FaFileInvoiceDollar, FaCheck,
  FaMoneyBillWave, FaBoxOpen, FaThumbsUp,
  FaTruck, FaHeadset
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const steps = [
  { icon: <FaRegLightbulb />, title: 'Tell us what you need', desc: 'Share your design, size, material, color, or send a sample photo.', color: 'bg-purple-300', ml: 'md:ml-0' },
  { icon: <FaFileInvoiceDollar />, title: 'We send you a quote', desc: 'You’ll get the price, shipping cost, and payment details.', color: 'bg-purple-200', ml: 'md:ml-6' },
  { icon: <FaCheck />, title: 'Confirm the order', desc: 'If you agree, we’ll send you the invoice.', color: 'bg-teal-200', ml: 'md:ml-12' },
  { icon: <FaMoneyBillWave />, title: 'Make the payment', desc: 'After payment, we can create a free design if you don’t have one.', color: 'bg-blue-200', ml: 'md:ml-16' },
  { icon: <FaBoxOpen />, title: 'Sample (optional)', desc: 'If you want a sample, we’ll make it after receiving the sample charge.', color: 'bg-red-200', ml: 'md:ml-20' },
  { icon: <FaThumbsUp />, title: 'Approve the sample/design', desc: 'Once you approve, we’ll start bulk production.', color: 'bg-yellow-200', ml: 'md:ml-24' },
  { icon: <FaTruck />, title: 'Production & Delivery', desc: 'We make, check, and ship the products to you.', color: 'bg-indigo-200', ml: 'md:ml-28' },
  { icon: <FaHeadset />, title: 'After‑sales support', desc: 'We’re here to help you even after delivery.', color: 'bg-pink-200', ml: 'md:ml-32' },
];

const OrderProcess = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-12">
        
        {/* Steps - Left Side on Desktop */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex items-start space-x-4 ${step.ml}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg ${step.color} shadow`}
              >
                {step.icon}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-md">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Heading - Top on Mobile, Right on Desktop */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mt-0">
            Easy Order <br /> <span className="text-orange-400">Process</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
            Follow these steps to ensure a smooth order experience from start to finish.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OrderProcess;
