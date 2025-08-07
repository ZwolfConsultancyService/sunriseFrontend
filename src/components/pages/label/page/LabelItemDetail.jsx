import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiSearch, FiPhone, FiFileText } from "react-icons/fi";
import labelExtendedDetails from '../data/labelExtendedDetails';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Form from './Form';
import Asidepage from './Asidepage';

const LabelItemDetail = () => {
  const { groupSlug, categorySlug, itemSlug } = useParams();
  const itemKey = itemSlug.toLowerCase().replace(/[^a-z0-9-]/gi, '');

  const itemData = labelExtendedDetails[itemKey];

  // State for managing gallery images
  const [selectedImage, setSelectedImage] = useState(0);

  if (!itemData) {
    return (
      <>
        <Navbar />
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold">Item not found</h2>
          <Link to={`/label/${groupSlug}/${categorySlug}`} className="text-blue-600 underline mt-4 block">
            ← Back to Category
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Gallery images for item detail
  const galleryImages = [
    itemData.image || "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg",
    itemData.image2 || "https://superlabelstore.com/wp-content/uploads/2022/10/woven-label-design-and-best-practices.jpg",
    itemData.image3 || "https://superlabelstore.com/en-au/wp-content/uploads/sites/8/2022/05/custom-clothing-labels-127.jpg"
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full mt-14">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={"https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg"}
          alt={itemData.title}
          className="w-full object-cover h-64 sm:h-72 md:h-80 lg:h-96"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl">
            {itemData.title}
          </h1>
          <p className="text-white text-sm sm:text-base mt-2 max-w-3xl">
            Discover detailed specifications and features
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <Link to={`/label/${groupSlug}/${categorySlug}`} className="text-blue-500 hover:underline mb-4 inline-block">
              ← Back to Category
            </Link>

            <h2 className="text-2xl font-bold mb-6 text-orange-600">{itemData.title}</h2>
            
            {/* Professional Image Gallery Section */}
            <div className="mb-8">
              {/* Main Image */}
              <div className="mb-4">
                <img
                  src={galleryImages[selectedImage]}
                  alt={itemData.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg transition-all duration-300"
                  onError={(e) => {
                    e.target.src = "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg";
                  }}
                />
              </div>
              
              {/* Thumbnail Gallery - Bottom Panel */}
              <div className="flex gap-2 justify-start">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index 
                        ? 'ring-2 ring-orange-500 ring-offset-2' 
                        : 'hover:opacity-80'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${itemData.title} ${index + 1}`}
                      className="w-20 h-16 object-cover"
                      onError={(e) => {
                        e.target.src = "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg";
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Description Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Description</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">{itemData.description}</p>
              
              {itemData.applications && (
                <p className="text-gray-700 mb-2"><strong>Applications:</strong> {itemData.applications}</p>
              )}
              {itemData.bestFor && (
                <p className="text-gray-700"><strong>Best For:</strong> {itemData.bestFor}</p>
              )}
            </div>

            {/* Key Features Box */}
            {itemData.features && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {itemData.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications Box */}
            {itemData.specifications && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(itemData.specifications).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-gray-800 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Materials & Colors Box */}
            {(itemData.materials || itemData.colors) && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Materials & Options</h3>
                
                {itemData.materials && (
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2 text-gray-700">Available Materials:</h4>
                    <div className="flex flex-wrap gap-2">
                      {itemData.materials.map((material, i) => (
                        <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {itemData.colors && (
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2 text-gray-700">Available Colors:</h4>
                    <p className="text-gray-700">{itemData.colors}</p>
                  </div>
                )}

                {itemData.customOptions && (
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-700">Customization Options:</h4>
                    <ul className="list-disc ml-5 space-y-1 text-gray-700">
                      {itemData.customOptions.map((option, i) => (
                        <li key={i}>{option}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Enquiry Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-10 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Get Quote & Enquiry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Call Button */}
                <a 
                  href="tel:+911234567890" 
                  className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <FiPhone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                
                {/* Enquiry Form Button */}
                <button 
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('enquiry-form')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }, 100);
                  }}
                  className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <FiFileText className="w-5 h-5 mr-2" />
                  Send Enquiry
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Get instant quote or detailed information about this product
                </p>
              </div>
            </div>

            {/* Enquiry Form Section - After Content */}
            <div className="mt-10" id="enquiry-form">
              <Form />
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:max-w-sm mt-10 lg:mt-0">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg mb-6 border border-orange-200">
              <h2 className="text-lg font-semibold mb-3 text-orange-800">Product Information</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <Link to={`/label/${groupSlug}/${categorySlug}`} className="text-orange-600 hover:underline capitalize">
                    {categorySlug?.replace(/-/g, ' ')}
                  </Link>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Group:</span>
                  <Link to={`/label/${groupSlug}`} className="text-orange-600 hover:underline capitalize">
                    {groupSlug?.replace(/-/g, ' ')}
                  </Link>
                </div>
                {itemData.minOrder && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Min Order:</span>
                    <span className="text-gray-800 font-medium">{itemData.minOrder}</span>
                  </div>
                )}
                {itemData.leadTime && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lead Time:</span>
                    <span className="text-gray-800 font-medium">{itemData.leadTime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Hot Products */}
            <Asidepage />
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LabelItemDetail;