import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Form from "../label/page/Form";

const RefundPolicy = () => {
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
          Refund Policy
        </h1>

        <section
          className="space-y-6 text-base md:text-base leading-relaxed"
          data-aos="fade-up"
        >
          <p className="text-gray-600 font-semibold">
            At Sunrise Label Co. Pvt. Ltd., customer satisfaction is important to us. We offer refunds only in certain cases, as most of our products are custom-made.
          </p>

          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-700">💵 When Refunds Are Applicable</h2>
            <ul className="list-disc list-inside space-y-1 font-medium">
              <li>The product is defective or damaged</li>
              <li>You received the wrong item</li>
              <li>The product is not as per the approved design/sample</li>
              <li>A return is accepted and verified by our team</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-700">🚫 No Refunds Will Be Provided For:</h2>
            <ul className="list-disc list-inside space-y-1 font-medium">
              <li>Customised products made as per client request and approved design</li>
              <li>Delay in delivery caused by courier/logistics partners</li>
              <li>Minor color, size, or design variations due to printing/manufacturing processes</li>
              <li>Returns requested after 7 days of delivery</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-700">🕐 Refund Process & Timeline</h2>
            <ul className="list-disc list-inside space-y-1 font-medium">
              <li>Once your return is received and approved, refund will be processed within 7–10 business days</li>
              <li>Refund will be made to your original payment method (bank/UPI)</li>
              <li>We will notify you once your refund is processed</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-2 text-gray-700">📞 Contact for Refunds</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-base font-medium">
                <FaEnvelope className="text-blue-500" /> info@sunriselabels.com
              </p>
              <p className="flex items-center gap-2 text-base font-medium">
                <FaPhoneAlt className="text-gray-700" /> +91-XXXXXXXXXX
              </p>
              <p className="flex items-center gap-2 text-base font-medium">
                <FaMapMarkerAlt className="text-red-500" /> [Insert full business address here]
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

export default RefundPolicy;
