import React, { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import labelHierarchy from "../data/labelHierarchy";
import { Link, useNavigate } from "react-router-dom";

const Asidepage = ({ activeGroupIndex, setActiveGroupIndex, isMobile = false }) => {
  const [openGroups, setOpenGroups] = useState({});
  const [openCategories, setOpenCategories] = useState({});
  const navigate = useNavigate();

  const handleGroupClick = (groupIndex) => {
    const group = labelHierarchy[groupIndex];
    const groupSlug = group.slug || group.group.toLowerCase().replace(/\s+/g, '-');
    
    // URL change karo
    navigate(`/label/${groupSlug}`);
    
    // State bhi update karo (agar function available hai)
    if (setActiveGroupIndex && typeof setActiveGroupIndex === 'function') {
      setActiveGroupIndex(groupIndex);
    }
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleGroup = (groupIndex, e) => {
    e.stopPropagation(); 
    const willBeClosed = openGroups[groupIndex];
    setOpenGroups(prev => ({
      ...prev,
      [groupIndex]: !prev[groupIndex]
    }));
    
    if (willBeClosed) {
      const categoriesToClose = {};
      Object.keys(openCategories).forEach(key => {
        if (!key.startsWith(`${groupIndex}-`)) {
          categoriesToClose[key] = openCategories[key];
        }
      });
      setOpenCategories(categoriesToClose);
    }
  };

  const toggleCategory = (groupIndex, categoryIndex, e) => {
    e.stopPropagation(); 
    const key = `${groupIndex}-${categoryIndex}`;
    setOpenCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCategoryClick = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleItemClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Mobile Layout: Dropdown Box (like sort by)
  if (isMobile) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
      <div className="mb-8 mt-0 lg:mt-16">
        <h2 className="text-lg font-semibold mb-4 text-center">Explore Labels</h2>
        
        {/* Mobile: Dropdown Box */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between p-4 border border-gray-300 rounded-lg bg-white hover:border-yellow-300 transition-colors"
          >
            <span className="text-gray-700 font-medium">
              {labelHierarchy[activeGroupIndex]?.group || "All Categories"}
            </span>
            <FiChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="py-2 max-h-60 overflow-y-auto">
                {labelHierarchy.map((group, groupIndex) => (
                  <button
                    key={groupIndex}
                    onClick={() => {
                      handleGroupClick(groupIndex);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                      activeGroupIndex === groupIndex
                        ? "bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500"
                        : "text-gray-700"
                    }`}
                  >
                    <div className="font-medium">{group.group}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {group.categories.length} {group.categories.length === 1 ? 'Category' : 'Categories'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Close dropdown when clicking outside */}
        {isDropdownOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsDropdownOpen(false)}
          />
        )}
      </div>
    );
  }

  // Desktop Layout: Sidebar with expandable sections
  return (
    <div>
      {/* Explore Labels */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Explore Labels</h2>
        <div className="space-y-2">
          {labelHierarchy.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`border rounded-lg transition-all duration-200 ${
                activeGroupIndex === groupIndex
                  ? "border-yellow-500 shadow-md"
                  : "border-gray-200"
              }`}
            >
              {/* Group Header */}
              <div
                className={`w-full flex items-center justify-between p-3 cursor-pointer transition-colors ${
                  activeGroupIndex === groupIndex
                    ? "hover:bg-yellow-100"
                    : "hover:bg-gray-50"
                }`}
              >
                {/* Group Text - Click to activate and navigate */}
                <h3
                  onClick={() => handleGroupClick(groupIndex)}
                  className={`text-base font-bold flex-1 cursor-pointer ${
                    activeGroupIndex === groupIndex
                      ? "text-yellow-400"
                      : "text-yellow-500"
                  }`}
                >
                  {group.group}
                </h3>

                {/* Arrow - Click to expand/collapse */}
                <span
                  onClick={(e) => toggleGroup(groupIndex, e)}
                  className="p-1 cursor-pointer hover:bg-yellow-50 rounded"
                >
                  {openGroups[groupIndex] ? (
                    <FiChevronDown className="text-yellow-500 w-4 h-4 flex-shrink-0" />
                  ) : (
                    <FiChevronRight className="text-yellow-500 w-4 h-4 flex-shrink-0" />
                  )}
                </span>
              </div>

              {/* Group Content */}
              {openGroups[groupIndex] && (
                <div className="border-t border-gray-200">
                  {group.categories.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      {/* Category Header */}
                      <div className="w-full flex items-center justify-between p-3 pl-6 hover:bg-gray-50 transition-colors">
                        {/* Category Link - Click to navigate only */}
                        <Link
                          to={`/label/${group.slug}/${category.category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-sm font-medium text-gray-700 hover:text-yellow-500 flex-1 mr-2"
                          onClick={handleCategoryClick}
                        >
                          {category.category}
                        </Link>
                        
                        {/* Category Arrow - Click to expand/collapse items */}
                        {category.items && category.items.length > 0 && (
                          <span
                            onClick={(e) => toggleCategory(groupIndex, categoryIndex, e)}
                            className="p-1 cursor-pointer hover:bg-gray-100 rounded"
                          >
                            {openCategories[`${groupIndex}-${categoryIndex}`] ? (
                              <FiChevronDown className="text-gray-500 w-3 h-3 flex-shrink-0" />
                            ) : (
                              <FiChevronRight className="text-gray-500 w-3 h-3 flex-shrink-0" />
                            )}
                          </span>
                        )}
                      </div>

                      {/* Category Items */}
                      {openCategories[`${groupIndex}-${categoryIndex}`] &&
                        category.items &&
                        category.items.length > 0 && (
                          <div className="bg-gray-50 px-6 pb-3">
                            <ul className="space-y-1">
                              {category.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="text-xs text-gray-600 pl-4 relative"
                                >
                                  <span className="absolute left-0 top-1">
                                    •
                                  </span>
                                  <Link
                                    to={`/label/${
                                      group.slug
                                    }/${category.category
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}/${item
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="hover:text-yellow-500 hover:underline"
                                    onClick={handleItemClick}
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asidepage;