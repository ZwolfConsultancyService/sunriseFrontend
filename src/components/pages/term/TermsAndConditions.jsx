import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Form from "../label/page/Form";
const TermsAndConditions = () => {
	  useEffect(() => {
	    AOS.init({ duration: 1000 });
	  }, []);
  return (
	<>
	<Navbar />
	 <div className="bg-white px-6 sm:px-10 md:px-20 lg:px-40 py-16 text-gray-700 mt-8"
    data-aos="fade-down">
      <h1 className="text-3xl md:text-4xl font-bold underline text-gray-700 mb-10 text-center">
        Terms and Conditions
      </h1>

      <div className="space-y-10 text-base leading-7">
        <p className="text-gray-600 font-semibold">
          Welcome to <strong>www.sunriselabels.com</strong> ("Website"), operated by <strong>Sunrise Label Co. Pvt. Ltd.</strong> ("Company", "we", "our", or "us"). By accessing or using this Website, you agree to be bound by the following Terms and Conditions. If you do not agree, please do not use this Website.
        </p>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">1. Acceptance of Terms</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 font-medium">
            <li>You are at least 18 years old or using the site under supervision of a parent or legal guardian.</li>
            <li>You agree to comply with all applicable laws and regulations.</li>
            <li>We may update these Terms. Continued use after changes implies acceptance.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">2. Use of the Website</h2>
          <p className="text-gray-600 font-bold">You agree not to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600 font-medium">
            <li>Submit false or harmful content</li>
            <li>Interfere with the Website’s functionality</li>
            <li>Access unauthorized areas of our systems</li>
            <li>Use content or brand assets without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">3. Products and Services</h2>
          <p className="text-gray-600 font-medium">
            We manufacture and sell trims and related products. Product descriptions and availability may change. Colors shown online may vary due to screen differences.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">4. Orders and Payments</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1 font-medium">
            <li>Orders can be placed via contact forms, email, or phone.</li>
            <li>Prices are in INR unless otherwise specified.</li>
            <li>Payment terms are discussed during order confirmation.</li>
            <li>We reserve the right to cancel orders at our discretion.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">5. Intellectual Property</h2>
      <p className="text-gray-600 font-medium">
            All content including logos, images, and text is owned by Sunrise Label Co. Pvt. Ltd. and protected by copyright. Unauthorized use is prohibited.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">6. Third-Party Links</h2>
       <p className="text-gray-600 font-medium">
            We may link to external sites. We are not responsible for their content, privacy, or any damages caused by their use.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">7. Limitation of Liability</h2>
          <ul className="list-disc list-inside text-gray-600 font-medium space-y-1">
            <li>Use of the site is at your own risk.</li>
            <li>We are not liable for errors, delays, or damages caused by third parties.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">8. Disclaimer</h2>
          <p className="text-gray-600 font-medium">
            The Website is provided "as is". We do not guarantee uninterrupted access or virus-free operation.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">9. Termination</h2>
           <p className="text-gray-600 font-medium">
            We may terminate or restrict your access to the Website at any time without notice, especially if these Terms are violated.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">10. Governing Law and Jurisdiction</h2>
       <p className="text-gray-600 font-medium">
            These Terms are governed by the laws of India. Disputes shall be resolved in the courts of [Your City, e.g., Mumbai, Delhi].
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl mb-2 text-gray-700">11. Contact Us</h2>
		      <div className="space-y-2">
			 <p className="flex items-center gap-2 text-base font-medium"><FaEnvelope className="text-blue-500" /> info@sunriselabels.com</p>
			 <p className="flex items-center gap-2 text-base font-medium"><FaPhoneAlt className="text-gray-700" /> +91-XXXXXXXXXX</p>
			 <p className="flex items-center gap-2 text-base font-medium"><FaMapMarkerAlt className="text-red-500" /> [Insert full business address here]</p>
			 </div>
        </section>
      </div>
    </div>
    <Footer />
	</>
   
  );
};

export default TermsAndConditions;
