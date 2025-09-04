import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import About from "./About";
import Form from "../label/page/Form";
import ManufacturingProcess from "./ManufacturingProcess";

const AboutNav = () => {


  return (
    <div>
      <Navbar />

      <div className="mt-16">
        <About />
      </div>

      <ManufacturingProcess />

      {/* {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-lg relative">
  
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>

            <Form />
          </div>
        </div>
      )} */}

      <Footer />
    </div>
  );
};

export default AboutNav;
