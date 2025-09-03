import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiSearch, FiPhone, FiFileText } from "react-icons/fi";
import labelHierarchy from '../data/labelHierarchy';
import labelCategoryDetails from '../data/labelCategoryDetails';
import labelExtendedDetails from '../data/labelExtendedDetails';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Form from './Form';
import HeroLabel from './HeroLabel';

const CategoryDetail = () => {
  const { groupSlug, categorySlug } = useParams();
  const decodedGroup = decodeURIComponent(groupSlug).toLowerCase();
  const decodedCategory = decodeURIComponent(categorySlug).toLowerCase();

  const groupData = labelHierarchy.find(
    (group) => group.slug.toLowerCase() === decodedGroup
  );

  const categoryKey = decodedCategory.replace(/[^a-z0-9-]/gi, '').toLowerCase();
  const categoryData = labelCategoryDetails[categoryKey];

  // State for managing gallery images
  const [selectedImage, setSelectedImage] = useState(0);

  if (!groupData || !categoryData) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Category not found</h2>
        <Link to="/label" className="text-blue-500 underline">Back to Labels</Link>
      </div>
    );
  }

  let categoryFromGroup = groupData.categories.find(
    (cat) => cat.slug && cat.slug.toLowerCase() === categoryKey
  );

  if (!categoryFromGroup) {
    categoryFromGroup = groupData.categories.find(
      (cat) => cat.category && cat.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === categoryKey
    );
  }
  
  if (!categoryFromGroup && categoryData) {
    categoryFromGroup = groupData.categories.find(
      (cat) => cat.category && cat.category.toLowerCase() === categoryData.title.toLowerCase()
    );
  }
  
  const itemCards = categoryFromGroup?.items || [];

  // Image fallback logic - prioritize categoryData.image, then categoryFromGroup.image, then groupData.image
  const getCategoryImage = () => {
    return categoryData.image || 
           categoryFromGroup?.image || 
           groupData.image ;
  };

  // Gallery images - include up to 4 images from labelHierarchy
const galleryImages = [
  categoryFromGroup?.image || getCategoryImage(),
  categoryFromGroup?.image2 || categoryData.image2,
  categoryFromGroup?.image3 || categoryData.image3,
  categoryFromGroup?.image4 || categoryData.image4
].filter(Boolean); // remove undefined

  console.log('Debug Info:', {
    groupSlug,
    categorySlug,
    decodedGroup,
    decodedCategory,
    categoryKey,
    groupData: groupData?.group,
    categoryData: categoryData?.title,
    allCategories: groupData?.categories,
    categoryFromGroup,
    itemCards,
    categoryImage: getCategoryImage()
  });

  return (
    <>
      <Navbar />

     {/* <HeroLabel
  title={categoryData.title}
  description="Explore premium label categories"
  
/> */}

      {/* Content Section */}
      <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 py-10 mt-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
          
            <Link to={`/label/${groupData.slug}`} className="text-blue-500 hover:underline mb-4 inline-block">
              ← Back to {groupData.group}
            </Link>

            <h2 className="text-2xl font-bold mb-6 text-orange-600">{categoryData.title}</h2>
            
           {/* Professional Image Gallery Section */}
<div className="mb-8 flex flex-col md:flex-row gap-4">
  {/* Thumbnail Gallery */}
  <div className="flex md:flex-col gap-2 justify-center  items-center order-2 md:order-1 ">
    {galleryImages.map((image, index) => (
      <div 
        key={index} 
        className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-300 border border-red-500${
          selectedImage === index 
            ? 'ring-2 ring-orange-500 ring-offset-2' 
            : 'hover:opacity-80 border border-gray-300 hover:ring-2 hover:ring-orange-500 hover:ring-offset-2'
        }`}
        onClick={() => setSelectedImage(index)}
      >
        <img
          src={image}
          alt={`${categoryData.title} ${index + 1}`}
          className="w-20 h-16 object-cover"
        />
      </div>
    ))}
  </div>

  {/* Main Image */}
  <div className="flex-1 order-1 md:order-2">
    <img
     src={galleryImages[selectedImage]}
      alt={categoryData.title}
      className="w-full h-96 object-cover rounded-xl shadow-lg transition-all duration-300"
    />
  </div>
</div>


            {/* Product Description Box */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Product Description</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">{categoryData.intro}</p>
              
              {categoryData.applications && (
                <p className="text-gray-700 mb-2"><strong>Applications:</strong> {categoryData.applications}</p>
              )}
              {categoryData.bestFor && (
                <p className="text-gray-700"><strong>Best For:</strong> {categoryData.bestFor}</p>
              )}
            </div>

            {/* Key Features Box */}
            {categoryData.features && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  {categoryData.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
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


            {/* Item Cards Section */}
            {itemCards.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Available Items</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {itemCards.map((item, i) => {
                    const itemKey = item.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                    const itemDetail = labelExtendedDetails[itemKey];
                    
                    // Image fallback for item cards
                    const getItemImage = () => {
                      return itemDetail?.image || 
                             categoryFromGroup?.image || 
                             groupData.image || 
                             "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg";
                    };
                    
                    return (
                      <Link
                        key={i}
                        to={`/label/${groupSlug}/${categorySlug}/${itemKey}`}
                        className="block border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                      >
                        <img
                          src={getItemImage()}
                          alt={item}
                          className="w-full h-48 object-cover"
                          onError={(e) => {
                            e.target.src = "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg";
                          }}
                        />
                        <div className="p-4">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {itemDetail?.title || item}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-3">
                            {itemDetail?.description 
                              ? itemDetail.description.slice(0, 120) + "..." 
                              : "High-quality " + item.toLowerCase() + " for your branding needs. Click to learn more about specifications and customization options."
                            }
                          </p>
                          <div className="mt-3 text-orange-500 text-sm font-medium">
                            Learn More →
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}

            {/* If no items found, show a message */}
            {itemCards.length === 0 && (
              <div className="bg-gray-100 p-6 rounded-lg mb-10">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Items Coming Soon</h3>
                <p className="text-gray-600">
                  We're working on adding specific items for this category. Please check back soon or contact us for custom requirements.
                </p>
              </div>
            )}

            {/* Enquiry Form Section - After Items */}
            <div className="mt-10" id="enquiry-form">
              <Form />
            </div>
          </div>

          {/* Right Sidebar */}
          {/* <aside className="w-full lg:max-w-sm mt-10 lg:mt-0">
            <Asidepage />
          </aside> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryDetail;