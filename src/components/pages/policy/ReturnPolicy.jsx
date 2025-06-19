import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Form from "../label/page/Form";

const ReturnPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="px-6 md:px-20 lg:px-40 xl:px-48 py-12 bg-white text-gray-800 mt-12"
        data-aos="fade-down"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-700 underline">
          Return Policy
        </h1>

        <section
          className="space-y-6 text-base md:text-base leading-relaxed"
          data-aos="fade-up"
        >
          <p className="text-gray-600 font-semibold">
            Sunrise Label Co. Pvt. Ltd. values your trust and aims to deliver
            the best quality products. Since most of our products are
            custom-made, we have a simple return policy:
          </p>

          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-700">
              ✅ When Can You Return
            </h2>
            <ul className="list-disc list-inside space-y-1 font-medium">
              <li>The product is damaged or defective</li>
              <li>You received the wrong item</li>
              <li>The product is different from the approved sample</li>
            </ul>
            <p className="mt-2 text-base font-medium">
              Please inform us within 7 days of receiving the order.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-700">
              ❌ What Can’t Be Returned
            </h2>
            <ul className="list-disc list-inside space-y-1 font-medium">
              <li>Customised products made as per your order</li>
              <li>Items returned after 7 days</li>
              <li>Items damaged after delivery due to misuse</li>
              <li>Trial or sample orders</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-700">
              🔁 How to Return
            </h2>
            <ol className="list-decimal list-inside space-y-1 font-medium">
              <li>
                Contact us at{" "}
                <span className="text-blue-600 font-semibold">
                  info@sunriselabels.com
                </span>{" "}
                or{" "}
                <span className="text-gray-700 font-semibold">
                  +91-XXXXXXXXXX
                </span>
              </li>
              <li>Provide your Order ID and issue details</li>
              <li>We’ll verify and guide you through the return process</li>
            </ol>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-700">Contact Us</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-base font-medium">
                <FaEnvelope className="text-blue-500" /> info@sunriselabels.com
              </p>
              <p className="flex items-center gap-2 text-base font-medium">
                <FaPhoneAlt className="text-gray-700" /> +91-XXXXXXXXXX
              </p>
              <p className="flex items-center gap-2 text-base font-medium">
                <FaMapMarkerAlt className="text-red-500" /> [Insert full
                business address here]
              </p>
            </div>
          </div>
        </section>
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default ReturnPolicy;
