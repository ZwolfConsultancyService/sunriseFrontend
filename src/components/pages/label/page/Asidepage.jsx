import React, { useState } from "react";
import { FiSearch, FiChevronDown, FiChevronRight } from "react-icons/fi";
import labelHierarchy from "../data/labelHierarchy";
import { Link } from "react-router-dom";

const Asidepage = ({ activeGroupIndex, setActiveGroupIndex }) => {
  const [openGroups, setOpenGroups] = useState({ 0: true }); // First group open by default
  const [openCategories, setOpenCategories] = useState({});

  const toggleGroup = (groupIndex) => {
    // Close all other groups and open only the clicked one
    setOpenGroups({ [groupIndex]: !openGroups[groupIndex] });
    // Close all categories when switching groups
    setOpenCategories({});
    setActiveGroupIndex(groupIndex);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleCategory = (groupIndex, categoryIndex) => {
    const key = `${groupIndex}-${categoryIndex}`;
    setOpenCategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleGroupClick = (groupIndex) => {
    setActiveGroupIndex(groupIndex);
    // Close all other groups and open only the clicked one
    setOpenGroups({ [groupIndex]: true });
    // Close all categories when switching groups
    setOpenCategories({});
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (e) => {
    e.stopPropagation();
    // Scroll to top smoothly
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
              <button
                onClick={() => handleGroupClick(groupIndex)}
                className={`w-full flex items-center justify-between p-3 text-left transition-colors cursor-pointer ${
                  activeGroupIndex === groupIndex
                    ? "hover:bg-orange-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <h3
                  className={`text-base font-bold ${
                    activeGroupIndex === groupIndex
                      ? "text-orange-400"
                      : "text-orange-500"
                  }`}
                >
                  {group.group}
                </h3>
                {openGroups[groupIndex] ? (
                  <FiChevronDown className="text-orange-500 w-4 h-4 flex-shrink-0" />
                ) : (
                  <FiChevronRight className="text-orange-500 w-4 h-4 flex-shrink-0" />
                )}
              </button>

              {/* Group Content */}
              {openGroups[groupIndex] && (
                <div className="border-t border-gray-200">
                  {group.categories.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      {/* Category Header */}
                      <button
                        onClick={() =>
                          toggleCategory(groupIndex, categoryIndex)
                        }
                        className="w-full flex items-center justify-between p-3 pl-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <Link
                          to={`/label/${group.slug}/${category.category
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-sm font-medium text-gray-700 hover:text-orange-500 flex-1 mr-2"
                          onClick={handleCategoryClick}
                        >
                          {category.category}
                        </Link>
                        {category.items &&
                          category.items.length > 0 &&
                          (openCategories[`${groupIndex}-${categoryIndex}`] ? (
                            <FiChevronDown className="text-gray-500 w-3 h-3 flex-shrink-0" />
                          ) : (
                            <FiChevronRight className="text-gray-500 w-3 h-3 flex-shrink-0" />
                          ))}
                      </button>

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
