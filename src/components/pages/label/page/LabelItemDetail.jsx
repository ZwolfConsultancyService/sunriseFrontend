import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import labelExtendedDetails from '../data/labelExtendedDetails';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Form from './Form';
import Asidepage from './Asidepage';

const LabelItemDetail = () => {
  const { groupSlug, categorySlug, itemSlug } = useParams();
  const itemKey = itemSlug.toLowerCase().replace(/[^a-z0-9-]/gi, '');

  const itemData = labelExtendedDetails[itemKey];

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
            
            {/* Item Image */}
            <img
              src={itemData.image || "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg"}
              alt={itemData.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.src = "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg";
              }}
            />

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">{itemData.description}</p>

            {/* Features */}
            {itemData.features && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Key Features:</h3>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  {itemData.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications & Best For */}
            {itemData.applications && (
              <p className="mb-3"><strong>Applications:</strong> {itemData.applications}</p>
            )}
            {itemData.bestFor && (
              <p className="mb-10"><strong>Best For:</strong> {itemData.bestFor}</p>
            )}

            {/* Specifications Section (if available) */}
            {itemData.specifications && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Specifications:</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {Object.entries(itemData.specifications).map(([key, value], i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-gray-200 last:border-b-0">
                      <span className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Materials Section (if available) */}
            {itemData.materials && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Available Materials:</h3>
                <div className="flex flex-wrap gap-2">
                  {itemData.materials.map((material, i) => (
                    <span key={i} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Colors Section (if available) */}
            {itemData.colors && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Available Colors:</h3>
                <p className="text-gray-700">{itemData.colors}</p>
              </div>
            )}

            {/* Custom Options Section (if available) */}
            {itemData.customOptions && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Customization Options:</h3>
                <ul className="list-disc ml-5 space-y-1 text-gray-700">
                  {itemData.customOptions.map((option, i) => (
                    <li key={i}>{option}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Get Quote Section */}
            {/* <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg mb-10">
              <h3 className="text-xl font-bold text-orange-800 mb-3">Ready to Order?</h3>
              <p className="text-gray-700 mb-4">
                Get a custom quote for your {itemData.title.toLowerCase()} with your specifications, 
                quantities, and design requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium text-center transition-colors"
                >
                  Get Quote
                </Link>
                <Link
                  to="/samples"
                  className="bg-white hover:bg-gray-50 text-orange-600 border border-orange-300 px-6 py-2 rounded-lg font-medium text-center transition-colors"
                >
                  Request Sample
                </Link>
              </div>

            </div> */}

            <div className="mt-10">
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