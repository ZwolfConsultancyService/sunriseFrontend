import React, { useState } from "react";
import { FiSearch, FiChevronDown, FiChevronRight } from "react-icons/fi";
import labelHierarchy from "../data/labelHierarchy";
import { Link } from "react-router-dom";

const Asidepage = ({ activeGroupIndex, setActiveGroupIndex }) => {
  const [openGroups, setOpenGroups] = useState({ 0: false });
  const [openCategories, setOpenCategories] = useState({});

  
  const handleGroupClick = (groupIndex) => {
    setActiveGroupIndex(groupIndex);

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
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                  ? "border-orange-500 shadow-md"
                  : "border-gray-200"
              }`}
            >
              {/* Group Header */}
              <div
                className={`w-full flex items-center justify-between p-3 cursor-pointer transition-colors ${
                  activeGroupIndex === groupIndex
                    ? "hover:bg-orange-100"
                    : "hover:bg-gray-50"
                }`}
              >
                {/* Group Text - Click to activate only */}
                <h3
                  onClick={() => handleGroupClick(groupIndex)}
                  className={`text-base font-bold flex-1 cursor-pointer ${
                    activeGroupIndex === groupIndex
                      ? "text-orange-400"
                      : "text-orange-500"
                  }`}
                >
                  {group.group}
                </h3>

                {/* Arrow - Click to expand/collapse */}
                <span
                  onClick={(e) => toggleGroup(groupIndex, e)}
                  className="p-1 cursor-pointer hover:bg-orange-50 rounded"
                >
                  {openGroups[groupIndex] ? (
                    <FiChevronDown className="text-orange-500 w-4 h-4 flex-shrink-0" />
                  ) : (
                    <FiChevronRight className="text-orange-500 w-4 h-4 flex-shrink-0" />
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
                          className="text-sm font-medium text-gray-700 hover:text-orange-500 flex-1 mr-2"
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
                                    className="hover:text-orange-500 hover:underline"
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