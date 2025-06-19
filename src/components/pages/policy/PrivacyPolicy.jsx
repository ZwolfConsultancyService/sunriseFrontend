import React, { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Form from "../label/page/Form";

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (<>
  <Navbar />
    <div className="px-6 md:px-20 lg:px-40 xl:px-48 py-12 bg-white text-gray-800 mt-12"
    data-aos="fade-down">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-700 underline " >
        Privacy Policy
      </h1>

      <section className="space-y-6 text-base md:text-base leading-relaxed" data-aos="fade-up">
        <p className="text-gray-600 font-semibold">
          Sunrise Label Co. Pvt. Ltd. ("we", "our", "us") respects your privacy and is committed to protecting your data. This policy outlines how we collect, use, and protect your information.
        </p>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Personal Info:</strong> Name, Email, Phone, Company, Inquiry details</li>
            <li><strong>Transactional:</strong> Order info, Billing & Shipping Address</li>
            <li><strong>Technical:</strong> IP, Browser, OS, Device info</li>
            <li><strong>Cookies:</strong> Session, Persistent, Analytics (e.g., Google)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside font-medium text-base ">
            <li>Respond to inquiries & support</li>
            <li>Fulfill orders & improve services</li>
            <li>Send promotional content (opt-in only)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">3. Legal Basis for Processing</h2>
          <ul className="list-disc list-inside font-medium text-base">
            <li>Consent</li>
            <li>Contractual necessity</li>
            <li>Legitimate interest</li>
            <li>Legal obligation</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">4. Data Sharing and Disclosure</h2>
          <p className="text-base font-medium">
            We don’t sell your data. We may share with service providers, legal authorities, and analytics partners under strict agreements.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">5. Data Security</h2>
         <p className="text-base font-medium">
            We use SSL, firewalls, access controls, and audits. However, no system is 100% secure—please take precautions.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">6. Your Rights</h2>
          <ul className="list-disc list-inside text-base font-medium">
            <li>Access, correct, or delete your data</li>
            <li>Withdraw consent for marketing</li>
            <li>Lodge complaints</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">7. Cookies Policy</h2>
         <p className="text-base font-medium">
            We use cookies to enhance experience. You may control settings via your browser.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">8. Third-Party Sites</h2>
       <p className="text-base font-medium">
            Links to third-party sites are not covered by this policy. Please review their privacy terms separately.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">9. Data Retention</h2>
        <p className="text-base font-medium">
            We retain data only as long as necessary or required by law, after which it’s securely deleted or anonymized.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">10. Changes to Policy</h2>
      <p className="text-base font-medium">
            We may update this Privacy Policy. Updates will be posted with the new effective date.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-xl mb-2 text-gray-700">11. Contact Us</h2>
          <div className="space-y-2">
            <p className="flex items-center gap-2 text-base font-medium"><FaEnvelope className="text-blue-500" /> info@sunriselabels.com</p>
            <p className="flex items-center gap-2 text-base font-medium"><FaPhoneAlt className="text-gray-700" /> +91-XXXXXXXXXX</p>
            <p className="flex items-center gap-2 text-base font-medium"><FaMapMarkerAlt className="text-red-500" /> [Insert full business address here]</p>
          </div>
        </div>
      </section>
    </div>
    <Form />
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
