import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "What types of trims do you manufacture?",
    answer: "We manufacture a wide range of trims including woven labels, printed labels, heat transfer labels, tags, tag seals, stickers, patches, leather/PU labels, metal labels, and more.",
  },
  {
    question: "Can I customize the size, color, and design of the labels?",
    answer: "Yes, all our products are fully customizable as per your design, size, color, and branding requirements.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "MOQ starts from 1,000 pcs for most items. For startups and samples, we can accommodate lower quantities.",
  },
  {
    question: "Do you offer design support?",
    answer: "Yes, we have an in-house design team that assists you in creating or refining your label designs – free of cost.",
  },
  {
    question: "How long does it take to deliver the order?",
    answer: "Standard turnaround is 5–10 working days depending on product type and volume. Express options are also available.",
  },
  {
    question: "Do you ship across India or internationally?",
    answer: "Yes, we ship both domestically and globally through trusted logistics partners.",
  },
  {
    question: "Can I get product samples before placing a bulk order?",
    answer: "Absolutely. We provide digital/physical samples before starting full production.",
  },
  {
    question: "Are your products eco-friendly?",
    answer: "We offer eco-options like organic cotton, recycled polyester, and sustainable packaging trims.",
  },
  {
    question: "What are your payment terms?",
    answer: "Typically, 50% advance and 50% before dispatch. Flexible terms for long-term clients.",
  },
  {
    question: "How do I place an order?",
    answer: "Reach us via phone, WhatsApp, email, or our website form. Share your requirements and our team will guide you.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
   return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 mt-32 sm:mt-4 md:mt-10">
      <div className="max-w-5xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Everything you need to know about our labels, services, and processes.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 bg-white rounded-lg shadow-sm"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left text-gray-700 font-medium hover:bg-gray-100 transition"
              >
                {faq.question}
                {activeIndex === index ? (
                  <FaChevronUp className="text-green-600" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${contentRefs.current[index]?.scrollHeight}px`
                      : '0px',
                }}
                className="px-6 overflow-hidden transition-all duration-500 ease-in-out text-gray-600"
              >
                <div className="py-4">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;