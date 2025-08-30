import React from 'react';
import labelHierarchy from '../data/labelHierarchy';
import { Link } from 'react-router-dom';

const LabelGroupPage = () => {
  return (
    <div className="px-3 md:px-8 mb-5 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {labelHierarchy.map((label, index) => (
          <div key={index} data-aos="fade-up" className="flex justify-center">
            <Link to={`/label/${label.slug}`} className="flex flex-col items-center w-full max-w-md">
              <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  alt={label.group}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  src={label.image}
                />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900 text-center">
                {label.group}
              </h3>
              <p className="text-center text-sm leading-relaxed line-clamp-3 text-gray-600 mt-2 px-4">
                {label.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelGroupPage;