// WhyChooseUs.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
  {
    title: "In-House Manufacturing",
    description: "We own our production facility, ensuring total quality control and timely delivery.",
    icon: "🏭"
  },
  {
    title: "Custom Branding Solutions",
    description: "From woven labels to tags – all personalized to match your unique brand identity.",
    icon: "🎨"
  },
  {
    title: "Export-Quality Standards",
    description: "Our trims meet EU, USA, and Middle East standards – tested for performance and compliance.",
    icon: "🌐"
  },
  {
    title: "Low MOQ & Fast Turnaround",
    description: "Ideal for both startups and scale-ups – quick sampling and global shipping.",
    icon: "🚀"
  },
  {
    title: "Trusted by Industry Leaders",
    description: "Backed by 10+ years of experience with 100+ apparel brands worldwide.",
    icon: "🤝"
  }
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800" data-aos="fade-up">Why Choose <span className="text-orange-400">Sunrise Label</span>?</h2>
        <p className="text-lg text-gray-500 mb-12" data-aos="fade-up" data-aos-delay="200">
          Premium trims tailored for global garment brands.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
