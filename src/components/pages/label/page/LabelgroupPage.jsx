import React from 'react';
import labelHierarchy from '../data/labelHierarchy';
import { Link } from 'react-router-dom';

const LabelGroupPage = ({ activeGroupIndex }) => {
  // Get the active group data
  const activeGroup = labelHierarchy[activeGroupIndex];

  if (!activeGroup) {
    return (
      <div className="px-3 md:px-8 mb-5 mt-24">
        <div className="text-center text-gray-500">
          <p>No group selected</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-3 md:px-8 mb-5 mt-20">
      {/* Group Title and Description */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {activeGroup.group}
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {activeGroup.description}
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {activeGroup.categories.map((category, index) => (
          <div key={index} data-aos="fade-up" className="flex justify-center">
            <Link 
              to={`/label/${activeGroup.slug}/${category.category.toLowerCase().replace(/\s+/g, "-")}`} 
              className="flex flex-col items-center w-full max-w-sm group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent group-hover:border-yellow-200">
                <img
                  alt={category.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={category.image}
                />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900 text-center group-hover:text-yellow-600 transition-colors duration-200">
                {category.category}
              </h3>
              {category.items && category.items.length > 0 && (
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    {category.items.length} {category.items.length === 1 ? 'Type' : 'Types'}
                  </p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {category.items.slice(0, 2).map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                      >
                        {item.length > 15 ? `${item.substring(0, 15)}...` : item}
                      </span>
                    ))}
                    {category.items.length > 2 && (
                      <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full">
                        +{category.items.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelGroupPage;