import React from 'react';
import { useParams, Link } from 'react-router-dom';
import labelExtendedDetails from '../data/labelExtendedDetails';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

const LabelItemDetail = () => {
  const { groupSlug, categorySlug, itemSlug } = useParams();
  const itemKey = itemSlug.toLowerCase().replace(/[^a-z0-9-]/gi, '');

  const itemData = labelExtendedDetails[itemKey];

  if (!itemData) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Item not found</h2>
        <Link to={`/label/${groupSlug}/${categorySlug}`} className="text-blue-600 underline mt-4 block">
          ← Back to Category
        </Link>
      </div>
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
          </div>

          {/* Right Sidebar - You can customize this or replicate the right panel if needed */}
          <aside className="w-full lg:max-w-sm mt-10 lg:mt-0">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Want to get started?</h2>
              <p className="text-gray-700 mb-4">Contact us for samples, pricing or customization options.</p>
              <Link
                to="/contact"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow"
              >
                Contact Now
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LabelItemDetail;
