import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import labelHierarchy from '../data/labelHierarchy';
import labelCategoryDetails from '../data/labelCategoryDetails';
import labelExtendedDetails from '../data/labelExtendedDetails';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';
import Form from './Form';
import Asidepage from './Asidepage';

const CategoryDetail = () => {
  const { groupSlug, categorySlug } = useParams();
  const decodedGroup = decodeURIComponent(groupSlug).toLowerCase();
  const decodedCategory = decodeURIComponent(categorySlug).toLowerCase();

  const groupData = labelHierarchy.find(
    (group) => group.slug.toLowerCase() === decodedGroup
  );

  const categoryKey = decodedCategory.replace(/[^a-z0-9-]/gi, '').toLowerCase();
  const categoryData = labelCategoryDetails[categoryKey];

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
           groupData.image || 
           "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg";
  };

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

      {/* Hero Section */}
      <div className="relative w-full mt-14">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={"https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg"}
          alt={categoryData.title}
          className="w-full object-cover h-64 sm:h-72 md:h-80 lg:h-96"

        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20 px-4">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl">
            {categoryData.title}
          </h1>
          <p className="text-white text-sm sm:text-base mt-2 max-w-3xl">
            Explore premium label categories
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white text-gray-900 font-sans max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
          
            <Link to={`/label/${groupData.slug}`} className="text-blue-500 hover:underline mb-4 inline-block">
              ← Back to {groupData.group}
            </Link>

            <h2 className="text-2xl font-bold mb-6 text-orange-600">{categoryData.title}</h2>
            
            {/* Category Image */}
            <img
              src={getCategoryImage()}
              alt={categoryData.title}
              className="w-full h-64 object-cover rounded-lg mb-8"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.src = "https://superlabelstore.com/wp-content/uploads/2021/08/custom-care-labels-hero.jpg";
              }}
            />

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">{categoryData.intro}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Key Features:</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-700">
                {categoryData.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Applications & Best For */}
            {categoryData.applications && (
              <p className="mb-3"><strong>Applications:</strong> {categoryData.applications}</p>
            )}
            {categoryData.bestFor && (
              <p className="mb-10"><strong>Best For:</strong> {categoryData.bestFor}</p>
            )}

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

            <div className="mt-10">
              <Form />
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="w-full lg:max-w-sm mt-10 lg:mt-0">
            {/* Search */}
            <Asidepage />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryDetail;