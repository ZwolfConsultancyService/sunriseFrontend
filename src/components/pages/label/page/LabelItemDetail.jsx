import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";
import labelHierarchy from '../data/labelHierarchy';
import labelCategoryDetails from '../data/labelCategoryDetails';
import labelExtendedDetails from '../data/labelExtendedDetails';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import { FaWhatsapp } from 'react-icons/fa';

const LabelItemDetail = () => {
  // CRITICAL: Three parameters for item detail page
  const { groupSlug, categorySlug, itemSlug } = useParams();
  const navigate = useNavigate();
  
  console.log('=== LabelItemDetail Component ===');
  console.log('groupSlug:', groupSlug);
  console.log('categorySlug:', categorySlug);
  console.log('itemSlug:', itemSlug);
  
  // If itemSlug is missing, redirect to category page
  if (!itemSlug) {
    console.error('ERROR: No itemSlug found!');
    navigate(`/label/${groupSlug}/${categorySlug}`);
    return null;
  }

  const decodedGroup = decodeURIComponent(groupSlug).toLowerCase();
  const decodedCategory = decodeURIComponent(categorySlug).toLowerCase();
  const decodedItem = decodeURIComponent(itemSlug).toLowerCase();

  // Find group data
  const groupData = labelHierarchy.find(
    (group) => group.slug.toLowerCase() === decodedGroup
  );

  // Find category data
  const categoryKey = decodedCategory.replace(/[^a-z0-9-]/gi, '').toLowerCase();
  const categoryData = labelCategoryDetails[categoryKey];

  // Find item data
  const itemKey = decodedItem.replace(/[^a-z0-9-]/gi, '').toLowerCase();
  const itemData = labelExtendedDetails[itemKey];

  // State for managing gallery images
  const [selectedImage, setSelectedImage] = useState(0);

  // Contact details
  const PHONE_NUMBER = "+911234567890";
  const WHATSAPP_NUMBER = "911234567890";

  if (!groupData || !categoryData || !itemData) {
    return (
      <>
        <Navbar />
        <div className="py-12 text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">Item not found</h2>
          <Link to={`/label/${groupSlug}/${categorySlug}`} className="text-blue-500 underline">
            Back to Category
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Get category from group
  let categoryFromGroup = groupData.categories.find(
    (cat) => cat.slug && cat.slug.toLowerCase() === categoryKey
  );

  if (!categoryFromGroup) {
    categoryFromGroup = groupData.categories.find(
      (cat) => cat.category && cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === categoryKey
    );
  }

  // Gallery images for item
  const galleryImages = [
    itemData.image,
    itemData.image2,
    itemData.image3,
    itemData.image4
  ].filter(Boolean);

  // If no images, use fallback
  if (galleryImages.length === 0) {
    galleryImages.push(
      categoryFromGroup?.image || 
      groupData.image || 
      "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg"
    );
  }

  // WhatsApp handler
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${itemData.title}. Can you please provide more details about pricing and availability?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Phone handler
  const handlePhoneCall = () => {
    window.open(`tel:${PHONE_NUMBER}`, '_self');
  };

  return (
    <>
      <Navbar />

      {/* Content Section */}
      <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 py-10 mt-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            
            {/* Breadcrumb Navigation */}
            {/* <div className="mb-4 text-sm text-gray-600">
              <Link to="/label" className="hover:text-blue-500">Labels</Link>
              {' > '}
              <Link to={`/label/${groupSlug}`} className="hover:text-blue-500">{groupData.group}</Link>
              {' > '}
              <Link to={`/label/${groupSlug}/${categorySlug}`} className="hover:text-blue-500">{categoryData.title}</Link>
              {' > '}
              <span className="text-gray-900 font-medium">{itemData.title}</span>
            </div> */}

            <Link 
              to={`/label/${groupSlug}/${categorySlug}`} 
              className="text-blue-500 hover:underline mb-4 inline-block mt-4"
            >
              ← Back to {categoryData.title}
            </Link>

            <h1 className="text-3xl font-bold mb-6 text-orange-600">{itemData.title}</h1>
            
            {/* Image Gallery */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 justify-center items-center order-2 md:order-1">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedImage === index 
                        ? 'ring-2 ring-orange-500 ring-offset-2' 
                        : 'border border-gray-300 hover:opacity-80 hover:ring-2 hover:ring-orange-500 hover:ring-offset-2'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${itemData.title} ${index + 1}`}
                      className="w-20 h-16 object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 order-1 md:order-2">
                <img
                  src={galleryImages[selectedImage]}
                  alt={itemData.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg transition-all duration-300"
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Description</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {itemData.description || itemData.intro || "Premium quality product for your business needs."}
              </p>
              
              {itemData.applications && (
                <p className="text-gray-700 mb-2">
                  <strong>Applications:</strong> {itemData.applications}
                </p>
              )}
              {itemData.bestFor && (
                <p className="text-gray-700">
                  <strong>Best For:</strong> {itemData.bestFor}
                </p>
              )}
            </div>

            {/* Key Features */}
            {itemData.features && itemData.features.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {itemData.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Materials */}
            {itemData.materials && itemData.materials.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Materials</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {itemData.materials.map((material, i) => (
                    <li key={i}>{material}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {itemData.specifications && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(itemData.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enquiry Section */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-10 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Get Quote & Enquiry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* WhatsApp Button */}
                <button 
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  WhatsApp Enquiry
                </button>
                
                {/* Call Button */}
                <button 
                  onClick={handlePhoneCall}
                  className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <FiPhone className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Contact us instantly via WhatsApp or call for immediate assistance
                </p>
                <div className="mt-2 flex justify-center space-x-4 text-xs text-gray-500">
                  <span>📱 WhatsApp: {WHATSAPP_NUMBER}</span>
                  <span>📞 Call: {PHONE_NUMBER}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LabelItemDetail;